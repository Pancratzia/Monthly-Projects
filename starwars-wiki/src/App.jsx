import { Header } from "./components/layout/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Main } from "./components/layout/Main/Main";
import { Footer } from "./components/layout/Footer/Footer";
import { Messages } from "./components/Messages/Messages";


function App() {
  

  return (
    <>
      
      <Header />
      <SearchBar />

      <Messages />

      <Main />
      <Footer />
    </>
  );
}

export default App;

