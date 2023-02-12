import MyQRCode from "./QrCode/qrcode";
import { Route, Routes } from "react-router-dom";
import Movies from "./movies/movies";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MyQRCode />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </main>
  );
};

export default App;
