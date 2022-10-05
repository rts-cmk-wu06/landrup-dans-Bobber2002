const ClassOverview = () => {
  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary"
    >
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-3/5 bg-[url('http://via.placeholder.com/500')] bg-cover bg-center flex items-end justify-end">
          <button className="text-center text-white w-[249px] h-[54px] rounded-md bg-primary mb-6 mr-8">
            Tilmeld
          </button>
        </div>
        <div className="text-themewhite px-6 pt-8 pb-24 max-h-[40%]">
          <h2 className="text-2xl leading-5">Navn</h2>
          <h3 className="text-lg">År</h3>
          <p
            className="text-lg pt-2 leading-5 max-h-[160px] overflow-scroll noscrollbar"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            officia harum ea dolor provident sint nihil molestiae voluptatibus
            optio obcaecati quasi rerum assumenda, iure amet facere quisquam,
            consequuntur veniam quae alias? Illum, vel suscipit quod voluptas
            quae totam itaque labore fugit nobis alias tempora ut blanditiis
            dolore distinctio perspiciatis, reiciendis ipsam nulla eaque ab
            magni similique quaerat autem! Nemo, quod? Lorem ipsum dolor sit
            amet consectetur, adipisicing elit. Quisquam a animi impedit ducimus
            adipisci consectetur delectus mollitia nesciunt temporibus saepe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassOverview;
