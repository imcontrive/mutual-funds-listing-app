import React, { Component } from "react";
import { connect } from "react-redux";
import { mutualFunds } from "../../products";

import Card from "./Card";

// const API_URLS = [
//   "https://api.mfapi.in/mf/100035",
//   "https://api.mfapi.in/mf/100042",
//   "https://api.mfapi.in/mf/147736",
//   "https://api.mfapi.in/mf/101745",
//   "https://api.mfapi.in/mf/101856",
//   "https://api.mfapi.in/mf/121894",
//   "https://api.mfapi.in/mf/100122",
//   "https://api.mfapi.in/mf/100952",
//   "https://api.mfapi.in/mf/100357",
//   "https://api.mfapi.in/mf/105275",
//   "https://api.mfapi.in/mf/100828"
// ];

class ListingPage extends Component {
  state = {
    query: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    //looping over APIs
    // for (const url of API_URLS) {
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //       this.props.dispatch({
    //         type: "GET_FUNDS_SUCCESS",
    //         payload: data
    //       });
    //     });
    // }
  }

  render() {
    const { query } = this.state;
    const { funds } = this.props;
    var _toSendData;

    if (query) {
      const regexp = new RegExp(query, "i");
      _toSendData = funds.filter(fund => {
        if (regexp.test(fund.meta.scheme_name)) {
          return fund;
        }
      });
    } else {
      _toSendData = funds;
    }

    return (
      <div className="is_product_wrapper">
        <div className="wrapper">
          <div className="container">
            <div className="search-form form">
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Search by name..."
                  name="query"
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </label>
              <input
                type="submit"
                className="search-submit button "
                value="Search"
              />
            </div>
          </div>
        </div>{" "}
        {_toSendData ? _toSendData.map(fund => <Card data={fund.meta} />) : ""}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    funds: state.funds.funds
  };
};

export default connect(mapStateToProps)(ListingPage);
