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
import Mockman from 'mockman-js';
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
