import Screen from "./lib/components/screen";
import WelcomePage from "./pages/Welcome/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/home";
import CalenderPage from "./pages/Calender/calender";
import CalenderActivityOverview from "./pages/Calender/overview";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-screen">
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
            <Route path="/" element={<WelcomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/calender" element={<CalenderPage/>} />
            <Route path="/calender/class" element={<CalenderActivityOverview/>} />
          </Routes>
        </Router>
      </Screen>
    </div>
  );
}

export default App;
