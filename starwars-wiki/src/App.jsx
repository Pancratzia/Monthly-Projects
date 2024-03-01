import { Header } from "./components/layout/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Messages } from "./components/Messages/Messages";
import { CharacterProvider } from "./context/CharacterProvider";
import { PlanetProvider } from "./context/PlanetProvider";
import { FilmProvider } from "./context/FilmProvider";
import { VehicleProvider } from "./context/VehicleProvider";
import { StarshipProvider } from "./context/StarshipProvider";

function App() {
  return (
    <CharacterProvider>
      <Header />
      <SearchBar />

      <Messages />

      <PlanetProvider>
        <FilmProvider>
          <VehicleProvider>
            <StarshipProvider>
              <Main />
            </StarshipProvider>
          </VehicleProvider>
        </FilmProvider>
      </PlanetProvider>
      <Footer />
    </CharacterProvider>
  );
}

export default App;
