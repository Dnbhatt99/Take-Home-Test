import React from "react";
import blog1 from '../assets/blog1.png';
// import blog2 from '../assets/blog2.png';
// import blog3 from '../assets/blog3.png';

const Blogs = () => {
    return(       
        <div className="p-card--highlighted col-4 p-bordertop--accent flex-space-between">
            <div>
                <p className="p-text--x-small-capitalised u-no-padding--top">
                    CLOUD AND SERVER
                </p>
                <hr className="is-muted" />
                <img class="p-card__image" src={blog1} alt="Blog1" height="185" width="330"></img>
                <a href="www.w3school.com" target="_blank">
                    <p className="p-heading--3" style={{ fontWeight: 300 }}>
                        The power of installed-base snap metrics
                    </p>
                </a>
            </div>
            <div>
                <p class="p-heading--6">
                    By cproc on 27 November 2018
                </p>
                <hr className="is-muted" />
                <p class="p-text--small u-no-margin--bottom">Article</p>
            </div>
            <script src="./dist/bundle.js"></script>
        </div>
    )
}

export default Blogs;