import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { tweetDisplay } from './FolderDetails';
//import the function from the realtime database module
import { getDatabase, ref } from 'firebase/database';

function RenderLikedPosts(props) {
  const currentPost = props.likedPosts;

  const postList = currentPost.map((singlePost) => {
    const { userId, userName, userImg, userRole, numPosts, totalPoints, timestamp, topic, post, likes, dislikes } = singlePost;
    return (
      <section className="post-area" key={timestamp + userId}>
        <div className="container">
          {/* <!--Topic Section--> */}
          {/* <div> */}
          {/* <!--Original thread--> */}
          <div className="head">
            <div className="content">Topic: {topic}</div>
          </div>
          <div className="body">
            <div className="authors">
              <div className="username">Author: <u>{userName}</u></div>
              <div>Role: {userRole}</div>
              <img src={userImg} alt={userName + ' avatar'} />
              <div>Posts: <u>{numPosts}</u></div>
              <div>Points: <u>{totalPoints}</u></div>
            </div>
            <div className="content">
              <p>{post}</p>
              <LikeDislike post={{ likes, dislikes }} onLikePost={() => props.onLikePost(singlePost)} onDislikePost={() => props.onDislikePost(singlePost)} />
              <div className='reply'>
                <div><textarea className='container-fluid' name='reply' rows='3' placeholder='Reply to Post'></textarea></div>
                <button>
                  <span className="material-symbols-outlined">reply</span> Reply
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    )
  })
  return postList;
}


export default function LikeFolder(props) {

  const currentUser = props.currentUser;
  
  useEffect(() => {
      const db = getDatabase();
      const postsRef = ref(db, 'discussion_log');

      const offFunction = onValue(postsRef, (snapshot) => {
          const valueObj = snapshot.val();
          const objKeys = Object.keys(valueObj);
          const objArray = objKeys.map((keyString) => {
              const theMessageObj = valueObj[keyString];
              theMessageObj.key = keyString;
              return theMessageObj;
          })
          setLikedPosts(objArray); //Change from setDiscussionPost
      })

      function cleanup() {
          offFunction();
      }
      return cleanup;
  }, [])


  const createPost = (topic, userText) => {
      const userObj = currentUser;
      const newPost = {
          "userId": userObj.userId,
          "userName": userObj.userName,
          "userImg": userObj.userImg,
          "userRole": ((userObj.userRole === undefined) ? '' : userObj.userRole),
          "timestamp": Date.now(),
          "topic": topic,
          "post": userText,
          "likes": 0,
          "dislikes": 0
      }
      
      const db = getDatabase();
      const discussions = ref(db, 'discussion_log');
      const updateDiscussion = [...discussionPosts, newPost];
      setDiscussionPosts(updateDiscussion);
      console.log(newPost)
      firebasePush(discussions, newPost);
  }

  const handleLikePost = (post) => {
      setLikedPosts([...likedPosts, post]);
  };
    
  const handleDislikePost = (post) => {
      setDislikedPosts([...dislikedPosts, post]);
  };

  return (
      <div>
          <RenderLikedPost postList={discussionPosts} likedPosts={likedPosts} dislikedPosts={dislikedPosts} onLikePost={handleLikePost} onDislikePost={handleDislikePost} />
      </div>
  )
}
