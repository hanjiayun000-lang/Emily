
import React, { useState, useEffect } from 'react';
import { Celebrity } from './types';
import { RANKING_DATA, FireIcon } from './constants';
import { RankItem } from './components/RankItem';
import { SupportModal } from './components/Modal';
import { RequestSupportModal } from './components/RequestSupportModal';
import { SuccessModal } from './components/SuccessModal';

const App: React.FC = () => {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  // Automatically show the initial notification for Dilraba
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSupportModalOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleLightUpAction = () => {
    setIsRequestModalOpen(false);
    // Add a tiny delay to make the transition feel organic
    setTimeout(() => {
      setIsSuccessModalOpen(true);
    }, 100);
  };

  const top3 = RANKING_DATA.filter(c => c.rank <= 3).sort((a, b) => {
    const order = [2, 1, 3];
    return order.indexOf(a.rank) - order.indexOf(b.rank);
  });
  
  const others = RANKING_DATA.filter(c => c.rank > 3);

  return (
    <div className="min-h-screen bg-[#0b0144] bg-grid text-white pb-32 flex flex-col items-center">
      {/* Header */}
      <header className="w-full p-4 flex justify-between items-center z-10">
        <div className="w-8 h-8"></div>
        <h1 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">明星AI热搜榜</h1>
        <button className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
        </button>
      </header>

      {/* Podium Section */}
      <div className="w-full max-w-md px-4 mt-4 mb-8">
        <div className="flex items-end justify-center h-64 gap-2">
          {top3.map((item) => (
            <div 
              key={item.rank} 
              className={`flex flex-col items-center relative transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
                item.rank === 1 ? 'w-1/3 z-20' : 'w-1/3'
              }`}
            >
              {item.rank === 1 && (
                <div className="absolute -top-12 text-5xl animate-bounce drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">👑</div>
              )}
              <div className="absolute -top-4 text-white/20 text-3xl font-serif italic font-black">
                {item.rank}
              </div>

              <div className={`relative rounded-full overflow-hidden p-1 shadow-2xl ${
                item.rank === 1 ? 'w-24 h-24 bg-gradient-to-t from-yellow-400 to-yellow-100 ring-4 ring-yellow-400/30' : 
                item.rank === 2 ? 'w-20 h-20 bg-gradient-to-t from-gray-300 to-white ring-4 ring-white/10' : 
                'w-20 h-20 bg-gradient-to-t from-orange-400 to-orange-100 ring-4 ring-orange-400/10'
              }`}>
                <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
              </div>

              <div className={`mt-2 w-full pt-4 pb-3 flex flex-col items-center rounded-t-3xl shadow-2xl backdrop-blur-sm ${
                item.rank === 1 ? 'bg-white/15 h-28 border-x border-t border-white/20' : 
                'bg-white/10 h-24 border-x border-t border-white/10'
              }`}>
                <div className="text-xs font-black truncate px-1 uppercase tracking-tight">{item.name}</div>
                <div className="flex items-center text-[10px] text-orange-400 font-black mt-1">
                  <FireIcon />
                  {item.heat}
                </div>
                <button className={`mt-2 text-[10px] px-3 py-1 rounded-full whitespace-nowrap font-bold shadow-lg transition-transform active:scale-90 ${
                    item.rank === 1 ? 'bg-indigo-600 text-white ring-2 ring-indigo-400/30' : 'bg-white/20 text-white'
                }`}>
                    搜同款地
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* List Section */}
      <main className="w-full max-w-md px-4 overflow-y-auto">
        <div className="bg-white/5 rounded-[2rem] p-4 border border-white/5">
            <h2 className="text-xs font-bold text-indigo-300 mb-4 px-2 flex items-center">
                <span className="w-1 h-3 bg-indigo-500 rounded-full mr-2"></span>
                人气实时更新
            </h2>
            <div className="space-y-2">
                {others.map((item) => (
                    <RankItem key={item.rank} item={item} />
                ))}
            </div>
        </div>
      </main>

      {/* Modals Layer */}
      <SupportModal 
        isOpen={isSupportModalOpen} 
        onClose={() => setIsSupportModalOpen(false)} 
      />
      
      <RequestSupportModal 
        isOpen={isRequestModalOpen} 
        onClose={() => setIsRequestModalOpen(false)} 
        onLightUp={handleLightUpAction}
      />

      <SuccessModal 
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      {/* Control Panel (Testing) */}
      <div className="fixed bottom-6 left-0 right-0 z-40 px-6 flex justify-center">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 p-2 rounded-full flex gap-2 shadow-2xl">
            <button 
                onClick={() => setIsSupportModalOpen(true)}
                className="bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-full text-xs font-bold transition-all border border-white/5"
            >
                助力通知
            </button>
            <button 
                onClick={() => setIsRequestModalOpen(true)}
                className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-3 rounded-full text-xs font-black shadow-xl shadow-rose-900/40 active:scale-95 transition-all"
            >
                🔥 帮我点亮
            </button>
          </div>
      </div>
    </div>
  );
};

export default App;
