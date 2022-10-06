import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const CalenderPage = ({ token }) => {
  const [data, setData] = useState([]);
  const [userActivities, setUserActivities] = useState([]);

  let sortedActivities = [];

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/users/5", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.activities);
      });
  }, []);

  useEffect(() => {
    sortedActivities = [];
    data.map((activity) => {
      if (!sortedActivities.includes(activity)) {
        sortedActivities.push(activity);
      }
      setUserActivities(sortedActivities);
    });
  }, [data]);

  let path = useLocation();
  return (
    <div
      id="CalenderPage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-6 text-themewhite">Kalender</p>

        <Swiper
          id="slider"
          className="h-[40rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={4.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          {userActivities.map((activity) => {
            // console.log(activity);
            return (
              <SwiperSlide className="">
                <Link
                  to={`${path.pathname}/class?id=${activity.id}`}
                  className="w-full !h-[107px] px-8 py-6 text-ellipsis whitespace-nowrap bg-themewhite mb-8 bg-contain bg-center rounded-[11px] overflow-hidden flex flex-col-reverse justify-center"
                >
                  <h3 className="text-lg h-5 capitalize">{activity.weekday} {activity.time}</h3>
                  <h2 className="text-4xl text-ellipsis overflow-hidden">
                    {activity.name}
                  </h2>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default CalenderPage;
