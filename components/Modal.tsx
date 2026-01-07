
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SupportModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-sm overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-300">
        {/* Decorative Top Area */}
        <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
            
            {/* Avatar Decoration */}
            <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-white/50 overflow-hidden shadow-lg">
                    <img src="https://picsum.photos/seed/dilraba/200" alt="迪丽热巴" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-purple-900 text-[10px] font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">
                    SUPPORT +1
                </div>
            </div>
            
            {/* Floating hearts animation mockup */}
            <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
                 <span className="absolute text-pink-300 opacity-60 animate-bounce" style={{ top: '20%', left: '20%' }}>❤️</span>
                 <span className="absolute text-white opacity-40 animate-pulse" style={{ bottom: '15%', right: '25%' }}>✨</span>
                 <span className="absolute text-yellow-200 opacity-50" style={{ top: '30%', right: '15%' }}>⭐</span>
            </div>
        </div>

        {/* Content Area */}
        <div className="px-8 pt-8 pb-10 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
            您有1个好友为您点亮了<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">迪丽热巴</span>点亮
          </h3>
          <p className="text-sm text-gray-500 mb-8 px-4">
            助力人气值已增加，快去看看热搜榜最新排名吧！
          </p>
          
          <button
            onClick={onClose}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-bold text-lg shadow-lg active:scale-95 transition-transform"
          >
            我知道了
          </button>
        </div>
      </div>
    </div>
  );
};
