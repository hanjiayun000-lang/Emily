
import React from 'react';
import { Celebrity } from '../types';
import { FireIcon, LocationIcon } from '../constants';

interface RankItemProps {
  item: Celebrity;
}

export const RankItem: React.FC<RankItemProps> = ({ item }) => {
  return (
    <div className="flex items-center bg-white rounded-2xl p-3 mb-3 shadow-sm">
      <div className="relative w-8 flex flex-col items-center mr-2">
        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          item.rank === 4 ? 'bg-indigo-600 text-white' : 
          item.rank === 5 ? 'bg-indigo-500 text-white' : 
          'bg-indigo-400 text-white'
        }`}>
          {item.rank}
        </span>
        {item.trend && (
           <span className="text-[10px] mt-0.5">
             {item.trend === 'up' && <span className="text-green-500">↑</span>}
             {item.trend === 'down' && <span className="text-red-500">↓</span>}
             {item.trend === 'neutral' && <span className="text-gray-400">▶</span>}
           </span>
        )}
      </div>
      
      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 flex-shrink-0 border border-gray-100">
        <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-grow min-w-0">
        <h4 className="text-gray-800 font-bold text-sm truncate">{item.name}</h4>
        <div className="flex items-center text-[10px] mt-0.5">
          <div className="flex items-center text-orange-500 font-medium mr-3">
            <FireIcon />
            {item.heat}
          </div>
          {item.recommendation && (
            <div className="flex items-center text-gray-400 truncate">
              <LocationIcon />
              <span className="truncate">推荐：{item.recommendation}</span>
            </div>
          )}
        </div>
      </div>

      <button className="flex-shrink-0 ml-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[11px] px-3 py-1.5 rounded-full flex items-center hover:opacity-90 active:scale-95 transition-all">
        <span className="mr-1">🔍</span>
        搜同款地
      </button>
    </div>
  );
};
