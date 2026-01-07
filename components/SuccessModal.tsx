
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SuccessModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 backdrop-blur-md p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] w-full max-w-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform transition-all animate-in zoom-in-90 duration-300">
        {/* Success Header with Glowing Effect */}
        <div className="relative h-56 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 flex items-center justify-center overflow-hidden">
            {/* Rays background */}
            <div className="absolute inset-0 opacity-20 animate-[spin_10s_linear_infinite]" style={{ backgroundImage: 'conic-gradient(from 0deg, transparent, #fff, transparent, #fff, transparent)' }}></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-4 border-white/80 overflow-hidden shadow-2xl relative">
                    <img src="https://picsum.photos/seed/dilraba/200" alt="迪丽热巴" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/40 to-transparent"></div>
                </div>
                {/* Achievement Badge */}
                <div className="mt-4 bg-white text-orange-600 text-xs font-black px-4 py-1.5 rounded-full shadow-lg border border-orange-100 flex items-center">
                   <span className="mr-1">✨</span> 助力成功
                </div>
            </div>
            
            {/* Particles */}
            {[...Array(6)].map((_, i) => (
                <div key={i} className={`absolute text-white/40 animate-ping`} style={{ 
                    top: `${Math.random() * 80}%`, 
                    left: `${Math.random() * 80}%`,
                    animationDelay: `${i * 0.5}s`,
                    fontSize: `${Math.random() * 20 + 10}px`
                }}>✦</div>
            ))}
        </div>

        <div className="px-10 pt-8 pb-10 text-center">
          <h3 className="text-2xl font-black text-gray-900 mb-2">
            点亮成功！
          </h3>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            你已成功为 <span className="font-bold text-orange-500">迪丽热巴</span> 贡献了 1 点人气，TA离冠军又近了一步！
          </p>
          
          <div className="space-y-3">
              <button
                onClick={onClose}
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-200 active:scale-95 transition-transform"
              >
                我也要冲榜
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-gray-400 text-sm font-medium hover:text-gray-600 transition-colors"
              >
                返回列表
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};
