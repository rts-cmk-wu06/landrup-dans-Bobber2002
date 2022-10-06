import { Link } from "react-router-dom";

const Activity = ({ activity }) => {
  return (
    <Link
      to={'/5/class?id='+activity.id}
      className="w-full !h-[344px] bg-white bg-cover bg-center rounded-[39px] rounded-br-none overflow-hidden flex flex-col-reverse"
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
    </Link>
  );
};

export default Activity;
