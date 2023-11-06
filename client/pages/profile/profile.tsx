// React import
import React, { useEffect, useState } from "react";
import styles from "./profile.module.scss";

// Card import

// mui component imports
import Avatar from "@mui/joy/Avatar";
import { useNavigate } from "react-router";

// interface UserData
export interface UserData {
  profilePic: any;
  name: string;
  username: string;
  firstName: string;
}

let filterCardsByAuthor = false;
//ProfilePage is the React component. It's a functional component
//ProfilePage is a functional component declared using an arrow function. It doesn't receive any props, and it defines the component logic and JSX rendering within its body.
const ProfilePage = () => {
  //useState is used to manage the component's state, specifically user, which is used to store user data.
  const [user, setUser] = useState<UserData | undefined>(undefined);
  //useEffect hook is used to fetch user data from the backend when the component is mounted.
  useEffect(() => {
    //if there is no user, fetch the user data from the backend
    if (!user) {
      //fetch the user data from the backend
      fetch("/api/auth/user", { method: "GET" })
        //if the response is 200, then return the data in json format
        .then((d) => {
          if (d.status !== 200) {
            console.log(`Res status was not 200`);
          }
          console.log("hit no user on profil4 page");
          return d.json();
        })
        //if there is an error, then log the error
        .then((d) => {
          // Set the user state
          setUser(d);
        })
        .catch((e) => {
          console.log("hit no user on profile page");
          console.log("Error occured: ", e);
        });
    }
  });

  // This will be used to delete posts

  // This will handle post filtering

  // This will handle redirect for creating post
  const navigate = useNavigate();

  //Inside the component, JSX elements are returned.
  //The JSX defines the structure and content of the component.
  //It appears to be a profile page with an avatar, username, and a section for posts.
  return (
    <body>
      <div className={styles.pinkHeader}>
        <div className={styles.header}>Profile</div>
      </div>
      <div className={styles.profilesection}>
        <div>
          <img
            className={styles.profilePic}
            src={
              "https://www.akc.org/wp-content/uploads/2017/11/Great-Pyrenees-puppy-sittin-in-a-chair-outdoors.jpg"
            }
            alt='Pic'
          />
        </div>
        <div className={styles.profilename}>{user?.name || "kate"}</div>
        <div className={styles.profileusername}>
          {user?.username || "@kate"}
        </div>
      </div>
      <div className={styles.posts}>
        Posts
        {/* <div className={styles.allPosts}>post1</div> */}
      </div>
    </body>
  );
};

export default ProfilePage;
