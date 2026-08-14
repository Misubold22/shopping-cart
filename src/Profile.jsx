import { useParams } from "react-router";
import DefaultProfile from "./DefaultProfile";

import RandomProfile from "./RandomProfile";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>

      <hr />
      <h2>The profile visited is here:</h2>
      {name === "RandomProfile" ? <RandomProfile /> : <DefaultProfile />}
    </div>
  );
};

export default Profile;
