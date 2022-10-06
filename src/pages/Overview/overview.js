import axios from "axios";
import { useEffect, useState } from "react";
const ClassOverview = ({ token }) => {
  const [activity, setActivity] = useState([]);
  const [users, setUsers] = useState([]);
  const [usersIds, setUsersIds] = useState([]);

  let sort = [];

  let activityId = window.location.search.replace("?id=", "");

  useEffect(() => {
    // console.log(activityId);
    axios
      .get("http://localhost:4000/api/v1/activities/" + activityId)
      .then((response) => {
        setActivity(response.data);
        setUsers(response.data.users);
      });
  }, []);

  useEffect(() => {
    console.log(users);
    users.map((user) => {
      sort.push(user.id);
    });
    setUsersIds(sort);
  }, [users, setUsers]);


  function handleSignUp() {
    console.log("token: " + token);
    axios
      .post(
        `http://localhost:4000/api/v1/users/5/activities/${activityId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
      });
  }

  return (
    <div
      id="HomePage"
      className="h-full w-full flex flex-col items-center bg-primary"
    >
      <div className="w-full h-full flex flex-col">
        <div
          className="w-full h-3/5 bg-cover bg-center flex items-end justify-end"
          style={{
            backgroundImage: `url("${activity.asset && activity.asset.url}")`,
          }}
        >
          <button
            onClick={handleSignUp}
            className="text-center text-white w-[249px] h-[54px] rounded-md bg-primary mb-6 mr-8 shadow-[3px_3px_4px_4px_rgba(0,0,0,0.25)]"
          >
            {
              usersIds.includes(5) ? "Tilmeldt" : "Tilmeld"
            }
          </button>
        </div>
        <div className="text-themewhite px-6 pt-8 pb-24 max-h-[40%]">
          <h2 className="text-2xl leading-5">{activity.name}</h2>
          <h3 className="text-lg">
            {activity.minAge}-{activity.maxAge} år
          </h3>
          <p className="text-lg pt-2 leading-5 max-h-[160px] overflow-scroll noscrollbar">
            {activity.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClassOverview;
