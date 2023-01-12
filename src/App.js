import LayoutMain from './components/layout/LayoutMain';
import { ResetStyle,GlobalStyle } from './components/common/globalStyle';
import Header from './components/section/Header';
import MainPage from './components/pages/MainPage';
import {ImgContext,Images} from './components/context/ImgContext';

function App() {
  return (
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <Header />
      <LayoutMain>
        <ImgContext.Provider value={Images}>
          <MainPage />
        </ImgContext.Provider>
      </LayoutMain>
    </div>
  );
}

export default App;
