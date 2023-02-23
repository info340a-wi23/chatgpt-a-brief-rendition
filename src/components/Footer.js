import React from 'react';

export default function Footer() {
    return (
        <footer>
            <div className="footer-info">
                <p><a href="mailto:email@chatgpt.uw.edu"><span className="material-icons">email</span> email@chatgpt.uw.edu</a></p>
                <p><a href="tel:206-123-4567"><span className="material-icons">phone</span> 206-123-4567</a></p>
                <p>&copy; 2023 Harold Pham, Vivian Hung, Joseph Tran, Muyang Zhou</p>
            </div>
        </footer>
    );
}