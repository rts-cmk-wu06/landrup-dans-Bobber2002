import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FreeMode } from "swiper";
import Activity from "../../lib/components/activityCard";
import Search from "./components/searchForm";

const SearchPage = () => {
  const [activities, setActivities] = useState([]);
  const [sortedActivitiesState, setSortedActivitiesState] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);


  return (
    <div
      id="SearchPage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-4 text-themewhite">Søg</p>
        <Search setSortedActivitiesState={setSortedActivitiesState} activities={activities}/>
        <Swiper
          id="slider"
          className="h-[36rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={1.55}
          freeMode={true}
          modules={[FreeMode]}
        >
          {sortedActivitiesState.length > 0 ? (
            sortedActivitiesState.map((activity) => {
              // console.log(sortedActivitiesState.length);
              return (
                <SwiperSlide key={activity.id}>
                  <Activity activity={activity} />
                </SwiperSlide>
              );
            })
          ) : (
            <p className="text-themewhite text-lg">
              Det ser ud som om ingen aktiviter matcher din søgning.
            </p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SearchPage;
