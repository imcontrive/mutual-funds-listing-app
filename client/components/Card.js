import React from "react";

function Card(props) {
  const getBadge = title => {
    return (title && title[0]) || "";
  };

  const fund_house = props && props.data && props.data.meta.fund_house;
  const scheme_category =
    props && props.data && props.data.meta.scheme_category;
  const scheme_name = props && props.data && props.data.meta.scheme_name;
  const scheme_type = props && props.data && props.data.meta.scheme_type;

  return (
    <div className="card">
      {props.data ? (
        <>
          <div className="card-header">
            <div className="header-left">
              <div className="badge-container">
                <p className="badge">{getBadge(scheme_name)}</p>
              </div>
              <h3>{scheme_name}</h3>
            </div>
            <div className="star-icons">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
          <div className="card-body">
            <p className="tag">Category: {scheme_category}</p>
            <p>{scheme_type}</p>
          </div>{" "}
        </>
      ) : (
        <p className="text-center" style={{ paddingTop: "10px" }}>
          Not Found
        </p>
      )}
    </div>
  );
}

export default Card;
