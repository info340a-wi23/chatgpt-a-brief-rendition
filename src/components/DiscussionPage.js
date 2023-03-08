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
                    <input type="text" name="q" placeholder="Search ..." />
                    <button aria-label="Search"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        </section>
    );
}


function RenderAllPost(props) {
    const currentPost = props.postList;

    const postList = currentPost.map((singlePost) => {
        const { userId, userName, userImg, userRole, numPosts, totalPoints, timestamp, topic, post } = singlePost;
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
                            <div className="username">Author: <a href="">{userName}</a></div>
                            <div>Role: {userRole}</div>
                            <img src={userImg} alt={userName + ' avatar'} />
                            <div>Posts: <u>{numPosts}</u></div>
                            <div>Points: <u>{totalPoints}</u></div>
                        </div>
                        <div className="content">
                            <p>{post}</p>
                            <div className='reply'>
                                <div ><textarea className='container-fluid' name='reply' rows='3' placeholder='Reply to Post'></textarea></div>
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

function CreateDiscussionPost(props) {
    const [input, setInput] = useState({});

    const currentUser = props.currentUser;
    const makePostCallback = props.makePostCallback;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input)
        makePostCallback(input.topic, input.post);
        setInput({})
    }

    return (
        <section className='post-area'>
            <div className='container-submit'>
                <form className='discussion-post-submit' onSubmit={handleSubmit}>
                    <h2>Create a new Post</h2>
                    {'Posting as: ' + currentUser.userName}
                    <div ><textarea className='container-fluid' name='topic' rows='1' placeholder='Type a topic' onChange={handleChange}></textarea></div>
                    <div><textarea className='container-fluid' name='post' rows='5' placeholder='Type a new post' onChange={handleChange}></textarea></div>
                    <button className='btn btn-secondary' type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        </section>
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
            <CreateDiscussionPost currentUser={currentUser} makePostCallback={createPost} />
        </div>
    )
}