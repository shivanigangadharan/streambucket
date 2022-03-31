import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./pages/homepage/homepage";
import Watchlater from "./pages/watchlater/watchlater";
import Videolisting from "./pages/videolisting/videolisting";
import Login from "./pages/login/login";
import Signup from "./pages/login/signup";
import Videopage from "./pages/videopage/videopage";
import Playlists from "./pages/playlists/playlists";
import History from "./pages/history/history";
import Navbar from "./components/navbar/navbar";
import Playlistpage from "./pages/playlistpage/playlistpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/videolisting" element={<Videolisting />} />
          <Route path="/watchlater" element={<Watchlater />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/videopage" element={<Videopage />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/history" element={<History />} />
          <Route path="/playlistpage" element={<Playlistpage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
