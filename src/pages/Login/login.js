const LoginPage = () => {

  function handleLogin(e){
    const form = e.target
    const username = form[0].value
    const password = form[1].value
    e.preventDefault();
    console.dir('username: '+username);
    console.dir('password: '+password);
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
            className="w-full h-12 bg-themewhite outline-none border-none decoration-0 p-4 mb-4"
            type="text"
            placeholder="brugernavn"
          />
          <input
            className="w-full h-12 bg-themewhite outline-none border-none decoration-0 p-4"
            type="password"
            placeholder="adgangskode"
          />
          <button className="mt-8 ml-8 text-center text-white w-[249px] h-[54px] rounded-lg bg-primary self-center mx-auto">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
