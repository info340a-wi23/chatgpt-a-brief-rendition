import React from 'react';

function RenderTweet(props) {
    // Fix Tweets so they display (2+ dont display)
    // Use prop and json file to import more tweets
    // Prop needs: Caption, Link, Profile Name, Username, 
    return (
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
    );
}

export default function Tweets(props) {
  return (
        <div className="container">
            <h2>Tweets</h2>
            <RenderTweet />
        </div>
    );
}