import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { tweetDisplay } from './FolderDetails';
//import the function from the realtime database module
import { getDatabase, ref } from 'firebase/database';

//get a reference to the database service
// const db = getDatabase();

//get reference to the "text" property in the database
// const textTweet = ref(db, "text");

function FolderList(props) {
  //folderId and folderName DO NOT CHANGE, only refer to them to change folderContents.
  const [folders, setFolders] = useState(
    [
      { "folderId": 1, "folderName": "Good Tweets", "folderContents": [{}] },
      { "folderId": 2, "folderName": "Bad Tweets", "folderContents": [{}] }
    ]);

  const render = true;
  const renderNothing = <div></div>;
  const renderFolders = (
    <div className='folderList'>
      <div className='row'>
        <button onClick={handleFolderClick(1)}>Good Tweets</button>
        <button onClick={handleFolderClick(2)}>Bad Tweets</button>
      </div>
      <div className='row'>
        {/* <FolderDetails /> */}
      </div>
    </div>
  );



  function handleFolderClick(id) {
    render = false;
    tweetDisplay();
  }


  if (render) {
    return renderFolders;
  } else {
    return renderNothing;
  }
}

export default function SaveTweets(props) {
  return (
    <div className="container">
      <h2>Manage Your Tweets!</h2>
      <FolderList />
    </div>
  );
}