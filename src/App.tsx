import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";

import  NotFound  from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />

  <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
)


export default App;

//github.com/GodoyEducacional/psy-TDS2

//https://console.groq.com/home
//configurar o .env do backend
//Front-end -> npm run dev
//back-end -> npm run dev
//integrar o backend com frontend