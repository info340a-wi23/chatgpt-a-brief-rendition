import React from 'react';

export default function Menu(props) {
    // Fix href
    // Icon
    return (
        <nav>
            <ul className="inline-menu">
                <li><img src={require("./img/favicon.png")} alt="A picture of the website logo."/></li>
                <li><a href="../website/index.html"><span className="material-symbols-outlined">cottage</span></a></li>
                <li><a href="../website/about.html">About</a></li>
                <li><a href="../website/discussion.html">Discussion</a></li>
                <li><a href="../website/tweet.html">Tweets</a></li>
            </ul>
        </nav>
    )
}