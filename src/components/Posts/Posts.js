import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  // Make sure the parent of Posts is passing the right props!
  const { likePost, post } = props;
  // const frog = posts.map(frog => {
  //   return frog 
  // })
  return (
    <div className="posts-container-wrapper">
      {/* map through the posts here to return a Post component */}
      {/* Check the implementation of Post to see what props it requires! */}
      {/* {frog} */}
      
      {
      post.map(post =>{
        return <Post 
        post = {post}
        likePost = {likePost}/>
      })
      }
    
    </div>
  );
};
// map for each of these posts in list posts do this: we want to return post
export default Posts;
