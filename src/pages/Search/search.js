import { FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FreeMode } from "swiper";

const SearchPage = () => {
  const [activities, setActivities] = useState([]);
  const [sortedActivitiesState, setSortedActivitiesState] = useState([]);

  let timeout;

  useEffect(() => {
    axios.get("http://localhost:4000/api/v1/activities").then((response) => {
      setActivities(response.data);
    });
  }, []);

  let sortedActivities = [];

  function handleSearch(e) {
    e.preventDefault();

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      console.log(e.target.value.length);
      sortedActivities = [];
      activities.map((activity) => {
        // console.log('Activity = '+activity.name);
        if (
          activity.name.toLowerCase().includes(e.target.value.toLowerCase()) &&
          !sortedActivities.includes(activity) &&
          e.target.value.length !== 0
        ) {
          sortedActivities.push(activity);
        }
        // console.dir(sortedActivities);
      });
      setSortedActivitiesState(sortedActivities);
    }, 200);
  }

  return (
    <div
      id="SearchPage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-4 text-themewhite">Søg</p>
        <form action="" className="w-full h-[48px] mb-12">
          <div className="w-full h-full p-3 text-center bg-[#c4c4c4] bg-opacity-30 flex justify-between">
            <input
              onChange={(e) => {
                handleSearch(e);
              }}
              className="bg-transparent outline-none border-none text-white"
              type="text"
            />
            <span className="text-md text-white">
              <FiSearch size={24} />
            </span>
          </div>
        </form>
        <Swiper
          id="slider"
          className="h-[40rem] overflow-y-clip"
          direction={"vertical"}
          slidesPerView={1.5}
          freeMode={true}
          modules={[FreeMode]}
        >
          {sortedActivitiesState.length > 0 ? (
            sortedActivitiesState.map((activity) => {
              console.log(sortedActivitiesState.length);
              return (
                <SwiperSlide
                  key={activity.id}
                  className="w-full !h-[344px] bg-white mb-6 bg-cover bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
                  style={{
                    backgroundImage: `url(${activity.asset.url})`,
                  }}
                >
                  <div className="p-5 bg-secondary bg-opacity-80 text-lg rounded-tr-[39px]">
                    <p>{activity.name}</p>
                    <p>
                      {activity.minAge}-{activity.maxAge} år
                    </p>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <p className="text-themewhite text-lg">Det ser ud som om ingen aktiviter matcher din søgning.</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default SearchPage;
