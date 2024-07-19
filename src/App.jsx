import Main from './components/Main';
import Footer from './components/Section/Footer/Footer';
import Nav from './components/Section/Nav/Nav';
import { GlobalStyle } from './GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
