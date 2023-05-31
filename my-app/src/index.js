import { createRoot } from 'react-dom/client';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { Detail } from './pages/Detail';
import { Error } from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<Error />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
