import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div
      id="WelcomePage"
      className="relative bg-[url('../public/splash-image.jpg')] w-full h-full bg-cover bg-center z-10"
    >
      <div className="h-full w-full flex flex-col-reverse items-center pb-12">
        <div className="flex flex-col items-center w-full h-1/2 justify-between">
          <div className="self-start mt-6 w-[242px] border-b-[14px] border-primary pl-10">
            <p
              className="text-4xl text-transparent stroke h-6"
              style={{
                fontFamily: "Roboto",
                WebkitTextStrokeWidth: "2px",
                WebkitTextStrokeColor: "#5E2E53",
              }}
            >
              LANDRUP
            </p>
            <p
              className="text-7xl text-secondary pb-1.5"
              style={{
                fontFamily: "Racing Sans One",
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "black",
              }}
            >
              DANS
            </p>
          </div>
          <Link to="/home">
            <button className="text-center text-white w-[249px] h-[54px] rounded-md bg-primary">
              Kom i gang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
