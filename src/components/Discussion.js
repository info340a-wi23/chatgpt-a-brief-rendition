import React from 'react';

function Search() {
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

export default function Discussion() {
    return (
        <div>
            <Search />
            <CurrentDiscussionPath />
            <CurrentDiscussion />
        </div>
    );
}