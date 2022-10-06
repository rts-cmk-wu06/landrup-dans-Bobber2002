import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({setToken, loggedin, setLoggedin}) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false);


  let navigate = useNavigate();


  function handleLogin(e) {
    e.preventDefault();
    setIsLoggingIn(true)
    const form = e.target;
    const username = form[0].value;
    const password = form[1].value;
    console.dir("username: " + username);
    console.dir("password: " + password);

    axios
      .post("http://localhost:4000/auth/token", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.token);
          setToken(response.data.token);
          axios
          .get("http://localhost:4000/api/v1/users/5", {
            headers: {
              Authorization: `Bearer ${response.data.token}`,
            },
          })
          .then((response) => {
            if (response.status === 200) {
                setIsLoggingIn(false)
                setLoggedin(true)
                navigate('/5/home')
              }else{
                console.log('no');
              }
            });
        }
      })
      .catch((error) => {
        setIsLoggingIn(false)
        document.getElementById('brugernavnInput').value = '';
        document.getElementById('adgangskodeInput').value = '';
        document.getElementById('brugernavnInput').placeholder = 'Brugernavn eller adgangskode er forkert';
      })
      ;
  }

  return (
    <div
      id="LoginPage"
      className="relative bg-[url('../public/splash-image.jpg')] w-full h-full bg-cover bg-center z-10 flex items-center p-12"
    >
      <div className="w-[760px] h-[480px] absolute bg-primary opacity-50 -left-40 top-32 -rotate-[27deg]" />
      <div className="flex flex-col justify-between z-20">
        <h1 className="text-themewhite text-5xl pb-6">Log ind</h1>
        <form className="" action="" onSubmit={handleLogin}>
          <input
            id="brugernavnInput"
            className="w-full h-12 bg-themewhite outline-none border-none decoration-0 p-4 mb-4"
            type="text"
            placeholder="brugernavn"
            onSelect={(e)=>{e.currentTarget.placeholder = "brugernavn"}}
          />
          <input
            id="adgangskodeInput"
            className="w-full h-12 bg-themewhite outline-none border-none decoration-0 p-4"
            type="password"
            placeholder="adgangskode"
          />
          <button className="mt-8 ml-8 text-center text-white w-[249px] h-[54px] rounded-lg bg-primary self-center mx-auto">
            {!isLoggingIn ? 'Log in' : '...'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
