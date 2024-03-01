import { Header } from "./components/layout/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Messages } from "./components/Messages/Messages";
import { CharacterProvider } from "./context/CharacterProvider";
import { PlanetsProvider } from "./context/PlanetsProvider";

function App() {
  return (
    <CharacterProvider>
      <Header />
      <SearchBar />

      <Messages />

      <PlanetsProvider>
        <Main />
      </PlanetsProvider>
      <Footer />
    </CharacterProvider>
  );
}

export default App;
