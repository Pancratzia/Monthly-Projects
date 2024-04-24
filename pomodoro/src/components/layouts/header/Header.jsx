import { FaHouse, FaTableList, FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Header = () => {
  const title = "PankraDoro";
  return (
    <header className="w-full">
      <nav className="h-[40px] w-full flex justify-center items-center gap-20 bg-purple-200 text-purple-950">
        
      <Link to={"/historial"}>
          <FaTableList className="w-[24px] h-[24px]" />
          <span className="sr-only">Historial</span>
        </Link>
        
        <Link to={"/"}>
          <FaHouse className="w-[24px] h-[24px]" />
          <span className="sr-only">Inicio</span>
        </Link>
        

        <Link to={"/configuracion"}>
          <FaGear className="w-[24px] h-[24px]" />
          <span className="sr-only">Configuración</span>
        </Link>
      </nav>
      <h1 className="text-center text-2xl font-extrabold py-2 uppercase tracking-widest  [&>*:nth-child(2n-1)]:text-3xl text-purple-300 drop-shadow-md shadow-purple-950">
        {title.split("").map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </h1>
    </header>
  );
};

export default Header;
