import React from "react";
import { parseDate } from "../supporter/parse_date";
import { trimString } from "../supporter/trim_string";

const Blogs = ({ post }) => {
  const p = {
    blogCover: post.featured_media,
    blogTitle: trimString(post.title.rendered),
    blogTitleLink: post.link,
    authorName: post._embedded.author[0].name,
    authorLink: post._embedded.author[0].link,
    date: parseDate(post.date),
  };

  return (
    <div className="p-card--highlighted col-4 p-border flex-space">
      <div>
        <p className="p-text--x-small-capitalised u-no-padding--top">
          CLOUD AND SERVER
        </p>
        <hr className="is-muted" />
        <img
          class="p-card__image"
          src={p.blogCover}
          alt="Blog"
        ></img>
        <a href={p.blogTitleLink} target="_blank" rel="noreferrer">
          <p className="p-heading--4">
            {p.blogTitle}
          </p>
        </a>
      </div>
      <div>
        <p class="p-heading--6">
          By{" "}
          <a href={p.authorLink} target="_blank" rel="noreferrer">
            {p.authorName}
          </a>{" "}
          on {p.date}
        </p>
        <hr className="is-muted" />
        <p class="p-text--small u-no-margin--bottom">Article</p>
      </div>
      <script src="./dist/bundle.js"></script>
    </div>
  );
};

export default Blogs;
