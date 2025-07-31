import React, { useState, useEffect } from 'react';

const InteractiveStatsGraph1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sample data for three lines (you can customize these)
  const data = {
    citizens: [7, 7, 8, 5, 9, 12, 12, 12, 14, 21, 19, 26],
    ptp: [0, 2, 4, 8, 5, 2, 1, 5, 10, 8, 18, 13],
    frozen: [0, 0, 0, 3, 4, 4, 4, 2, 1, 0, 5, 6],
  };

  const years = Array.from({ length: 12 }, (_, i) => 2014 + i);
  const maxCitizens = Math.max(...data.citizens);
  const maxPtp = Math.max(...data.ptp);
  const maxFrozen = Math.max(...data.frozen);

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
        Статус населення Республіки Вейву
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
            {/* Citizens line */}
            <path
              d={generatePath(data.citizens, maxCitizens, graphWidth, graphHeight)}
              fill="none"
              stroke="#1e40af"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "0.2s"
              }}
            />
            
            {/* PTP line */}
            <path
              d={generatePath(data.ptp, maxCitizens, graphWidth, graphHeight)}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "0.7s"
              }}
            />
            
            {/* Frozen line */}
            <path
              d={generatePath(data.frozen, maxCitizens, graphWidth, graphHeight)}
              fill="none"
              stroke="#60a5fa"
              strokeWidth="3"
              strokeDasharray="1000"
              strokeDashoffset={isVisible ? "0" : "1000"}
              style={{
                transition: "stroke-dashoffset 2s ease-in-out",
                transitionDelay: "1.2s"
              }}
            />
            
            {/* Interactive points */}
            {data.citizens.map((citizens, index) => {
              const x = (index * graphWidth) / (data.citizens.length - 1);
              const y1 = getYPosition(citizens, maxCitizens, graphHeight);
              const y2 = getYPosition(data.ptp[index], maxCitizens, graphHeight);
              const y3 = getYPosition(data.frozen[index], maxCitizens, graphHeight);
              
              return (
                <g key={index}>
                  {/* Citizens points */}
                  <circle
                    cx={x}
                    cy={y1}
                    r={hoveredPoint === `c-${index}` ? "15" : "12"}
                    fill="#1e40af"
                    stroke="white"
                    strokeWidth="3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "r 0.5s ease, opacity 1s ease",
                      transitionDelay: `${index * 0.1}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredPoint(`c-${index}`)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                  {/* Citizens number */}
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
                    {citizens}
                  </text>
                  
                  {/* PTP points */}
                  <circle
                    cx={x}
                    cy={y2}
                    r={hoveredPoint === `p-${index}` ? "15" : "12"}
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="3"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: "r 0.5s ease, opacity 1s ease",
                      transitionDelay: `${index * 0.1 + 0.5}s`,
                      cursor: "pointer"
                    }}
                    onMouseEnter={() => setHoveredPoint(`p-${index}`)}
                    onMouseLeave={() => setHoveredPoint(null)}
                  />
                  
                  {/* PTP number */}
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
                    {data.ptp[index]}
                  </text>
                  
                  {/* Frozen points */}
                  <circle
                    cx={x}
                    cy={y3}
                    r={hoveredPoint === `f-${index}` ? "15" : "12"}
                    fill="#60a5fa"
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
                  
                  {/* Frozen number */}
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
                    {data.frozen[index]}
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
              <text x={20} y={50} fontSize="12" fill="#1e40af">
                {hoveredPoint.startsWith('c') && `Громадяни: ${data.citizens[parseInt(hoveredPoint.split('-')[1])]}`}
                {hoveredPoint.startsWith('p') && `ПТП: ${data.ptp[parseInt(hoveredPoint.split('-')[1])]}`}
                {hoveredPoint.startsWith('f') && `Заморожені: ${data.frozen[parseInt(hoveredPoint.split('-')[1])]}`}
              </text>
            </g>
          )}
        </svg>
        
        {/* Legend */}
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#1e40af' }}
            ></div>
            <span className="text-sm text-gray-600">Громадяни</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#3b82f6' }}
            ></div>
            <span className="text-sm text-gray-600">ПТП</span>
          </div>
          <div className="flex items-center space-x-2">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: '#60a5fa' }}
            ></div>
            <span className="text-sm text-gray-600">Заморожені</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveStatsGraph1;