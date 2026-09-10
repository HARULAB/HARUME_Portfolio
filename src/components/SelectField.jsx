import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SelectField = ({ id, label, subLabel, options, onChange, value, type = "segmented" }) => {
  const selectedIndex = options.findIndex((opt) => opt.value === value);

  if (type === "native") {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          {label && (
            <h3 className="text-sm font-bold text-[var(--text-primary)] tracking-[0.3em] uppercase">
              {label}
            </h3>
          )}
          {subLabel && (
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {subLabel}
            </p>
          )}
        </div>

        <div className="relative group w-full">
          <select
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            className="w-full h-16 px-6 bg-white border-0 rounded-2xl font-bold text-[var(--text-primary)] appearance-none outline-none cursor-pointer text-left flex items-center justify-start pr-12"
          >
            {options.map((opt) => (
              <option key={`${id}-${opt.value}`} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-[var(--corporate-color)] flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "grid") {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          {label && (
            <h3 className="text-sm font-bold text-[var(--text-secondary)] tracking-[0.3em] uppercase opacity-40">
              {label}
            </h3>
          )}
          {subLabel && (
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {subLabel}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {options.map((opt) => {
            const isActive = value === opt.value;
            return (
              <button
                key={`${id}-${opt.value}`}
                type="button"
                onClick={() => onChange({ target: { value: opt.value, name: id } })}
                className={`
                  relative px-6 py-5 rounded-2xl font-bold transition-all duration-300 tracking-tight text-left border-2
                  ${isActive 
                    ? "bg-[var(--corporate-color)] border-[var(--corporate-color)] text-white" 
                    : "bg-transparent border-[var(--border-color)]/20 text-[var(--text-secondary)] opacity-100 hover:border-[var(--corporate-color)]/40 hover:text-[var(--text-primary)]"
                  }
                `}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  if (type === "minimal") {
    return (
      <div className="space-y-6">
        <div className="space-y-1">
          {label && (
            <h3 className="text-sm font-bold text-[var(--text-secondary)] tracking-[0.3em] uppercase opacity-40">
              {label}
            </h3>
          )}
          {subLabel && (
            <p className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {subLabel}
            </p>
          )}
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
          {options.map((opt) => {
            const isActive = value === opt.value;
            return (
              <button
                key={`${id}-${opt.value}`}
                type="button"
                onClick={() => onChange({ target: { value: opt.value, name: id } })}
                className={`
                  relative text-xl md:text-2xl font-bold transition-all duration-300 tracking-tight
                  ${isActive 
                    ? "text-[var(--corporate-color)]" 
                    : "text-[var(--text-secondary)] opacity-20 hover:opacity-100 hover:text-[var(--text-primary)]"
                  }
                `}
              >
                {opt.label}
                {isActive && (
                  <motion.div 
                    layoutId={`active-link-${id}`}
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[var(--corporate-color)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  const segmentWidth = 100 / options.length;
  // ... rest of previous implementation (segmented/slider) if still needed
  return (
    <div className="group bg-[var(--bg-secondary)]/40 border border-[var(--border-color)]/10 rounded-[2rem] p-7 md:p-9 transition-all duration-500 hover:bg-[var(--bg-secondary)]/60 hover:border-[var(--border-color)]/20">
      <div className="space-y-6">
        {label && (
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-[var(--text-secondary)] uppercase opacity-30 px-1">
            {label}
          </h3>
        )}

        {type === "slider" ? (
          <div className="relative px-0 py-4">
            <div className="relative h-[2px] w-full bg-[var(--border-color)]/10 rounded-full overflow-hidden">
              <div 
                className="absolute h-full bg-[var(--corporate-color)] transition-all duration-300"
                style={{ width: `${(selectedIndex / (options.length - 1)) * 100}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max={options.length - 1}
              step="1"
              value={selectedIndex}
              onChange={(e) => {
                const idx = parseInt(e.target.value);
                onChange({ target: { value: options[idx].value, name: id } });
              }}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-10 opacity-0 cursor-pointer z-20"
            />
            <div 
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--bg-primary)] border-2 border-[var(--corporate-color)] rounded-full pointer-events-none z-10 transition-all duration-300"
              style={{ left: `calc(${(selectedIndex / (options.length - 1)) * 100}% - 8px)` }}
            >
              <div className="absolute inset-0.5 bg-[var(--corporate-color)] rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
            </div>
            
            <div className="flex justify-between mt-6 px-1">
              {options.map((opt, index) => (
                <span 
                  key={`${id}-label-${index}`}
                  className={`text-[9px] md:text-[10px] font-bold tracking-widest transition-all duration-300 ${selectedIndex === index ? "text-[var(--text-primary)] opacity-100" : "text-[var(--text-secondary)] opacity-10"}`}
                >
                  {opt.label}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative w-full h-12 bg-[var(--bg-primary)]/30 rounded-xl p-1 flex items-center overflow-hidden">
            <div 
              className="absolute top-1 bottom-1 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] z-0"
              style={{ 
                width: `${segmentWidth}%`,
                left: 0,
                transform: `translateX(${selectedIndex * 100}%)`,
                padding: '0 4px'
              }}
            >
              <div className="w-full h-full bg-[var(--corporate-color)] rounded-[10px]" />
            </div>

            {options.map((opt, index) => {
              const isActive = value === opt.value;
              return (
                <button
                  key={`${id}-${opt.value}`}
                  type="button"
                  onClick={() => onChange({ target: { value: opt.value, name: id } })}
                  className={`
                    relative flex-1 h-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] transition-all duration-300 z-10 uppercase
                    ${isActive ? "text-white" : "text-[var(--text-secondary)] opacity-30 hover:opacity-100"}
                  `}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectField;
