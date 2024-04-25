import { FaCircleCheck } from "react-icons/fa6";
import InteriorLayout from "../components/layouts/InteriorLayout";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import PropTypes from "prop-types";

const Configuration = ({handleSaveConfig}) => {


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
            <Input type="number" placeholder="1" id="cycles"/>
        </div>
      </div>

      <Button onClick={handleSaveConfig} icon={<FaCircleCheck className="w-8 h-8" />}>
        {"Guardar Configuración"}
      </Button>
    </InteriorLayout>
  );
};

export default Configuration;

Configuration.propTypes = {
  handleSaveConfig: PropTypes.func.isRequired
}
