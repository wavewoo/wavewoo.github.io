import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Brain, CheckCircle, XCircle, Award, Sparkles, Zap } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  category: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: '11',
    question: 'У якому році було засновано Республіку Вейву?',
    category: 'Рівень 1',
    options: ['2013', '2014', '2015', '2016', '2017'],
    correctAnswer: 1,
    explanation: 'Ну, це мало би бути легко. Перший фестиваль і заснування Республіки відбулися у 2014-му році.'
  },
  {
    id: '12',
    question: 'Де зазвичай проходять Фестивалі Проголошення Республіки Вейву?',
    category: 'Рівень 1',
    options: ['В Дрогобичі', 'Біля моря', 'У Карпатах', 'У когось вдома', 'В полі'],
    correctAnswer: 2,
    explanation: 'Фестивалі традиційно проходять в українських Карпатах.'
  },
  {
    id: '21',
    question: 'Який з цих видів алкоголю заборонений у Республіці Вейву?',
    category: 'Рівень 2',
    options: ['Пиво', 'Вино', 'Віскі', 'Коньяк', '??? Ніякий'],
    correctAnswer: 4,
    explanation: 'Звичайно, що ніякий. Див. ст. 6 Конституції Вейву'
  },
  {
    id: '22',
    question: 'Хто зазвичай урочисто піднімає прапор Республіки під час церемонії відкриття?',
    category: 'Рівень 2',
    options: ['Міністр фінансів', 'Міністр юстиції', 'Хтось із нових жителів', 'Президент', 'Віце-Президент'],
    correctAnswer: 2,
    explanation: 'Згідно з традицією, яка склалася ще в 2019-му році, прапор піднімають нові жителі Республіки'
  },
  {
    id: '23',
    question: 'Якого з цих міністерств не існує?',
    category: 'Рівень 2',
    options: ['Міністерство господарства', 'Міністерство щастя', 'Міністерство енергетики', 'Міністерство юстиції', 'Міністерство фінансів'],
    correctAnswer: 1,
    explanation: 'Міністерство щастя не потрібне, оскільки у Республіці Вейву і так усі щасливі.'
  },
  {
    id: '24',
    question: 'Чим займається міністерство ТаТиШо?',
    category: 'Рівень 2',
    options: ['Причастям жителів, прославленням Артеліса, укладенням шлюбів',
              'Організацією культурних заходів, наливанням алкоголю', 
              'Розподілом ресурсів, підняттям прапора', 
              'Проведенням йоги, проведенням сесій медитації', 
              'Відкриттям магазинів Sinsay у Республіці'],
    correctAnswer: 0,
    explanation: 'Якщо ви відповіли неправильно, вам явно треба причаститися.'
  },
  {
    id: '31',
    question: 'Тепер трохи складніше. Громадянство Вейву можливо отримати і БЕЗ дотримання якої з наступних умов?',
    category: 'Рівень 3',
    options: ['Попереднє запрошення на Фестиваль від когось з громадян',
              'Успішне проходження стажування у якомусь із міністерств чи управлінь',
              'Відвідування принаймні двох фестивалів', 
              'Посвячення у міністерстві ТаТиШо', 
              'Отримання фізичного паспорта Республіки'],
    correctAnswer: 3,
    explanation: 'Посвячення у міністерстві ТаТиШо необов\'язкове. Тим не менше, якщо хочете, ніхто вам не завадить.'
  },
  {
    id: '32',
    question: 'Яка з цих умов є НЕобов\'язковою для проведення Фестивалю проголошення Республіки Вейву?',
    category: 'Рівень 3',
    options: ['Фестиваль повинен відбуватися у липні або серпні',
              'Фестиваль повинен відбуватися біля водяного об\'єкту',
              'Фесиваль повинен відбуватися у Карпатах', 
              'На Фестивалі повинні бути присутні хоча б троє громадян Республіки Вейву', 
              'Фестиваль повинен бути проведений при піднятому прапорі Республіки Вейву'],
    correctAnswer: 2,
    explanation: 'Фестиваль повинен бути проведений у гірській місцевості - однак не обов\'язково саме в Карпатах.'
  },
  {
    id: '41',
    question: 'СИТУАЦІЯ: Один з жителів випив 50 грам і почав висловлювати небезпечні ідеї, які включають повалення конституційного ладу Республіки, захоплення влади і сепаратизм. Які дії найкраще вчинити?',
    category: 'Рівень 4',
    options: ['Ігнорувати його, він так говорить просто бо випив 50 грам. Нічого серйозного',
              'Спробувати переконати його у хибності і небезпечності його ідей. Хто говорить, того слухають',
              'Повідомити міністра внутрішніх справ Республіки. Опісля, злочинця необхідно закрити у в\'язниці', 
              'Арештувати злочинця самостійно, використовуючи для цього всі необхідні засоби', 
              'Налити йому ще 50 грам'],
    correctAnswer: 4,
    explanation: 'Іще 50 грам є єдиним правильним рішенням! Див. ст. 3 Конституції Вейву'
  },
  {
    id: '42',
    question: 'СИТУАЦІЯ: Державний кордон Республіки самостійно перетнув невідомий чоловік. Він висловлює дивні фрази, типажу "Привіт! Ми неподалік граємо у футбол, хочете приєднатися?". Як найкраще вчинити?',
    category: 'Рівень 4',
    options: ['Можна погодитися і піти грати з ним у футбол',
              'Спершу необхідно видати йому паспорт Республіки, тож варто звернутися до керівництва',
              'Найкраще відвести його до міністерства ТаТиШо для посвячення', 
              'Варто затримати його і зробити рабом', 
              'Необхідно взяти з нього мито за перетин кордону'],
    correctAnswer: 3,
    explanation: 'Невідомий чоловік сам вибрав свою долю! Див. ч.2 ст. 45 Конституції Вейву'
  }
];

