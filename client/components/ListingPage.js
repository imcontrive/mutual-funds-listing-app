import React, { Component } from "react";

export default class ListingPage extends Component {
  componentDidMount() {
    fetch(
      // `https://www.quandl.com/api/v3/datatables/NDW/EQTA?api_key=jccEMeaJ1hpsqqxVuz8k`,
      // `https://www.rupeevest.com/Mutual-Funds-India/Best-Mutual-Funds`,
      "https://market.mashape.com/navii/mutual-funds-nav-india",
      {
        method: "GET"
      }
    ).then(res => console.log(res, "list"));
  }

  render() {
    return (
      <div className="is_product_wrapper">
        <div className="card">
          <div className="card-header">
            <div className="header-left">
              <div className="badge">K</div>
              <h3>Kotak Equity Opportunities Fund</h3>
            </div>
            <div className="star-icons">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
          <div className="card-body"></div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="header-left">
              <div className="badge">K</div>
              <h3>Kotak Equity Opportunities Fund</h3>
            </div>
            <div className="star-icons">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
          <div className="card-body"></div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="header-left">
              <div className="badge">K</div>
              <h3>Kotak Equity Opportunities Fund</h3>
            </div>
            <div className="star-icons">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
            </div>
          </div>
          <div className="card-body"></div>
        </div>
      </div>
    );
  }
}
