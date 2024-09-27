import { createContext, useEffect, useReducer, useState } from "react";

// Context creation
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer function
const postListReducer = (currPostList, action) => {
  switch (action.type) {
    case "DELETE_POST":
      return currPostList.filter((post) => post.id !== action.payload.postId);

    case "ADD_INITIAL_POSTS":
      return action.payload.posts;

    case "ADD_POST":
      return [action.payload, ...currPostList];

    default:
      return currPostList;
  }
};

// Provider component
const PostListProvider = ({ children }) => {
  // Initialize state with initial posts data
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  // Function to add a new post
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  // Function to add initial posts
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  // Function to delete a post
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
