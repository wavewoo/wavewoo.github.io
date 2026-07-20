import React, { useState } from 'react';

interface ElectionData {
  candidate: string;
  votes: number;
  color?: string;
  party?: string;
}

interface ElectionsGraphProps {
  data: ElectionData[];
  title?: string;
  showPercentages?: boolean;
  showVoteCount?: boolean;
  height?: string;
  animationDelay?: number;
  year?: string; // Add year prop to fetch population data
}

const ElectionsGraph: React.FC<ElectionsGraphProps> = ({
  data,
  title = "Результати виборів",
  showPercentages = true,
  showVoteCount = true,
  height = "auto",
  animationDelay = 100,
  year
}) => {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  
  // Population data from FestivalsTable
  const populationData: { [key: string]: number } = {
    "2014": 7,
    "2015": 6,
    "2016": 8,
    "2017": 7,
    "2018": 10,
    "2019": 12,
    "2020": 8,
    "2021": 16,
    "2022": 19,
    "2023": 22,
    "2024": 26,
    "2025": 21,
  };
  
  // Get population for the current year
  const totalPopulation = year ? populationData[year] || 0 : 0;
  
  // Default colors for bars if not provided
  const defaultColors = [
    '#3B82F6', // Blue
    '#EF4444', // Red
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#8B5CF6', // Purple
    '#EC4899', // Pink
    '#6B7280', // Gray
    '#F97316', // Orange
  ];
  
  // Sort data by votes (highest first) and calculate percentages
  const sortedData = [...data]
    .sort((a, b) => b.votes - a.votes)
    .map((item, index) => ({
      ...item,
      color: item.color || defaultColors[index % defaultColors.length]
    }));
  
  const totalVotes = sortedData.reduce((sum, item) => sum + item.votes, 0);
  const maxVotes = Math.max(...sortedData.map(item => item.votes));
  
  // Calculate turnout percentage
  const turnoutPercentage = totalPopulation > 0 ? ((totalVotes / totalPopulation) * 100).toFixed(1) : '0.0';
  
  const getPercentage = (votes: number) => {
    return totalVotes > 0 ? ((votes / totalVotes) * 100).toFixed(1) : '0.0';
  };
  
  const getBarWidth = (votes: number) => {
    return maxVotes > 0 ? (votes / maxVotes) * 100 : 0;
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6"
      style={{ height }}
    >
      {/* Title */}
      <h3 className="text-2xl font-bold text-festival-blue mb-6 text-center">
        {title}
      </h3>
      
      {/* Total votes summary */}
      <div className="mb-6 p-3 bg-festival-blue/5 rounded-lg">
        <div className="text-center text-festival-blue font-medium">
          <p>
            Загальна кількість голосів: <span className="font-bold">{totalVotes.toLocaleString()}</span>
            {totalPopulation > 0 && (
              <>
                {" з "}
                <span className="font-bold">{totalPopulation}</span>
                {" жителів "}
                <span className="text-lg font-bold">(Явка {turnoutPercentage}%)</span>
              </>
            )}
          </p>
        </div>
      </div>
      
      {/* Bars */}
      <div className="space-y-4">
        {sortedData.map((item, index) => (
          <div
            key={`${item.candidate}-${index}`}
            className="relative group"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
            style={{
              animationDelay: `${index * animationDelay}ms`,
              animation: 'slideIn 0.6s ease-out forwards'
            }}
          >
            {/* Candidate info */}
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium text-gray-800">
                  {item.candidate}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                {showVoteCount && (
                  <span className="text-sm font-medium text-gray-600">
                    {item.votes.toLocaleString()}
                  </span>
                )}
                {showPercentages && (
                  <span className="text-lg font-bold text-festival-blue">
                    {getPercentage(item.votes)}%
                  </span>
                )}
              </div>
            </div>
            
            {/* Bar container */}
            <div className="relative bg-gray-200 rounded-full h-8 overflow-hidden">
              {/* Animated bar */}
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${
                  hoveredBar === index ? 'shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: item.color,
                  width: `${getBarWidth(item.votes)}%`,
                  transform: hoveredBar === index ? 'scaleY(1.1)' : 'scaleY(1)',
                  filter: hoveredBar === index ? 'brightness(1.1)' : 'brightness(1)'
                }}
              />
              
              {/* Hover overlay */}
              {hoveredBar === index && (
                <div className="absolute inset-0 bg-white/10 rounded-full" />
              )}
            </div>
            
            {/* Ranking badge */}
            <div 
              className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg ${
                index === 0 ? 'bg-yellow-500' : 
                index === 1 ? 'bg-gray-400' : 
                index === 2 ? 'bg-amber-600' : 'bg-gray-500'
              }`}
            >
              {index + 1}
            </div>
          </div>
        ))}
      </div>
      
      {/* Legend/Info */}
      <div className="mt-6 p-4 bg-festival-yellow/10 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          📊 Кандидати відсортовані за кількістю отриманих голосів
        </p>
      </div>
      
      {/* Hover tooltip */}
      {hoveredBar !== null && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-50 max-w-xs pointer-events-none">
          <div className="text-lg font-bold text-festival-blue mb-2">
            {sortedData[hoveredBar].candidate}
          </div>
          {sortedData[hoveredBar].party && (
            <div className="text-sm text-gray-600 mb-2">
              Міністерство: {sortedData[hoveredBar].party}
            </div>
          )}
          <div className="text-sm text-gray-800">
            <div>Голосів: <span className="font-bold">{sortedData[hoveredBar].votes.toLocaleString()}</span></div>
            <div>Відсоток: <span className="font-bold">{getPercentage(sortedData[hoveredBar].votes)}%</span></div>
            <div>Позиція: <span className="font-bold">#{hoveredBar + 1}</span></div>
            {totalPopulation > 0 && (
              <div className="mt-1 pt-1 border-t border-gray-200">
                <div className="text-xs text-gray-600">
                  Явка: {turnoutPercentage}% ({totalVotes}/{totalPopulation})
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ElectionsGraph;