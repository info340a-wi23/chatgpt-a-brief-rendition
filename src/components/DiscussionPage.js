// Updates on Discussion Page (more current version)
import React, { useState } from 'react';

import DISCUSSION_HISTORY from '../data/discussion_log.json';

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
                    <input type="text" name="q" placeholder="Search ..."/>
                    <button aria-label="Search"><i className="fa fa-search"></i></button>
                </div>
            </div>
        </section>
    );
}


function RenderAllPost(props) {
    const currentPost = props.postList;
    
    const postList = currentPost.map((singlePost) => {
        console.log(singlePost)
        const {userId, userName, userImg, userRole, numPosts, totalPoints, timestamp, topic, post} = singlePost;
        return (
            <section className="post-area">
                <div className="container">
                    {/* <!--Topic Section--> */}
                    <div>
                        {/* <!--Original thread--> */}
                        <div className="head">
                            <div className="authors">Author</div>
                            <div className="content">Topic: {topic} (Read 1325 Times)</div>
                        </div>
                        <div className="body">
                            <div className="authors">
                                <div className="username"><a href="">{userName}</a></div>
                                <div>Role: {userRole}</div>
                                <img src={userImg} alt={userName + ' avatar'}/>
                                <div>Posts: <u>{numPosts}</u></div>
                                <div>Points: <u>{totalPoints}</u></div>
                            </div>
                            <div className="content">
                                {post}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    })
    return postList;
}

function CreateDiscussionPost(props) {
    const [typedValue, setTypedValue] = useState('');

    const currentUser = props.currentUser;
    const makePostCallback = props.makePostCallback;

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setTypedValue(inputValue);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        makePostCallback(currentUser);
        setTypedValue('');
    }

    return(
        <form className='discussion-post-submit' onSubmit={handleSubmit}>
            {'Posting as: ' + currentUser.userName}
            {/* Remove p after add css and add a submit button? */}
            <p><textarea rows='2' placeholder='Type a new post' onChange={handleChange}></textarea></p>
            <button className='btn btn-secondary' type='submit'>
                Submit
            </button>
        </form>
    )
}

export default function DiscussionPage(props) {
    const [discussionPosts, setDiscussionPosts] = useState(DISCUSSION_HISTORY);
    const currentUser = props.currentUser;
    
    const createPost = (topic, userText) => {
        const userObj = currentUser;
        const newPost = {
            "userId": userObj.userId,
            "userName": userObj.userName,
            "userImg": userObj.userImg,
            "userRole": userObj.userRole,
            "timestamp": Date.now(),
            "topic": topic,
            "post": userText
        }
        
        const updateDiscussion = [...discussionPosts, newPost];
        setDiscussionPosts(updateDiscussion);
    }

    return (
        <div>
            <Search />
            <RenderAllPost postList={discussionPosts} />
            <CreateDiscussionPost currentUser = {currentUser} makePostCallback = {createPost} />
        </div>
    )
}