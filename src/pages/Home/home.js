import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Activity from "../../lib/components/activityCard";

const HomePage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-8 text-themewhite">Aktiviteter</p>
        <Swiper
          id="slider"
          className="h-[41rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={1.75}
          freeMode={true}
          modules={[FreeMode]}
        >
          {activities.map((activity) => {
            return (
              <SwiperSlide id={"c" + activity.id} key={activity.id}>
                <Activity activity={activity} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
