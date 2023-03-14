import React from 'react';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { tweetDisplay } from './FolderDetails';
//import the function from the realtime database module
import { getDatabase, ref } from 'firebase/database';
import LikeDislike from './LikeDislike';
import { set as firebaseSet, onValue, push as firebasePush} from 'firebase/database';

function RenderLikedPosts(props) {
  const currentPost = props.likedPosts; //changed from props.postList
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
          props.setLikedPosts(objArray); //Change from setDiscussionPost, not sure if states carried over though in props
      })

      function cleanup() {
          offFunction();
      }
      return cleanup;
  }, [])

  const handleLikePost = (post) => {
      props.setLikedPosts([...props.likedPosts, post]);
  };
    
  const handleDislikePost = (post) => {
      props.setDislikedPosts([...props.dislikedPosts, post]);
  };

  if(props.render==true){
    return (
      <div>
          <RenderLikedPosts postList={props.discussionPosts} likedPosts={props.likedPosts} dislikedPosts={props.dislikedPosts} onLikePost={handleLikePost} onDislikePost={handleDislikePost} />
      </div>
  )
  }
  
}
