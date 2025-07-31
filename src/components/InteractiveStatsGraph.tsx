import React, { useState, useEffect } from 'react';

const InteractiveStatsGraph = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sample data for three lines (you can customize these)
  const data = {
    total: [7, 6, 8, 7, 10, 12, 8, 16, 19, 22, 26, 21],
    male: [4, 3, 4, 4, 6, 7, 5, 11, 10, 12, 11, 9],
    female: [3, 3, 4, 3, 4, 5, 3, 5, 9, 10, 15, 12],
  };

  const years = Array.from({ length: 12 }, (_, i) => 2014 + i);
  const maxTotal = Math.max(...data.total);
  const maxMale = Math.max(...data.male);
  const maxFemale = Math.max(...data.female);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const getYPosition = (value, maxValue, height) => {
    return height - (value / maxValue) * height;
  };

  const generatePath = (dataPoints, maxValue, width, height) => {
    const stepX = width / (dataPoints.length - 1);
    let path = '';
    
    dataPoints.forEach((point, index) => {
      const x = index * stepX;
      const y = getYPosition(point, maxValue, height);
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    
    return path;
  };

  const svgWidth = 800;
  const svgHeight = 300;
  const padding = 60;
  const graphWidth = svgWidth - padding * 2;
  const graphHeight = svgHeight - padding * 2;

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-festival-blue mb-6 text-center">
        Переписи населення Республіки Вейву
      </h3>
      
      <div className="relative">
        <svg 
          width={svgWidth} 
          height={svgHeight}
          className="w-full h-auto"
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
          {/* Grid lines */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width={svgWidth} height={svgHeight} fill="url(#grid)" opacity="0.3"/>
          
          {/* Animated lines */}
          <g transform={`translate(${padding}, ${padding})`}>
            {/* Total line */}
            <path
              d={generatePath(data.total, maxTotal, graphWidth, graphHeight)}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "0.2s"
              }}
            />
            
            {/* Male line */}
            <path
              d={generatePath(data.male, maxTotal, graphWidth, graphHeight)}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "0.7s"
              }}
            />
            
            {/* Female line */}
            <path
              d={generatePath(data.female, maxTotal, graphWidth, graphHeight)}
              fill="none"
              stroke="#f59e0b"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "1.2s"
              }}
            />
            
            {/* Interactive points */}
            {data.total.map((total, index) => {
              const x = (index * graphWidth) / (data.total.length - 1);
              const y1 = getYPosition(total, maxTotal, graphHeight);
              const y2 = getYPosition(data.male[index], maxTotal, graphHeight);
              const y3 = getYPosition(data.female[index], maxTotal, graphHeight);
              
              return (
                <g key={index}>
                  {/* Total points */}
                  <circle
                    cx={x}
                    cy={y1}
                    r={hoveredPoint === `t-${index}` ? "15" : "12"}
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "r 0.5s ease, opacity 1s ease",
                      transitionDelay: `${index * 0.1}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredPoint(`t-${index}`)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                  {/* Total number */}
                  <text
                    x={x}
                    y={y1 + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 1s ease",
                      transitionDelay: `${index * 0.1}s`,
                      pointerEvents: "none"
                    }}
                  >
                    {total}
                  </text>
                  
                  {/* Male points */}
                  <circle
                    cx={x}
                    cy={y2}
                    r={hoveredPoint === `m-${index}` ? "15" : "12"}
                    fill="#10b981"
                    stroke="white"
                    strokeWidth="3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "r 0.5s ease, opacity 1s ease",
                      transitionDelay: `${index * 0.1 + 0.5}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredPoint(`m-${index}`)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                  {/* Male number */}
                  <text
                    x={x}
                    y={y2 + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 1s ease",
                      transitionDelay: `${index * 0.1 + 0.5}s`,
                      pointerEvents: "none"
                    }}
                  >
                    {data.male[index]}
                  </text>
                  
                  {/* Female points */}
                  <circle
                    cx={x}
                    cy={y3}
                    r={hoveredPoint === `f-${index}` ? "15" : "12"}
                    fill="#f59e0b"
                    stroke="white"
                    strokeWidth="3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "r 0.5s ease, opacity 1s ease",
                      transitionDelay: `${index * 0.1 + 1}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredPoint(`f-${index}`)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                  {/* Female number */}
                  <text
                    x={x}
                    y={y3 + 4}
                    textAnchor="middle"
                    fontSize="10"
                    fontWeight="bold"
                    fill="white"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 1s ease",
                      transitionDelay: `${index * 0.1 + 1}s`,
                      pointerEvents: "none"
                    }}
                  >
                    {data.female[index]}
                  </text>
                  
                  {/* Year labels */}
                  <text
                    x={x}
                    y={graphHeight + 20}
                    textAnchor="middle"
                    fontSize="12"
                    fill="#666"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "opacity 1s ease",
                      transitionDelay: `${index * 0.05 + 1.5}s`
                    }}
                  >
                    {years[index]}
                  </text>
                </g>
              );
            })}
          </g>
          
          {/* Tooltip */}
          {hoveredPoint && (
            <g>
              <rect
                x={10}
                y={10}
                width="200"
                height="80"
                fill="white"
                stroke="#ccc"
                rx="5"
                style={{
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))"
                }}
              />
              <text x={20} y={30} fontSize="14" fontWeight="bold" fill="#333">
                {years[parseInt(hoveredPoint.split('-')[1])]} рік
              </text>
              <text x={20} y={50} fontSize="12" fill="#3b82f6">
                {hoveredPoint.startsWith('t') && `Загалом: ${data.total[parseInt(hoveredPoint.split('-')[1])]}`}
                {hoveredPoint.startsWith('m') && `Чоловіки: ${data.male[parseInt(hoveredPoint.split('-')[1])]}`}
                {hoveredPoint.startsWith('f') && `Жінки: ${data.female[parseInt(hoveredPoint.split('-')[1])]}`}
              </text>
            </g>
          )}
        </svg>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#3b82f6' }}
            ></div>
            <span className="text-sm text-gray-600">Загалом</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#10b981' }}
            ></div>
            <span className="text-sm text-gray-600">Чоловіки</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#f59e0b' }}
            ></div>
            <span className="text-sm text-gray-600">Жінки</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStatsGraph;