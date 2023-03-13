import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LikeDislike(props) {
  const { post } = props;
  //just number states
  const [like, setLike] = useState(post.likes); 
  const [dislike, setDislike] = useState(post.dislikes);
  //passed in the array of liked posts, but now how to pass it to liked/disliked folder files
    // props.likedPosts
    // props.dislikedPosts
  const handleLike = () => {
    setLike(like + 1);
    props.onLikePost();
  };
  
  const handleDislike = () => {
    setDislike(dislike + 1);
    props.onDislikePost();
  };

  return (
    <div>
      <button className="btn btn-primary mr-2" onClick={handleLike}>
        Like <span className="badge badge-dark">{like}</span>
      </button>
      <button className="btn btn-danger" onClick={handleDislike}>
        Dislike <span className="badge badge-dark">{dislike}</span>
      </button>
    </div>
  );
}

export default LikeDislike;