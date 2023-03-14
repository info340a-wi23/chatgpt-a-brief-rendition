import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Outlet } from 'react-router-dom';
import { TwitterTweetEmbed } from 'react-twitter-embed';

function LoadTweets(props) {
  const tweets = props.tweets;

  const loadTweet = tweets.map((post) => {
    const id = post.tweetid;
    return (
      <section key={id}>
        <div className='container'>
          <TwitterTweetEmbed tweetId={id} />
        </div>
      </section>
    )
  })
  return loadTweet;
}

export default function Tweets(props) {
  const [tweets, setTweets] = useState([]);
  const [descending, setDescending] = useState(true);

  useEffect(() => {
    const db = getDatabase();
    const postsRef = ref(db, 'tweets');

    const offFunction = onValue(postsRef, (snapshot) => {
      const valueObj = snapshot.val();
      const objKeys = Object.keys(valueObj);
      const objArray = objKeys.map((keyString) => {
        const tweetsObj = valueObj[keyString];
        tweetsObj.key = keyString;
        return tweetsObj;
      })
      setTweets(objArray.sort((a, b) => b.timestamp - a.timestamp));
    })

    function cleanup() {
      offFunction();
    }
    return cleanup;
  }, [])

  const handleClick = (event) => {
    setTweets(tweets.reverse());
    setDescending(!descending);

  }

  return (
    <div>
      <div className='tweetHeader'>
        <h2>Tweets</h2>
        <button className='btn btn-info btn-outline-dark' onClick={handleClick}>Filter Date: {descending ? 'Descending' : 'Ascending'}</button>
      </div>
      <div className='container tweetDisplay'>
        <LoadTweets tweets={tweets} />
      </div>
    </div>
  );
}