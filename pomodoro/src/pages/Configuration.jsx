import Input from "../components/utils/Input"

const Configuration = () => {
  return (
    <div className="container flex flex-col">
      <h1>Configuración</h1>
      <div className="">
        <label htmlFor="" className="flex-1">
          Minutos de Trabajo
        </label>
        <div className="">
          <Input type="number" placeholder="25" />
        </div>
      </div>
    </div>
  )
}

export default Configuration