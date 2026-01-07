
import React from 'react';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLightUp?: () => void;
}

export const RequestSupportModal: React.FC<RequestModalProps> = ({ isOpen, onClose, onLightUp }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-sm overflow-hidden shadow-2xl transform transition-all animate-in zoom-in-95 duration-300">
        <div className="relative h-48 bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
            
            <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-xl ring-4 ring-pink-300/30">
                    <img src="https://picsum.photos/seed/dilraba/200" alt="迪丽热巴" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -inset-2 bg-white/20 blur-xl rounded-full animate-pulse"></div>
            </div>
            
            <div className="absolute top-4 right-6 text-2xl animate-pulse">✨</div>
            <div className="absolute bottom-4 left-6 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>💝</div>
        </div>

        <div className="px-8 pt-8 pb-10 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4 leading-relaxed">
            求求你帮我给<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">迪丽热巴</span>点亮
          </h3>
          <p className="text-sm text-gray-500 mb-8 px-4">
            只需一键即可助TA登顶热搜榜，快来支持你的爱豆吧！
          </p>
          
          <button
            onClick={() => {
                if(onLightUp) onLightUp();
            }}
            className="w-full py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full font-bold text-lg shadow-lg shadow-rose-200 active:scale-95 transition-transform"
          >
            一键点亮
          </button>
        </div>
      </div>
    </div>
  );
};
