import Screen from "./lib/components/screen";
import WelcomePage from "./pages/Welcome/welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          </Routes>
        </Router>
      </Screen>
    </div>
  );
}

export default App;
