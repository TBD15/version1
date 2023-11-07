// React import
import React, { useEffect, useState } from "react";
import styles from "./profile.module.scss";

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
//interface PostData
interface Post {
  id: string;
  author: string;
  imageURL: string;
}

// example data:
const UserData = {
  profilePic:
    "https://www.akc.org/wp-content/uploads/2017/11/Great-Pyrenees-puppy-sittin-in-a-chair-outdoors.jpg",
  name: "Luna",
  username: "@luna",
  firstName: "Luna",
};
const posts = [
  {
    id: "1",
    author: "@luna",
    imageURL:
      "https://media.istockphoto.com/id/533893554/photo/adorable-great-pyrenees-puppy.jpg?s=612x612&w=0&k=20&c=-qnIegZ9kyjlKnkj0_4BXxyKA_fUcSieVaxLPGCQgFk=",
  },
  {
    id: "2",
    author: "@luna",
    imageURL:
      "https://t3.ftcdn.net/jpg/05/68/57/80/360_F_568578090_tGUveLYBZweusJjdLtCcnQfEdMRIMoX2.jpg",
  },
];

let filterCardsByAuthor = false;
//ProfilePage is the React component. It's a functional component
//ProfilePage is a functional component declared using an arrow function. It doesn't receive any props, and it defines the component logic and JSX rendering within its body.
const ProfilePage = () => {
  //useState is used to manage the component's state, specifically user, which is used to store user data.
  const [user, setUser] = useState<UserData | undefined>(undefined);

  //useState to manage component state, specifically posts, which is used to store post data.
  const [posts, setPosts] = useState<any[]>([]);
  //useState to manage component state, specifically err, which is used to store error data.
  const [err, setErr] = useState(false);
  //useEffect hook is used to fetch user data from the backend when the component is mounted.
  useEffect(() => {
    //if there is no user, fetch the user data from the backend
    if (!user) {
      //fetch the user data from the backend
      fetch("/api/auth/user", { method: "GET" })
        //if there is no error, then log the error
        .then((response) => response.json())
        .then((data) => {
          // Set the user state
          setUser(data);
        })
        //if there is a error, log it
        .catch((error) => {
          console.log("hit no user on profile page");
          console.log("Error occured: ", error);
        });
    }
  });

  //useEffect hook is used to fetch post data from the backend when the component is mounted.
  useEffect(() => {
    //if there is an error, then return
    if (err) return;
    //fetch the posts data from the backend
    fetch("/api/posts", { method: "GET" })
      //if the response is 200, then return the data in json format
      .then((response) => response.json())
      //if there is an error, then log the error
      .then((data) => {
        // Set the posts state
        //filter to only show posts by the user
        if (filterCardsByAuthor) {
          setPosts(data.filter((post: Post) => post.author === user?.username));
        }
      })
      .catch((e) => {
        console.log("Error occured: ", e);
      });
  });

  //example set

  // This will be used to delete posts

  // This will handle post filtering

  // This will handle redirect for creating post
  const navigate = useNavigate();

  //Inside the component, JSX elements are returned.
  //The JSX defines the structure and content of the component.
  //It appears to be a profile page with an avatar, username, and a section for posts.
  return (
    <body>
      <div>
        <div className={styles.pinkHeader}>
          <div className={styles.header}>Profile</div>
        </div>
        <div className={styles.background}>
          <div className={styles.profilesection}>
            <img
              className={styles.profilePic}
              src={
                "https://www.akc.org/wp-content/uploads/2017/11/Great-Pyrenees-puppy-sittin-in-a-chair-outdoors.jpg"
              }
              alt='Pic'
            />
            {/* //real
            <div className={styles.profilename}>{user?.name || "kate"}</div>
            //example */}
            <div className={styles.profilename}>
              {UserData?.firstName || "kate"}
            </div>

            <div className={styles.profileusername}>
              {UserData?.username || "@kate"}
            </div>
          </div>
        </div>
        <div className={styles.postsSection}>Posts</div>
        <div className={styles.allPosts}>
          {/* //map through the posts and display them */}
          {posts.map((post) => (
            // display the post image
            <div className={styles.post}>
              {/* // display the post image */}
              <img
                className={styles.postImage}
                src={post.imageURL}
                alt='Post'
              />
            </div>
          ))}
        </div>
      </div>
    </body>
  );
};

export default ProfilePage;
