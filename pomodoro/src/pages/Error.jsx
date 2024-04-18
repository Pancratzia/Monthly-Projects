import { FaRegFaceSadCry } from "react-icons/fa6";
import InteriorLayout from "./../components/layouts/InteriorLayout";

const Error = () => {
  return (
    <InteriorLayout>
      <FaRegFaceSadCry className="w-[42px] h-[42px] text-purple-950" />
      <h1 className="text-5xl font-bold text-purple-950">Error 404</h1>
      <h2 className="text-xl  text-purple-950">Página no encontrada</h2>
    </InteriorLayout>
  );
};

export default Error;
