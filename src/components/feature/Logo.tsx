
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Company name */}
      <div className="flex flex-col text-left leading-none">

        <span
          className="text-white text-2xl md:text-[26px] leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          WINWAY, Inc.
        </span>
      </div>
    </Link>
  );
}
