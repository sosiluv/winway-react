import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import ScrollToTop from "./ScrollToTop";
import Header from './components/feature/Header';


function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <ScrollToTop />
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App