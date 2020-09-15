import React from "react";
const Review = () => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.rd.com%2Fwp-content%2Fuploads%2F2017%2F09%2F01-shutterstock_476340928-Irina-Bg-1024x683.jpg&f=1&nofb=1"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};

export default Review;
