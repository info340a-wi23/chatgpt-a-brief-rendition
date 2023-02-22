import React, { useState } from 'react';
import CHAT_HISTORY from '../data/chat_log.json';

function Search(props) {
    return (
        <section className="search-box-area">
            <div className="container">
                <h2>Discussion</h2>
                <div className="search-box">
                    <select name="selection">
                    <option value="Everything">Everything</option>
                    <option value="Titles">Titles</option>
                    <option value="Descriptions">Descriptions</option>
                    </select>
                    <input type="text" name="q" placeholder="search ..."/>
                    <button><i className="fa fa-search"></i></button>
                </div>
            </div>
        </section>
    );
}

function CurrentDiscussionPath(props) {
    // NOTES FOR LATER:
    // - Pass in prop with discussion path
    return (
        <section className="navigate-area">
            <div className="container">
                {/* <!--Navigation--> */}
                <div className="navigate">
                {/* Use prop to display this rather than a hard encode */}
                <span><a href="">MyForum - Forums</a> >> <a href="">random subforum</a> >> <a href="">random topic</a></span>
                </div>
            </div>
        </section>
    );
}

function CurrentDiscussion(props) {
    // NOTES TO FIX LATER:
    // - Make JSON file for discussion information
    // - Use prop for: Author, topic, num_read, username, role, picture, post, points, text
    // - Fix spacing again (without <br>'s)
    return (
        <section className="post-area">
            <div className="container">
                {/* <!--Topic Section--> */}
                <div>
                    {/* <!--Original thread--> */}
                    <div className="head">
                        <div className="authors">Author</div>
                        <div className="content">Topic: random topic (Read 1325 Times)</div>
                    </div>
                    <div className="body">
                        <div className="authors">
                            <div className="username"><a href="">Username</a></div>
                            <div>Role</div>
                            <img src={require("./img/User1.jpg")} alt="a cat avatar"/>
                            <div>Posts: <u>45</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className="content">
                            Just a random content of a random topic.
                            To see how it looks like.
                            Nothing more and nothing less.
                            Regards username
                        </div>
                    </div>
                </div>
                {/* <!--Comment Area--> */}
                <div className="comment-area">
                    <form>
                        <div>
                        <label for="comment_field">Comment:</label>
                        <textarea className="form-control" id="comment_field" name="comment"></textarea>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
                {/* <!--Comments Section--> */}
                <div>
                    <div className="body">
                        <div className="authors">
                            <div className="username"><a href="">AnotherUser</a></div>
                            <div>Role</div>
                            <img src={require("./img/User2.jpg")} alt="another cat avatar"/>
                            <div>Posts: <u>455</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className="content">
                            Just a comment of the above random topic.
                            To see how it looks like.
                            Nothing more and nothing less.
                        </div>
                    </div>
                </div>
                {/* <!--Reply Area--> */}
                <div className="comment-area">
                    <form>
                        <div>
                            <label for="reply_field">Reply:</label>
                            <textarea className="form-control" id="reply_field" name="reply"></textarea>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
                {/* <!--Another Comment With replies--> */}
                <div>
                    <div className="body">
                        <div className="authors">
                            <div className="username"><a href="">AnotherUser</a></div>
                            <div>Role</div>
                            <img src={require("./img/User3.jpg")} alt="another cat avatar"/>
                            <div>Posts: <u>455</u></div>
                            <div>Points: <u>4586</u></div>
                        </div>
                        <div className="content">
                            Just a comment of the above random topic.
                            To see how it looks like.
                            Nothing more and nothing less.
                        </div>
                    </div>
                </div>
                {/* <!--Reply Area--> */}
                <div className="comment-area">
                    <form>
                        <div>
                            <label for="reply_field_2">Reply:</label>
                            <textarea className="form-control" id="reply_field_2" name="reply"></textarea>
                        </div>
                        <input type="submit" value="submit"/>
                    </form>
                </div>
            </div>
        </section>
    );
}
   
  function App(props) {
    //state
    const [chatMessages, setChatMessages] = useState();
    const channelList = [
    'general', 'random', 'dank-memes', 'channel-4', 'pet-pictures'
    ]
    const currentChannel = "general";
    const addMessage = (userObj, messageText, channel) => {
    const newMessage = {
    "userId": userObj.userId,
    "userName": userObj.userName,
    "userImg": userObj.userImg,
    "text": messageText,
    "timestamp": Date.now(),
    "channel": channel
    }
    const updateChatMessages = [...chatMessages, newMessage];
    setChatMessages(updateChatMessages); //update state and re-render
    }
}

const DEFAULT_USERS = [
    {userId: null, userName: null, userImg: '/img/null.png'}, //null user
    {userId: "penguin", userName: "Penguin", userImg: '/img/Penguin.png'},
    {userId: "parrot", userName: "Parrot", userImg: '/img/Parrot.png'},
    {userId: "zebra", userName: "Zebra", userImg: '/img/Zebra.png'},
   ]
   
   function HeaderBar(props) {
    const handleClick = (event) => {
    const whichUser = event.currentTarget.name //access button, not image
    console.log(whichUser);
    const selectedUserObj = DEFAULT_USERS.filter((userObj) => userObj.userId === whichUser)[0]  || DEFAULT_USERS[0] //null user if not found
    }
    const userButtons = DEFAULT_USERS.map((userObj) => {
    return (
    <button className="btn user-icon" key={userObj.userName}
    name={userObj.userId} onClick={handleClick}
    >
    <img src={userObj.userImg} alt={userObj.userName + " avatar"} />
    </button>
    )
    })
    return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
    <h1>React Messenger</h1>
    <div>
    {userButtons}
    </div>
    </header>
    )
   }

    function ComposeForm(props) {
    const [typedValue, setTypedValue] = useState("");
    const currentUser = props.currentUser;
    const handleChange = (event) => {
    const inputtedValue = event.target.value;
    setTypedValue(inputtedValue); //update state and re-render!
    }
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitting", typedValue);
    const userObj = { userId: "parrot", userName: "Parrot", userImg: "/img/Penguin.png" }
    props.addMessageCallback(userObj, typedValue, "general")
    setTypedValue(""); //empty the input!
    }
    return (
    <form className="my-2" onSubmit={handleSubmit}>
    <div className="input-group">
    {<img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />}
    <textarea className="form-control" rows="2"
    placeholder="Type a new message"
    onChange={handleChange} value={typedValue}></textarea>
    <button className="btn btn-secondary" type="submit">
    <span className="material-icons">send</span>
    </button>
    </div>
    </form>
    );
   }
   
   export function ChannelList(props) {

    const channels = props.channels;
    const currentChannel = props.currentChannel;
  
    const linkElemArray = channels.map((channelNameString) => {
  
      let classList = "btn btn-sm btn-outline-light my-1";
      if(channelNameString === currentChannel) {
        classList = "btn btn-sm btn-warning"
      }
  
      const element = (
        <div key={channelNameString}>
          <button className={classList}>{channelNameString}</button>
        </div>
      )
      return element;
    })
  
    return (
      <nav className="text-light bg-secondary h-100 py-3 channel-nav px-2">
        {linkElemArray}
      </nav>
    )
  }

export default function Discussion() {
    return (
        <div>
            <Search />
            <CurrentDiscussionPath />
            <CurrentDiscussion />
            <App/>
            <HeaderBar/>
            <ComposeForm />
        </div>
    );
}