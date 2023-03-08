import React from "react";
import { Link } from 'react-router-dom';

export default function ErrorPage(props) {
    return (
        <div className='container text-center'>
            <h2>Hm... Seems like the page was not found</h2>
            <Link className="btn btn-outline-danger" to='/home'>Click to Return Home</Link>
        </div>
    )
}