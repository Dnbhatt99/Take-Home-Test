import React from "react";
import { parseDate } from "../supporter/parse_date";
import { trimString } from "../supporter/trim_string";

const Blogs = ({ post }) => {
  const p = {
    blogCoverURL: post.featured_media,
    altAttribute: post._embedded['wp:featuredmedia']
      ? post._embedded['wp:featuredmedia'][0].alt_text
      : 'Blog',
    blogTitle: trimString(post.title.rendered),
    blogTitleLink: post.link,
    authorName: post._embedded.author[0].name,
    authorLink: post._embedded.author[0].link,
    blogDate: parseDate(post.date),
  };

  return (
    <div className="col-4 p-card--highlighted p-border flex-space">
      <div>
        <p className="u-no-padding--top p-text--x-small-capitalised">
          Cloud and Server
        </p>
        <hr className="is-muted" />
        <img
          class="p-card__image"
          src={p.blogCoverURL}
          alt={p.altAttribute}
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
          on {p.blogDate}
        </p>
        <hr className="is-muted" />
        <p class="p-text--small u-no-margin--bottom">Article</p>
      </div>
      <script src="./dist/bundle.js"></script>
    </div>
  );
};

export default Blogs;
