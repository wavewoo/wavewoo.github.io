import React, { useState } from 'react';

const FestivalsTable = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  
  // Sample festivals data - you can customize this
  const festivalsData = [
    { year: "2014", dates: "19-20 серпня", location: "N 49.096289, E 23.651792", attendees: "7" },
    { year: "2015", dates: "16-18 серпня", location: "N 49.115933, E 23.466972", attendees: "6" },
    { year: "2016", dates: "15-17 липня", location: "N 49.087778, E 23.602108", attendees: "8" },
    { year: "2017", dates: "19-21 серпня", location: "N 49.113008, E 23.574211", attendees: "7" },
    { year: "2018", dates: "18-19 серпня", location: "N 49.112156, E 23.566372", attendees: "10" },
    { year: "2019", dates: "16-18 серпня", location: "N 49.138664, E 23.702631", attendees: "12" },
    { year: "2020", dates: "21-23 серпня", location: "N 49.139411, E 23.702803", attendees: "8" },
    { year: "2021", dates: "23-25 липня", location: "N 49.128025, E 23.270175", attendees: "16" },
    { year: "2022", dates: "29-31 липня", location: "N 49.1138573, E 23.2799233", attendees: "19" },
    { year: "2023", dates: "14-16 липня", location: "N 49.1201488, E 23.2770571", attendees: "22" },
    { year: "2024", dates: "19-21 липня", location: "N 49.1138573, E 23.2799233", attendees: "26" },
    { year: "2025", dates: "25-27 липня", location: "N 49.125557, E 23.271227", attendees: "21" },     
  ];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-8">
      <h3 className="text-xl font-bold text-festival-blue mb-6 text-center">
        Фестивалі Республіки Вейву
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-festival-blue/10">
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Рік
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Дати
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Місце
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-bold text-festival-blue">
                Жителів
              </th>
            </tr>
          </thead>
          <tbody>
            {festivalsData.map((festival, index) => (
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
                  {festival.year}
                </td>
                <td 
                  className={`border border-gray-300 px-4 py-3 transition-all duration-300 ${
                    hoveredRow === index ? 'text-festival-blue font-bold' : 'text-gray-800'
                  }`}
                >
                  {festival.dates}
                </td>
                <td 
                  className={`border border-gray-300 px-4 py-3 transition-all duration-300 ${
                    hoveredRow === index ? 'text-festival-blue font-bold' : 'text-gray-800'
                  }`}
                >
                  {festival.location}
                </td>
                <td 
                  className={`border border-gray-300 px-4 py-3 transition-all duration-300 ${
                    hoveredRow === index ? 'text-gray-800 font-medium' : 'text-gray-600'
                  }`}
                >
                  {festival.attendees}
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
            Фестиваль {festivalsData[hoveredRow].year}
          </div>
          <div className="text-xs text-gray-600">
            {festivalsData[hoveredRow].dates && `Дати: ${festivalsData[hoveredRow].dates}`}
            {festivalsData[hoveredRow].location && ` | Локація: ${festivalsData[hoveredRow].location}`}
          </div>
        </div>
      )}
    </div>
  );
};

export default FestivalsTable;