interface QuizResult {
  score: number;
  totalQuestions: number;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

export const QuizSection = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [currentResult, setCurrentResult] = useState<QuizResult | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [animationKey, setAnimationKey] = useState(0);

  // Particle animation effect
  useEffect(() => {
    if (particles.length === 0) return;

    const animationFrame = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.2, // gravity
            life: particle.life - 1
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(animationFrame);
  }, [particles]);

  const createParticles = (isCorrect: boolean) => {
    const newParticles: Particle[] = [];
    const colors = isCorrect 
      ? ['#10B981', '#34D399', '#6EE7B7', '#A7F3D0'] // Green variants
      : ['#EF4444', '#F87171', '#FCA5A5', '#FECACA']; // Red variants
    
    // Create particles from center of screen
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < (isCorrect ? 40 : 10); i++) {
      const angle = (i / (isCorrect ? 40 : 10)) * Math.PI * 2;
      const speed = isCorrect ? Math.random() * 8 + 4 : Math.random() * 6 + 2;
      
      newParticles.push({
        id: Date.now() + i,
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (isCorrect ? Math.random() * 3 + 2 : Math.random() * 2),
        life: isCorrect ? 80 : 60,
        maxLife: isCorrect ? 80 : 60,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: isCorrect ? Math.random() * 8 + 4 : Math.random() * 6 + 3
      });
    }
    
