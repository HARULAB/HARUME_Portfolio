import React from "react";
import { X } from "lucide-react";

const Modal = ({ onClose, card }) => {
  if (!card) return null;

  const getYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtu.be') return urlObj.pathname.slice(1);
      return urlObj.searchParams.get("v");
    } catch (e) {
      return null;
    }
  };

  const videoId = getYouTubeVideoId(card.href);

  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-5 lg:p-8 overflow-hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Modal Container */}
      <div 
        className="relative bg-[var(--bg-primary)] w-full max-w-[1440px] h-[min(900px,calc(100dvh-1.5rem))] sm:h-[min(900px,calc(100dvh-2.5rem))] lg:h-[min(900px,calc(100dvh-4rem))] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden animate-in fade-in zoom-in-95 duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 sm:top-5 sm:right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 hover:bg-white backdrop-blur-md flex items-center justify-center text-[var(--corporate-color)] z-50 transition-all hover:scale-110 active:scale-95 shadow-md border border-[var(--border-color)]/20"
          aria-label="Close"
        >
          <X size={24} strokeWidth={3} />
        </button>

        <div className="flex flex-col xl:flex-row w-full h-full overflow-hidden">
          {/* Video Area: keeps a 16:9 frame while adapting to both viewport dimensions. */}
          <div className="w-full xl:w-[64%] shrink-0 p-2 sm:p-3 lg:p-5 xl:p-6 bg-[#08090b] flex items-center justify-center overflow-hidden">
             <div className="relative w-full xl:max-w-[calc((100dvh-5rem)*16/9)] aspect-video rounded-[1rem] sm:rounded-[1.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 bg-black">
              {videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white/50 text-sm">
                  <p>Video loading failed.</p>
                </div>
              )}
            </div>
          </div>

          {/* Details Area */}
          <div className="w-full xl:w-[36%] min-h-0 flex-1 xl:flex-none flex flex-col bg-[var(--bg-primary)] overflow-hidden">
            {/* Minimal Info Header */}
            <div className="px-5 sm:px-8 pt-7 sm:pt-10 pb-4 flex-shrink-0">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--corporate-color)]/10 text-[10px] font-bold text-[var(--corporate-color)] tracking-[0.2em] uppercase">
                  {card.category}
                </span>
              </div>
              <h2 
                className="text-base md:text-lg font-extrabold text-[var(--text-primary)] leading-tight mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {card.title}
              </h2>
              <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed italic opacity-80">
                {card.description}
              </p>
            </div>

            {/* Scrollable Credits Section */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 pb-7 sm:pb-10 scrollbar-hide">
              {card.credits && (
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-30 uppercase tracking-widest leading-none">Credits</span>
                    <div className="h-[1px] flex-1 bg-[var(--border-color)] opacity-50"></div>
                  </div>
                  
                  <div className="space-y-4">
                    {Object.entries(card.credits).map(([role, name]) => (
                      <div key={role} className="flex flex-col gap-1 py-1">
                        <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase opacity-40">
                          {role}
                        </span>
                        <span className="text-sm font-bold text-[var(--text-primary)]">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
