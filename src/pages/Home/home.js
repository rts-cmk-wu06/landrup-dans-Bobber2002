import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import axios from "axios";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/activities")
      .then((response) => {
        setActivities(response.data);
      })
      .then(console.log(activities));
  }, []);

  console.log(activities);

  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-8 text-themewhite">Aktiviteter</p>
        <Swiper
          id="slider"
          className="h-[42rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={1.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          {activities.map((activity) => {
            return (
              <SwiperSlide
                id={'c'+activity.id}
                key={activity.id}
                className="w-full !h-[344px] bg-white mb-6 bg-cover bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
                style={{
                  backgroundImage: `url(${activity.asset.url})`,
                }}
              >
                <div className="p-5 bg-secondary bg-opacity-80 text-lg rounded-tr-[39px]">
                  <p>{activity.name}</p>
                  <p>{activity.minAge} - {activity.maxAge} år</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
