import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LikeDislike(props) {
  const { post } = props;
  const [like, setLike] = useState(post.likes);
  const [dislike, setDislike] = useState(post.dislikes);
  const [userReaction, setUserReaction] = useState(null);
  const [reactionsCount, setReactionsCount] = useState(post.likes + post.dislikes);

  const handleLike = () => {
    if (userReaction === 'like') {
      setUserReaction(null);
      setLike(like - 1);
      setReactionsCount(reactionsCount - 1);
    } else if (userReaction === 'dislike') {
      setUserReaction('like');
      setLike(like + 1);
      setDislike(dislike - 1);
    } else {
      setUserReaction('like');
      setLike(like + 1);
      setReactionsCount(reactionsCount + 1);
    }
    props.onLikePost();
  };

  const handleDislike = () => {
    if (userReaction === 'dislike') {
      setUserReaction(null);
      setDislike(dislike - 1);
      setReactionsCount(reactionsCount - 1);
    } else if (userReaction === 'like') {
      setUserReaction('dislike');
      setLike(like - 1);
      setDislike(dislike + 1);
    } else {
      setUserReaction('dislike');
      setDislike(dislike + 1);
      setReactionsCount(reactionsCount + 1);
    }
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