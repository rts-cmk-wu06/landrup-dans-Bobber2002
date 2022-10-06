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
import { useState, useEffect } from "react";
function App() {
  const [token, setToken] = useState("");
  const [loggedin, setLoggedin] = useState();

  console.log("token: "+token);

  // useEffect(() => {
  //   console.log(loggedin);
  // }, [loggedin, setLoggedin]);

  return (
    <div className="bg-slate-800 h-screen w-screen z-0">
      {/* {console.log(loggedin, token)} */}
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
            <Route
              path="/login"
              element={
                <LoginPage
                  setToken={setToken}
                  loggedin={loggedin}
                  setLoggedin={setLoggedin}
                />
              }
            />
            <Route path="/5/home" element={<HomePage />} />
            <Route path="/5/search" element={<SearchPage />} />
            <Route path="/5/calender" element={<CalenderPage token={token}/>} />
            <Route
              path="/5/calender/class"
              element={<CalenderActivityOverview token={token}/>}
            />
            <Route path="/5/class" element={<ClassOverview token={token}/>} />
          </Routes>
          <Navigation />
        </Router>
      </Screen>
    </div>
  );
}

export default App;
