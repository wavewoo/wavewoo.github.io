import React, { useState, useEffect } from 'react';
import { ALL_USERS } from '@/lib/supabase';

interface President {
  period: string;
  name: string;
  achievements: string;
}

const PresidentsTable = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [presidentsData, setPresidentsData] = useState<President[]>([]);

  useEffect(() => {
    // Extract presidents from AUTHORIZED_USERS
    const presidents: President[] = [];
    
    ALL_USERS.forEach(user => {
      if (user.president) {
        const fullName = `${user.firstName} ${user.surname}`;
        
        // Handle special cases for achievements/notes
        let achievements = "";
        
        // Use this to add info to achievements section
        if (user.surname === "КІНДРАТІВ" && user.president === "2022") {
          achievements = "Не прибула на фестиваль правління";
        }
        
        presidents.push({
          period: user.president,
          name: fullName,
          achievements: achievements
        });
      }
    });

    // Sort by year (period)
    presidents.sort((a, b) => parseInt(a.period) - parseInt(b.period));
    
    setPresidentsData(presidents);
  }, []);

  // Function to decode Cyrillic text (if needed)
  const decodeCyrillic = (text: string): string => {
    try {
      // The text appears to be URL-encoded Cyrillic
      return decodeURIComponent(text.replace(/Ð/g, '%D0').replace(/Ñ/g, '%D1'));
    } catch (error) {
      // If decoding fails, return original text
      return text;
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-xl font-bold text-festival-blue mb-6 text-center">
        Президенти Республіки Вейву
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-festival-blue/10">
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Фестиваль правління
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Ім'я президента
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Примітки
              </th>
            </tr>
          </thead>
          <tbody>
            {presidentsData.map((president, index) => (
              <tr
                key={index}
                className={`transition-all duration-300 cursor-pointer ${
                  hoveredRow === index 
                    ? 'bg-festival-yellow/20 shadow-md' 
                    : 'hover:bg-gray-50'
                }`}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                style={{
                  fontSize: hoveredRow === index ? '1.05em' : '1em',
                  transition: 'all 0.3s ease'
                }}
              >
                <td 
                  className={`border border-gray-300 px-4 py-3 font-medium transition-all duration-300 ${
                    hoveredRow === index ? 'text-festival-blue font-bold' : 'text-gray-700'
                  }`}
                >
                  {president.period}
                </td>
                <td 
                  className={`border border-gray-300 px-4 py-3 transition-all duration-300 ${
                    hoveredRow === index ? 'text-festival-blue font-bold' : 'text-gray-800'
                  }`}
                >
                  {decodeCyrillic(president.name)}
                </td>
                <td 
                  className={`border border-gray-300 px-4 py-3 transition-all duration-300 ${
                    hoveredRow === index ? 'text-gray-800 font-medium' : 'text-gray-600'
                  }`}
                >
                  {president.achievements}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Additional info */}
      <div className="mt-6 p-4 bg-festival-yellow/10 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          💡 Дані автоматично завантажуються з бази користувачів ({presidentsData.length} президентів знайдено)
        </p>
      </div>
      
      {/* Hover tooltip */}
      {hoveredRow !== null && presidentsData[hoveredRow] && (
        <div className="fixed top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 z-50 max-w-xs">
          <div className="text-sm font-bold text-festival-blue mb-1">
            {decodeCyrillic(presidentsData[hoveredRow].name)}
          </div>
          <div className="text-xs text-gray-600">
            Правив у {presidentsData[hoveredRow].period}
          </div>
        </div>
      )}
    </div>
  );
};

export default PresidentsTable;