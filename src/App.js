import Screen from "./lib/components/screen";
import WelcomePage from "./pages/Welcome/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/home";
import CalenderPage from "./pages/Calender/calender";
import CalenderActivityOverview from "./pages/Calender/overview";
import Navigation from "./lib/components/navbar";
import SearchPage from "./pages/Search/search";
import ClassOverview from "./pages/Overview/overview";
import LoginPage from "./pages/Login/login";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen z-0">
      <link
        href="http://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="http://fonts.googleapis.com/css?family=Racing+Sans+One"
        rel="stylesheet"
        type="text/css"
      />
      <Screen>
        <Router>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/user/home" element={<HomePage />} />
            <Route path="/user/search" element={<SearchPage />} />
            <Route path="/user/calender" element={<CalenderPage />} />
            <Route
              path="/user/calender/class"
              element={<CalenderActivityOverview />}
            />
            <Route
              path="/user/class"
              element={<ClassOverview />}
            />
          </Routes>
        <Navigation/>
        </Router>
      </Screen>
    </div>
  );
}

export default App;
