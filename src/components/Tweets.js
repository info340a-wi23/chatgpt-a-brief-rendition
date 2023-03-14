import React, { useEffect, useState } from 'react';
//import the function from the realtime database module
import { getDatabase, ref, onValue } from 'firebase/database';

import { Outlet, Link } from 'react-router-dom';

import { TwitterTweetEmbed } from 'react-twitter-embed';
//get a reference to the database service
// const db = getDatabase();

//get reference to the "text" property in the database
// const textTweet = ref(db, "text");


function RenderTweet(props) {
  // Fix Tweets so they display (2+ dont display)
  // Use prop and json file to import more tweets
  // Prop needs: Caption, Link, Profile Name, Username, 
  return (
    <div>
      <dl>
        <dt>ChatGPT Chef</dt>
        <dd>
          <blockquote className="twitter-tweet">
            <p lang="art" dir="ltr">👍🤣😍 <a href="https://t.co/VUAeMMcu2h">https://t.co/VUAeMMcu2h</a></p>&mdash;
            ChatGPT Chef (@ChatGPTChef) <a
              href="https://twitter.com/ChatGPTChef/status/1619644451714113536?ref_src=twsrc%5Etfw">January 29,
              2023</a>
          </blockquote>
          {/* <script async src="https://platform.twitter.com/widgets.js"></script> */}
          <p>Comment</p>
        </dd>
        <dt>ChatGPT 2049</dt>
        <dd>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">ChatGPT is a free money printer. But 99% of people don&#39;t use it
              properly. That&#39;s why I created this FREE resource: •100+ ChatGPT Business
              Ideas •500+ Prompts •500+ AI tools •Best ChatGPT Resources Like, Retweet, Follow,
              Comment &#39;me&#39; &amp; I&#39;ll DM it… <a
                href="https://t.co/3IerWfIJxC">https://t.co/3IerWfIJxC</a></p>&mdash; ChatGPT 2049 (@ChatGPT2049) <a
                  href="https://twitter.com/rowancheung/status/1619789758191788034?ref_src=twsrc%5Etfw">January 29,
              2023</a>
          </blockquote>
          {/* <script async src="https://platform.twitter.com/widgets.js"></script> */}
          <p>Comment</p>
        </dd>
      </dl>
      <Outlet />
    </div>


  );
}

function LoadTweets(props) {
  const tweets = props.tweets;

  const loadTweet = tweets.map((post) => {
    // const { date, hashtag, html, source, text, user_created, user_favourites, user_followers, user_friends, user_location, user_name, user_verified } = post;
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
        {/* <Link className="btn btn-info btn-outline-dark" to='/tweets/savedtweets'>Saved Tweets</Link> */}
        {/* <RenderTweet /> */}
      </div>
      <div className='container tweetDisplay'>
        <LoadTweets tweets={tweets} />
      </div>
    </div>
  );
}