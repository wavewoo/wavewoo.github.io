import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Home, Shield, Calendar, FileText, Award, Camera, Gem, SquareCheckBig, ChevronDown, ChevronUp, Users, Download } from 'lucide-react';
import { getUserDetails, AUTHORIZED_USERS, ALL_USERS } from '@/lib/supabase';
import { getPassportPhoto } from '@/data/passportPhotos';
import { useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { AchievementsSection } from '@/components/gamification/AchievementsSection';
import { QuizSection } from '@/components/gamification/QuizSection';
// import { StampCollection } from '@/components/gamification/StampCollection';

const PersonalCabinet = () => {
  const { user, userProfile, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [showInterns, setShowInterns] = useState(false);

    if (loading || !userProfile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20 flex items-center justify-center">
        <div className="text-white text-xl">Завантаження... Якщо довго нічого не відбувається, оновіть сторінку</div>
      </div>
    );
  }

  // Get additional user details
  const additionalUserInfo = userProfile ? 
    getUserDetails(userProfile?.surname, userProfile?.passport) : null;

  // Helper function to find user by passport only
  const getUserByPassport = (passport: string) => {
    return AUTHORIZED_USERS?.find(user => user.passport === passport.trim());
  };

  // Get user's passport photo
  const passportPhoto = userProfile ? 
    getPassportPhoto(userProfile.passport) : null;

  // Find interns supervised by current user
  const getMyInterns = () => {
    if (!userProfile?.passport) return [];
    
    return ALL_USERS.filter(user => {
      if (!user.internship) return false;
      const internshipParts = user.internship.split(', ');
      return internshipParts.length >= 3 && internshipParts[2] === userProfile.passport;
    }).sort((a, b) => {
      const yearA = parseInt(a.internship?.split(', ')[0] || '0');
      const yearB = parseInt(b.internship?.split(', ')[0] || '0');
      return yearA - yearB; // Sort ascending (oldest first)
    });
  };

  const myInterns = getMyInterns();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const generatePDF = async () => {
    // Create a temporary HTML element with the certificate content
    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.width = '210mm'; // A4 width
    tempDiv.style.padding = '20mm';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.color = 'black';
    
    const currentDate = new Date().toLocaleDateString('uk-UA');
    const firstName = additionalUserInfo?.firstName || '';
    const surname = userProfile?.surname || '';
    
    tempDiv.innerHTML = `
      <div style="text-align: center; margin-bottom: 80px;">
        <img src="/coat-of-arms.jpg" style="width: 180px; height: 180px; margin-bottom: 20px; display: block; margin-left: auto; margin-right: auto;" onerror="this.style.display='none'" />
        <h1 style="font-size: 26px; font-weight: bold; margin: 0 0 10px 0;">Республіка Вейву</h1>
        <h2 style="font-size: 22px; font-weight: bold; margin: 0;">ДОВІДКА</h2>
      </div>
  
      <div style="font-size: 16px; line-height: 1.6; margin-bottom: 30px; text-align: justify; text-indent: 50px;">
        Ця довідка підтверджує, що ${firstName} ${surname} станом на ${currentDate} дійсно є громадянином/громадянкою Республіки Вейву і є вищим/вищою і кращим/кращою за всіх інших людей на світі. Довідка дає право на лікарняний, відпустку, підвищення зарплати, виграш спорів, прийняття пропозиції зустрічатися, усі інші можливі блага по всьому Всесвіту і зобов'язана прийматися і визнаватися усіма установами та організаціями, а також фізичними особами.
      </div>
  
      <div style="font-size: 12px; line-height: 1.4; margin-bottom: 30px; font-style: italic;">
        УВАГА! Ця довідка призначена для пред'явлення у інших державах та НЕ заміняє паспорт громадянина Республіки Вейву і НЕ дозволяє в'їзд у Республіку Вейву.
      </div>
  
      <div style="font-size: 16px; display: flex; margin-bottom: 30px; justify-content: space-between;">
        <span>${currentDate}</span>
        <span>Міністерство юстиції Республіки Вейву</span>
      </div>

      <div style="font-size: 12px; margin-bottom: 10px;">
        wavewoo.github.io
      </div>
    `;
    
    document.body.appendChild(tempDiv);
    
    try {
      // Convert HTML to canvas
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      // Create PDF
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      // Calculate dimensions to fit A4
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;
      
      // Center the image
      const x = (pdfWidth - scaledWidth) / 2;
      const y = (pdfHeight - scaledHeight) / 2;
      
      doc.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);
      doc.save(`dovidka_${firstName}_${surname}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Помилка при генерації PDF. Спробуйте ще раз.');
    } finally {
      // Clean up
      document.body.removeChild(tempDiv);
    }
  };

  const isAdmin = userProfile?.passport === 'НС0001';

  const generateAttendeesPDF = async () => {
    const fieldLabels: Record<string, string> = {
      firstName: "Ім'я",
      surname: 'Прізвище',
      passport: 'Паспорт',
      birthDate: 'Дата народження',
      citizenshipDate: 'Дата отримання громадянства',
      passportDate: 'Дата видачі паспорту',
      status: 'Статус у республіці',
      citStatus: 'Статус громадянства',
      attendance: 'Відвідування фестивалів',
      internship: 'Стажування',
      maritalStatus: 'Сімейний стан',
      president: 'Президентство',
      skinnyDip: 'Купання без одягу',
    };

    // Sort by surname then firstName
    const sorted = [...ALL_USERS].sort((a: any, b: any) => {
      const s = (a.surname || '').localeCompare(b.surname || '', 'uk');
      if (s !== 0) return s;
      return (a.firstName || '').localeCompare(b.firstName || '', 'uk');
    });

    const tempDiv = document.createElement('div');
    tempDiv.style.position = 'absolute';
    tempDiv.style.left = '-9999px';
    tempDiv.style.top = '0';
    tempDiv.style.width = '210mm';
    tempDiv.style.padding = '15mm';
    tempDiv.style.fontFamily = 'Arial, sans-serif';
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.color = 'black';
    tempDiv.style.fontSize = '14px';
    tempDiv.style.lineHeight = '1.4';

    const currentDate = new Date().toLocaleDateString('uk-UA');

    // Render header
    const renderToCanvas = async (html: string) => {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.left = '-9999px';
      div.style.top = '0';
      div.style.width = '180mm';
      div.style.padding = '0';
      div.style.fontFamily = 'Arial, sans-serif';
      div.style.backgroundColor = 'white';
      div.style.color = 'black';
      div.style.fontSize = '14px';
      div.style.lineHeight = '1.4';
      div.innerHTML = html;
      document.body.appendChild(div);
      try {
        const canvas = await html2canvas(div, {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
        });
        return canvas;
      } finally {
        document.body.removeChild(div);
      }
    };

    try {
      const doc = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const marginX = 15;
      const marginY = 15;
      const contentWidth = pdfWidth - marginX * 2;
      const contentHeight = pdfHeight - marginY * 2;
      let cursorY = marginY;

      // Header
      const headerCanvas = await renderToCanvas(`
        <div style="text-align: center; margin-bottom: 10px;">
          <h1 style="font-size: 22px; font-weight: bold; margin: 0 0 6px 0;">Республіка Вейву</h1>
          <h2 style="font-size: 18px; font-weight: bold; margin: 0 0 4px 0;">Повний реєстр відвідувачів фестивалів</h2>
          <div style="font-size: 14px;">Станом на ${currentDate} · Всього осіб: ${sorted.length}</div>
        </div>
      `);
      const headerHeight = (headerCanvas.height * contentWidth) / headerCanvas.width;
      doc.addImage(headerCanvas.toDataURL('image/png'), 'PNG', marginX, cursorY, contentWidth, headerHeight);
      cursorY += headerHeight + 4;

      // Each person as its own block; add page breaks cleanly between blocks
      for (let i = 0; i < sorted.length; i++) {
        const u: any = sorted[i];
        const rows = Object.keys(fieldLabels)
          .filter((k) => u[k] !== undefined && u[k] !== null && u[k] !== '')
          .map(
            (k) => `<div style="margin-left: 16px;"><strong>${fieldLabels[k]}:</strong> ${u[k]}</div>`
          )
          .join('');
        const html = `
          <div style="padding: 6px 0;">
            <div style="font-weight: bold; font-size: 16px; margin-bottom: 4px;">
              ${i + 1}. ${u.surname || ''} ${u.firstName || ''}
            </div>
            ${rows}
          </div>
        `;
        const canvas = await renderToCanvas(html);
        const blockHeight = (canvas.height * contentWidth) / canvas.width;

        if (cursorY + blockHeight > marginY + contentHeight) {
          doc.addPage();
          cursorY = marginY;
        }
        doc.addImage(canvas.toDataURL('image/png'), 'PNG', marginX, cursorY, contentWidth, blockHeight);
        cursorY += blockHeight + 3;
      }

      doc.save(`registry_attendees_${currentDate}.pdf`);
    } catch (error) {
      console.error('Error generating attendees PDF:', error);
      alert('Помилка при генерації PDF. Спробуйте ще раз.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-festival-blue via-festival-blue/90 to-festival-yellow/20">
      {/* Navigation - keeping the same */}
      <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Особистий кабінет</h1>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Home className="w-4 h-4 mr-2" />
              Головна
            </Button>
            <Button 
              variant="outline" 
              onClick={handleSignOut}
              className="bg-red-500/20 border-red-300/50 text-white hover:bg-red-500/30"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Welcome Card - keeping the same */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-2xl">
                <User className="w-8 h-8" />
                Республіка вітає вас, {additionalUserInfo?.firstName || userProfile?.surname}!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/90">
              <p className="text-lg mb-4">
                Ви увійшли та можете користуватися всіма можливостями сайту.
              </p>
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="bg-festival-yellow text-festival-blue font-semibold">
                  <SquareCheckBig className="w-4 h-5 mr-2" />
                  Громадянин Республіки Вейву
                </Badge>
                <br />
                <br />
              </div>
              {/* Warning Message for Frozen Status */}
              {additionalUserInfo?.citStatus === 'Заморожене' && (
                 <div className="bg-red-500/30 border border-red-500/50 text-white text-md font-semibold p-4 rounded-lg text-center">
                  УВАГА! ВАШЕ ГРОМАДЯНСТВО ЗАМОРОЖЕНЕ!<br />
                  Швидше за все, так сталося, бо ви не були присутніми принаймні на трьох останніх фестивалях. Зверніть увагу, що якщо ви будете відсутні
                  на п'яти останніх фестивалях, ваше громадянство та ваш паспорт втратять силу.
                </div>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Profile Information */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Ваш електронний паспорт:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">              

              {/* Photo Section */}
              <div className="flex justify-left mb-6">
                <div className="relative">
                  <div className="w-32 h-42 bg-white/10 border-2 border-white/30 rounded-lg overflow-hidden shadow-lg">
                    {passportPhoto ? (
                      <img 
                        src={passportPhoto} 
                        alt="Паспортне фото" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Camera className="w-8 h-8 text-white/50" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subsections Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Information */}
                <div>
                  <label className="text-white/70 text-sm font-medium">Прізвище</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile?.surname}</p>
                </div>
                {additionalUserInfo?.firstName && (
                  <div>
                    <label className="text-white/70 text-sm font-medium">Ім'я</label>
                    <p className="text-white text-lg font-semibold mt-1">{additionalUserInfo.firstName}</p>
                  </div>
                )}
                <div>
                  <label className="text-white/70 text-sm font-medium">Серія та номер паспорту</label>
                  <p className="text-white text-lg font-semibold mt-1">{userProfile?.passport}</p>
                </div>
                {additionalUserInfo?.status && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Статус у республіці
                    </label>
                    <p className="text-festival-yellow text-lg font-semibold mt-1">{additionalUserInfo.status}</p>
                  </div>
                )}
                
                {/* Dates */}
                {additionalUserInfo?.birthDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Дата народження
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.birthDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                {additionalUserInfo?.citizenshipDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Дата отримання громадянства
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.citizenshipDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                {additionalUserInfo?.passportDate && (
                  <div>
                    <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Дата видачі паспорту
                    </label>
                    <p className="text-white text-lg mt-1">
                      {new Date(additionalUserInfo.passportDate).toLocaleDateString('uk-UA')}
                    </p>
                  </div>
                )}
                <div>
                  <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                    <Gem className="w-4 h-4" />
                    Сімейний стан
                  </label>
                  <p className="text-white text-lg mt-1">
                    {additionalUserInfo?.maritalStatus ? (() => {
                      const [spousePassport, marriageDate] = additionalUserInfo.maritalStatus.split('; ');
                      const spouseInfo = getUserByPassport(spousePassport);
                      return `Шлюб з ${spouseInfo?.firstName || ''} ${spouseInfo?.surname || ''} (паспорт ${spousePassport}), зареєстровано ${new Date(marriageDate).toLocaleDateString('uk-UA')}`;
                    })() : 'Вільний'}
                  </p>
                </div>
                <div>
                  <label className="text-white/70 text-sm font-medium">Статус громадянства</label>
                  <p className={`text-lg font-semibold mt-1 ${
                    additionalUserInfo?.citStatus === 'Заморожене' ? 'text-red-400' : 'text-green-300'
                  }`}>
                    {additionalUserInfo?.citStatus || 'Дійсне'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Internship Section */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Стажування</CardTitle>
            </CardHeader>
            <CardContent>
              {additionalUserInfo?.internship ? (() => {
                if (additionalUserInfo.internship === 'Непотрібне') {
                  return (
                    <div className="bg-green-500/20 border border-green-500/40 text-white text-lg font-semibold p-4 rounded-lg text-center mb-6">
                      🎉 Ви отримали громадянство до впровадження інституту стажування, тому вам не довелося його проходити. Пишайтесь цим!
                    </div>
                  );
                }
                const internshipParts = additionalUserInfo.internship.split(', ');
                const year = internshipParts[0];
                const ministry = internshipParts[1];
                const supervisorPassport = internshipParts[2];
                
                const supervisorInfo = supervisorPassport ? getUserByPassport(supervisorPassport) : null;
                return (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Рік стажування
                      </label>
                      <p className="text-white text-lg font-semibold mt-1">{year}</p>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Міністерство
                      </label>
                      <p className="text-white text-lg font-semibold mt-1">{ministry}</p>
                    </div>
                    <div>
                      <label className="text-white/70 text-sm font-medium flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Поручитель
                      </label>
                      <p className={`text-lg font-semibold mt-1 ${!supervisorPassport ? 'text-red-400' : 'text-white'}`}>
                        {!supervisorPassport ? 
                          'Поручитель не має дійсного паспорта нового зразка' : 
                          `${supervisorInfo?.firstName || ''} ${supervisorInfo?.surname}`
                        }
                      </p>
                    </div>
                  </div>
                );
              })() : (
                <div className="bg-yellow-500/20 border border-yellow-500/40 text-white text-lg p-4 rounded-lg text-center mb-6">
                  Інформація про ваше стажування відсутня у державних реєстрах. Повідомте державні органи, якщо це помилка
                </div>
              )}

              {/* My Interns Button */}
              <div className="w-full">
                <Button 
                  variant="outline" 
                  onClick={() => setShowInterns(!showInterns)}
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex items-center justify-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">Мої стажери</span>
                  {showInterns ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </div>

              {/* Interns List - Collapsible */}
              {showInterns && (
                <div className="mt-6 space-y-4">
                  {myInterns.length > 0 ? (
                    <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                      <h4 className="text-white text-lg font-semibold mb-4">Ваші минулі стажери:</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-white">
                          <thead>
                            <tr className="border-b border-white/20">
                              <th className="text-left py-2 px-3 text-white/70 font-medium">Ім'я та прізвище</th>
                              <th className="text-left py-2 px-3 text-white/70 font-medium">Рік стажування</th>
                              <th className="text-left py-2 px-3 text-white/70 font-medium">Статус громадянства</th>
                            </tr>
                          </thead>
                          <tbody>
                            {myInterns.map((intern, index) => {
                              const internshipParts = intern.internship?.split(', ') || [];
                              const internshipYear = internshipParts[0] || 'Невідомо';
                              
                              return (
                                <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                  <td className="py-3 px-3 font-medium">
                                    {intern.firstName} {intern.surname}
                                  </td>
                                  <td className="py-3 px-3">
                                    {internshipYear}
                                  </td>
                                  <td className="py-3 px-3">
                                    <span className={`font-semibold ${
                                      intern.citStatus === 'Дійсне' ? 'text-green-300' :
                                      intern.citStatus === 'Заморожене' ? 'text-yellow-300' :
                                      'text-red-300'
                                    }`}>
                                      {intern.citStatus || 'Невідомо'}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-blue-500/20 border border-blue-500/40 text-white text-lg p-4 rounded-lg text-center">
                      У вас поки що не було стажерів. Не бійтеся брати на стажування осіб, у яких бачите потенціал!
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Attendance */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Відвідування фестивалів</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                {Array.from({ length: new Date().getFullYear() - 2014 + 1 }, (_, i) => {
                  const year = 2014 + i;
                  const attendedYears = additionalUserInfo?.attendance?.split(',').map(y => y.trim()) || [];
                  const attended = attendedYears.includes(year.toString());

                  return (
                    <div
                      key={year}
                      onClick={() => navigate("/festival-stats")}
                      className={`
                        relative group
                        text-white text-center py-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer
                        ${attended ? 'bg-green-500/30 hover:bg-green-500/50' : 'bg-red-500/30 hover:bg-red-500/50'}
                        transform hover:scale-105
                      `}
            >
                      {year}
                      {/* Tooltip */}
                      <div className={`
                        absolute -bottom-10 left-1/2 -translate-x-1/2 w-max px-3 py-1 rounded-md text-sm
                        ${attended ? 'bg-green-500/30 text-white' : 'bg-red-500/30 text-white'}
                        opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200
                        backdrop-blur-sm border border-white/20 z-10
                      `}>
                        {attended ? 'Відвідав\\ла' : 'Не відвідав\\ла'}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Achievements Section */}
          <AchievementsSection 
            attendedYears={additionalUserInfo?.attendance?.split(',').map(year => parseInt(year.trim())).filter(year => !isNaN(year)) || []}
            additionalInfo={additionalUserInfo}
          />

          {/* Quiz Section */}
          <QuizSection />

          {/* Stamp Collection 
          <StampCollection 
            attendedYears={additionalUserInfo?.attendance?.split(',').map(year => parseInt(year.trim())).filter(year => !isNaN(year)) || []}
          /> */}

          {/* Електронна Республіка */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Електронна Республіка</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                {additionalUserInfo?.citStatus === 'Заморожене' ? (
                  <div className="bg-red-500/30 border border-red-500/50 text-white text-md font-semibold p-4 rounded-lg text-center">
                    Ви не можете генерувати документи, оскільки ваше громадянство заморожене!
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={generatePDF}
                    className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex items-center justify-center gap-2"
                  >
                    <Download className="w-5 h-5" />
                    <span className="font-semibold">Завантажити довідку про вищість</span>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Admin Section - only for passport НС0001 */}
          {isAdmin && (
            <Card className="bg-festival-yellow/10 backdrop-blur-sm border-festival-yellow/40">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Shield className="w-5 h-5 text-festival-yellow" />
                  Адміністративна панель
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  onClick={generateAttendeesPDF}
                  className="w-full bg-festival-yellow/20 border-festival-yellow/50 text-white hover:bg-festival-yellow/30 h-auto py-4 flex items-center justify-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-semibold">Згенерувати реєстр усіх відвідувачів фестивалів</span>
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-xl">Швидкі дії</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Existing Grid for Other Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <Button 
                  variant="outline" 
                  onClick={() => window.open("https://drive.google.com/drive/folders/1ExoCiVnXA2f50CPw060moGFx7kC3sBJw?usp=drive_link")}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Повна галерея</span>
                  <span className="text-sm opacity-80">Переглянути фото</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/next-festival')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Наступний фестиваль</span>
                  <span className="text-sm opacity-80">Інформація про подію</span>
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/festival-stats')}
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Статистика</span>
                  <span className="text-sm opacity-80">Детальні дані</span>
                </Button>
              </div>
              {/* New Full-Width Section for Whiteboard Button */}
              <div className="w-full">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/whiteboard')}
                  className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20 h-auto py-4 flex-col gap-2"
                >
                  <span className="font-semibold">Спільна дошка</span>
                  <span className="text-sm opacity-80">Діліться ідеями і малюнками</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PersonalCabinet;