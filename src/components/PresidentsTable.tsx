import React, { useState } from 'react';

const PresidentsTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  
  // Sample presidents data - you can customize this
  const presidentsData = [
    { period: "2022", name: "Наталія Кіндратів", achievements: "Не прибула на фестиваль правління" },
    { period: "2023", name: "Юра Бокало", achievements: "" },
    { period: "2024", name: "Назарій Вовків", achievements: "" },
    { period: "2025", name: "Назар Задорожний", achievements: "" },
    { period: "2026", name: "Аліна Ліщук", achievements: "" },
  ];

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
                  {president.name}
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
          💡  Якщо ви помітили неточність або помилку, повідомте про неї.
        </p>
      </div>
      
      {/* Hover tooltip */}
      {hoveredRow !== null && (
        <div className="fixed top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 z-50 max-w-xs">
          <div className="text-sm font-bold text-festival-blue mb-1">
            {presidentsData[hoveredRow].name}
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