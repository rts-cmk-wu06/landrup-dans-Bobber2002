import { FiSearch } from "react-icons/fi";

const Search = ({activities, setSortedActivitiesState}) => {

  let sortedActivities = [];
  let timeout;


  function handleSearch(e) {
    e.preventDefault();

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      // console.log(e.target.value.length);
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
  );
};

export default Search;
