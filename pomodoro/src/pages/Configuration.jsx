import InteriorLayout from "../components/layouts/InteriorLayout";
import Input from "../components/utils/Input";

const Configuration = () => {
  return (
    <InteriorLayout>
      <div className="w-[100%]">
        <div className="flex flex-col gap-1 text-left mb-5">
          <label className="w-3/4">
            Minutos de Trabajo
          </label>
            <Input type="number" placeholder="25" id="working_time"/>
        </div>


        <div className="flex flex-col gap-1 text-left mb-5">
          <label className="w-3/4">
            Minutos de Descanso
          </label>
            <Input type="number" placeholder="5" id="break_time"/>
        </div>

        <div className="flex flex-col gap-1 text-left">
          <label className="w-3/4">
            Ciclos
          </label>
            <Input type="number" placeholder="1" id="break_time"/>
        </div>
      </div>
    </InteriorLayout>
  );
};

export default Configuration;
