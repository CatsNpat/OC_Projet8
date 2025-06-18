import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBanner from "./components/nav";
import FooterNav from "./components/footer";
import APropos from "./pages/APropos";
import TravailDetail from "./pages/TravailDetail";
import NoPage from "./pages/NoPage";
import 'typeface-mulish';
import "./assets/my-sass.scss";


export default function App() {
  return (
    <BrowserRouter>
      <header  className='header'>
        <NavBanner />
      </header>

      <Routes>
          <Route index element={<Home />} />
          <Route path="APropos" element={<APropos />} />
          <Route path="TravailDetail/:id" element={<TravailDetail />} />
          <Route path="*" element={<NoPage />} />
      </Routes>

      <footer>
        <FooterNav />
      </footer>
      
    </BrowserRouter>
  );
}
