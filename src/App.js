import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResetStyle,GlobalStyle } from './components/common/globalStyle';
import LayoutMain from './components/layout/LayoutMain';
import Header from './components/section/Header';
import MainPage from './components/pages/MainPage';
import CollectionPage from './components/pages/CollectionPage'
import AboutPage from './components/pages/AboutPage'
import {ImgContext,Images} from './components/context/ImgContext';
import { BurgerProvider } from "./components/context/BurgerContext";
import { ModalProvider } from "./components/context/ModalContext";

const basename = process.env.PUBLIC_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter  basename={basename}>
      <ResetStyle />
      <GlobalStyle />
        <BurgerProvider>
          <ModalProvider>
          <Header />
            <LayoutMain>
              <ImgContext.Provider value={Images}>
                  <Routes>
                    <Route path='*' element={<MainPage />} />
                    <Route path='main' element={<MainPage />} />
                    <Route path='collection' element={<CollectionPage />} />
                    <Route path='about' element={<AboutPage />} />
                  </Routes>
              </ImgContext.Provider>
            </LayoutMain>
          </ModalProvider>
        </BurgerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
