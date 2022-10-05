import { FiHome, FiSearch, FiCalendar } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="absolute bottom-3 w-[411px] h-[66px] bg-themewhite z-0 px-6 flex justify-between items-center">
      <Link to="/home">
        <div className="rounded-full w-[41px] h-[41px] bg-transparent border border-themeblack flex justify-center items-center">
          <FiHome size={24} />
        </div>
      </Link>
      <Link to="/search">
        <div className="rounded-full w-[41px] h-[41px] bg-transparent border border-themeblack flex justify-center items-center">
          <FiSearch size={24} />
        </div>
      </Link>
      <Link to="/calender">
        <div className="rounded-full w-[41px] h-[41px] bg-transparent border border-themeblack flex justify-center items-center">
          <FiCalendar size={24} />
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
