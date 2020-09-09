import Comment from "components/companyComponents/Comment";
import React from "react";
import Card from "react-bulma-components/lib/components/card";

const CommentsReviewCard = ({ title, items }) => {
  return (
    <Card className="company__card">
      <header className="card-header">
        <h3 style={{ paddingLeft: "20px" }}>{title}</h3>
      </header>
      <div className="card-content">
        <h2 className="statistic">
          {items && (
            <ul>
              {items.map((item) => (
                <Comment comment={item} key={item.id} />
              ))}
            </ul>
          )}
        </h2>
      </div>
    </Card>
  );
};

export default CommentsReviewCard;
