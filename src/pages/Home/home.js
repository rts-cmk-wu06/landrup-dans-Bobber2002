import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const HomePage = () => {
  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-8 text-themewhite">Aktiviteter</p>
        <Swiper
          id="slider"
          className="h-[40rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={1.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          <SwiperSlide
            className="w-full !h-[344px] bg-white mb-6 bg-contain bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
            style={{
              backgroundImage: "url(https://via.placeholder.com/500)",
            }}
          >
            <div className="p-5 bg-secondary bg-opacity-80 text-lg rounded-tr-[39px]">
              <p>Junior ting</p>
              <p>nolge år</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full !h-[344px] bg-white mb-6 bg-contain bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
            style={{
              backgroundImage: "url(https://via.placeholder.com/500)",
            }}
          >
            <div className="p-5 bg-secondary bg-opacity-80 text-lg rounded-tr-[39px]">
              <p>Junior ting</p>
              <p>nolge år</p>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full !h-[344px] bg-white mb-6 bg-contain bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
            style={{
              backgroundImage: "url(https://via.placeholder.com/500)",
            }}
          >
            <div className="p-5 bg-secondary bg-opacity-80 text-lg rounded-tr-[39px]">
              <p>Junior ting</p>
              <p>nolge år</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
