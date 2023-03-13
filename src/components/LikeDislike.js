import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LikeDislike(props) {
  const { post } = props;
  const [like, setLike] = useState(post.likes);
  const [dislike, setDislike] = useState(post.dislikes);

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
        Like <span className="badge badge-light">{like}</span>
      </button>
      <button className="btn btn-danger" onClick={handleDislike}>
        Dislike <span className="badge badge-light">{dislike}</span>
      </button>
    </div>
  );
}

export default LikeDislike;