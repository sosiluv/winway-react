import { HashRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import ScrollToTop from "./ScrollToTop";
import Header from './components/feature/Header';
import Footer from './components/feature/Footer';   // <-- import footer

function App() {
  return (
    <HashRouter basename={__BASE_PATH__}>
      <ScrollToTop />

      {/* Global Header */}
      <Header />

      {/* Page Content */}
      <AppRoutes />

      {/* Global Footer (appears on ALL pages) */}
      <Footer />
    </HashRouter>
  );
}

export default App;
