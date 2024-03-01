import { Info } from "../../Info/Info"
import { Background } from "../Background/Background"


export const Header = () => {
  return (
    <header className="header">
        <Background />
        <img
          className="image"
          src="/img/logo-StarWars.png"
          alt="Star Wars Logo"
        />

        <h1 className="title">Star Wars Wiki</h1>

        <Info />
      </header>
  )
}
