
import { Link } from 'react-router-dom';
import LogoImage from '../../images/logos/winwaylogo.png'

export default function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3 justify-start">
      <div className="flex items-center text-left leading-none">
        <img
          src={LogoImage}
          alt="logo"
          className="h-8 md:h-10 lg:h-12 md:w-36 lg:w-44 object-contain ml-0"
        />
      </div>
    </Link>
  );
}
