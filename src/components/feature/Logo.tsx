
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Dark navy square with WWS */}
      <div className="w-12 h-12 bg-slate-900 flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xl font-bold tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, letterSpacing: '-0.05em' }}>
          WWS
        </span>
      </div>
      
      {/* Company name */}
      <div className="flex flex-col items-end">
        <span 
          className="text-white text-lg leading-tight" 
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          Winway
        </span>
        <span 
          className="text-white text-xs leading-tight" 
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Systems, Inc.
        </span>
      </div>
    </Link>
  );
}
