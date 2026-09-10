import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { withBase } from '../utils/paths';

const Breadcrumbs = ({ replacements = {} }) => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPathname(window.location.pathname);
    }
  }, []);

  const base = import.meta.env.BASE_URL || '/';
  const pathWithoutBase = pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  const pathSegments = pathname ? pathWithoutBase.split('/').filter(segment => segment) : [];

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = '/' + pathSegments.slice(0, index + 1).join('/');
    const href = withBase(path);
    const isLast = index === pathSegments.length - 1;
    
    let title = replacements[segment] || (segment.charAt(0).toUpperCase() + segment.slice(1));
    try { title = decodeURIComponent(title); } catch (e) {}

    return (
      <div key={href} className="flex items-center">
        <a href={href} className={`rounded-full px-1.5 py-1 transition-colors hover:bg-white/15 font-display ${isLast ? 'font-bold text-white' : 'text-white/75 hover:text-white'}`}>
            {title.toUpperCase()}
        </a>
        {!isLast && <ChevronRight size={14} className="mx-1.5 text-white/55" />}
      </div>
    );
  });

  return (
    <nav className="flex items-center text-[10px] font-bold tracking-[0.2em] whitespace-nowrap font-display">
      <div className="flex items-center">
        <a href={withBase('/')} className="rounded-full px-1.5 py-1 text-white/75 hover:text-white hover:bg-white/15 transition-colors font-display">
          HOME
        </a>
        {pathSegments.length > 0 && <ChevronRight size={14} className="mx-1.5 text-white/55" />}
      </div>
      {breadcrumbs}
    </nav>
  );
};

export default Breadcrumbs;