    setParticles(newParticles);
    setAnimationKey(prev => prev + 1);
  };

  const startQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setCurrentResult(null);
    setShowExplanation(false);
    setParticles([]);
    setIsQuizOpen(true);
  };

  const selectAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
    
    // Create particles based on correct/incorrect answer
    const isCorrect = answerIndex === quizQuestions[currentQuestion].correctAnswer;
    createParticles(isCorrect);
  };

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowExplanation(false);
      setParticles([]);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const score = selectedAnswers.reduce((total, answer, index) => {
      return total + (answer === quizQuestions[index].correctAnswer ? 1 : 0);
    }, 0);

    const result: QuizResult = {
      score,
      totalQuestions: quizQuestions.length
    };

    setCurrentResult(result);
    setShowResults(true);
    setParticles([]);
  };

  const closeQuiz = () => {
    setIsQuizOpen(false);
    setParticles([]);
  };

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'Відмінно! Ви справжній знавець Республіки Вейву!';
    if (percentage >= 60) return 'Добре! Ви добре знаєте історію республіки.';
    if (percentage >= 40) return 'Непогано, але варто дізнатися більше про республіку.';
    return 'Рекомендуємо вивчити історію Республіки Вейву детальніше.';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Рівень 3': 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30',
      'Рівень 1': 'bg-green-500/20 text-green-300 border-green-400/30',
      'Рівень 2': 'bg-blue-500/20 text-blue-300 border-blue-400/30',
      'Рівень 4': 'bg-orange-500/20 text-orange-300 border-orange-400/30'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/20 text-gray-300 border-gray-400/30';
  };

  return (
    <>
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white text-xl flex items-center gap-2">
            <Brain className="w-6 h-6" />
            Республіканський квіз
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-white/90">
              Перевірте свої знання про Республіку! 
              Квіз складається з {quizQuestions.length} питань чотирьох різних рівнів складності.
            </p>
            
            <Button 
              onClick={startQuiz}
              className="w-full bg-festival-yellow hover:bg-festival-yellow/90 text-festival-blue font-semibold"
            >
              Розпочати квіз
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Particle Effect Overlay */}
      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          {particles.map(particle => (
            <div
              key={`${particle.id}-${animationKey}`}
              className="absolute rounded-full"
              style={{
                left: `${particle.x}px`,
                top: `${particle.y}px`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                backgroundColor: particle.color,
                opacity: particle.life / particle.maxLife,
                transform: 'translate(-50%, -50%)',
                boxShadow: `0 0 ${particle.size}px ${particle.color}`,
              }}
            />
          ))}
        </div>
      )}

      {/* Quiz Modal */}
      <Dialog open={isQuizOpen} onOpenChange={closeQuiz}>
        <DialogContent className="bg-gradient-to-br from-festival-blue to-festival-blue/80 border-white/20 max-w-2xl max-h-[95vh] overflow-y-auto p-0">
          <div className="p-6">
            <DialogHeader>
              <DialogTitle className="text-white text-xl">
                Квіз про Республіку Вейву
              </DialogTitle>
            </DialogHeader>

            {!showResults ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <Badge variant="outline" className="border-white/30 text-white whitespace-nowrap">
                  {currentQuestion + 1} з {quizQuestions.length}
                </Badge>
                <div className="w-full mx-4 bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-festival-yellow h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Category Badge */}
              <div className="flex justify-center">
                <Badge 
                  variant="outline" 
                  className={`${getCategoryColor(quizQuestions[currentQuestion].category)} px-3 py-1 text-sm font-medium border`}
                >
                  <Sparkles className="w-4 h-4 mr-1" />
                  {quizQuestions[currentQuestion].category}
                </Badge>
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold mb-4 text-center">
                  {quizQuestions[currentQuestion].question}
                </h3>
                
                <div className="space-y-3">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectAnswer(index)}
                      disabled={showExplanation}
                      className={`
                        w-full p-3 text-left rounded-lg border-2 transition-all duration-300 transform
                        ${selectedAnswers[currentQuestion] === index
                          ? showExplanation
                            ? index === quizQuestions[currentQuestion].correctAnswer
                              ? 'bg-green-500/20 border-green-400 text-white scale-105 shadow-lg shadow-green-400/20'
                              : 'bg-red-500/20 border-red-400 text-white animate-pulse'
                            : 'bg-festival-yellow/20 border-festival-yellow text-white scale-105'
                          : showExplanation && index === quizQuestions[currentQuestion].correctAnswer
                            ? 'bg-green-500/20 border-green-400 text-white scale-105 shadow-lg shadow-green-400/20'
                            : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20 hover:scale-105'
                        }
                        ${showExplanation ? 'cursor-default' : 'cursor-pointer hover:shadow-lg'}
                      `}
                      style={{
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <div className="flex items-center gap-2">
                        {showExplanation && (
                          selectedAnswers[currentQuestion] === index ? (
                            index === quizQuestions[currentQuestion].correctAnswer ? (
                              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 animate-bounce" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 animate-pulse" />
                            )
                          ) : index === quizQuestions[currentQuestion].correctAnswer ? (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 animate-bounce" />
                          ) : null
                        )}
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Show explanation after answer is selected */}
                {showExplanation && quizQuestions[currentQuestion].explanation && (
                  <div className="mt-4 p-4 bg-white/10 rounded-lg border border-white/20 animate-pulse">
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-festival-yellow mt-0.5 flex-shrink-0" />
                      <div className="text-festival-yellow font-semibold text-sm">Пояснення:</div>
                    </div>
                    <p className="text-white/90 text-sm mt-1 ml-6">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex justify-between">
                <Button 
                  variant="outline" 
                  onClick={closeQuiz}
                  className="border-white/30 text-white/90 bg-white/5 hover:bg-white/20 hover:text-white"
                >
                  Закрити
                </Button>
                <Button 
                  onClick={nextQuestion}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="bg-festival-yellow hover:bg-festival-yellow/90 text-festival-blue disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {currentQuestion === quizQuestions.length - 1 ? 'Завершити' : 'Далі'}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 text-center">
              <div className="text-6xl mb-4 animate-bounce">
                {currentResult && currentResult.score >= currentResult.totalQuestions * 0.8 ? '🏆' : '📚'}
              </div>
              
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">Результат квізу</h3>
                <div className="text-4xl font-bold text-festival-yellow mb-4 animate-pulse">
                  {currentResult?.score}/{currentResult?.totalQuestions}
                </div>
                <p className="text-white/90 text-lg">
                  {currentResult && getScoreMessage(currentResult.score, currentResult.totalQuestions)}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-semibold">Правильні відповіді:</h4>
                <div className="space-y-2 text-left max-h-64 overflow-y-auto">
                  {quizQuestions.map((question, index) => (
                    <div key={question.id} className="bg-white/10 rounded-lg p-3 transition-all duration-200 hover:bg-white/15">
                      <div className="flex items-center gap-2 mb-2">
                        {selectedAnswers[index] === question.correctAnswer ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-400" />
                        )}
                        <Badge 
                          variant="outline" 
                          className={`${getCategoryColor(question.category)} text-xs px-2 py-0.5 border`}
                        >
                          {question.category}
                        </Badge>
                        <span className="text-white font-medium text-sm">{question.question}</span>
                      </div>
                      <p className="text-festival-yellow text-sm ml-7">
                        {question.options[question.correctAnswer]}
                      </p>
                      {question.explanation && (
                        <p className="text-white/70 text-xs ml-7 mt-1">
                          {question.explanation}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  onClick={startQuiz}
                  className="flex-1 bg-festival-yellow hover:bg-festival-yellow/90 text-festival-blue transition-all duration-200 hover:scale-105"
                >
                  Спробувати знову
                </Button>
                <Button 
                  variant="outline" 
                  onClick={closeQuiz}
                  className="flex-1 border-white/30 text-white/90 bg-white/5 hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  Закрити
                </Button>
              </div>
            </div>
          )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};