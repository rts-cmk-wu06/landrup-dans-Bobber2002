import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

const CalenderActivityOverview = () => {
  const [activity, setActivity] = useState([]);
  const [activityUsers, setActivityUsers] = useState([]);
  let activityId = window.location.search.replace("?id=", "");

  useEffect(() => {
    // console.log(activityId);
    axios
      .get("http://localhost:4000/api/v1/activities/" + activityId)
      .then((response) => {setActivity(response.data)});
  }, []);

  useEffect(() => {
    setActivityUsers(activity.users)
  }, [activity, setActivity]);

  return (
    <div
      id="overviewPage"
      className="h-full w-full flex flex-col items-center bg-primary px-6 pt-10"
    >
      <div className="w-full h-full">
        <p className="text-4xl pb-6 text-themewhite">{activity.name}</p>
        <ul className="text-themewhite text-lg">
          {
            activityUsers &&
            activityUsers.map((user) =>{
              return(
                <li key={user.id}>{user.firstname} {user.lastname}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default CalenderActivityOverview;
