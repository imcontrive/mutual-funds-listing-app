import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { connect } from "react-redux";

class Chart extends Component {
  state = {
    chartData: {},
    newName: ""
  };

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  componentDidMount() {
    const { allFunds } = this.props;
    var singleData = allFunds.filter(
      fund => fund.meta.scheme_name === this.props.location.state.nameId
    );

    var newLabels = [];
    var newData = [];

    singleData.map(item => {
      this.setState({ newName: item.meta.scheme_name });
      item.portfolio.map(port => {
        newLabels.push(port.MKT_VALUE);
        newData.push(port.PORT_DATE);
      });
    });

    this.setState({
      chartData: {
        labels: newData,
        datasets: [
          {
            label: "Nav",
            data: newLabels,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  }

  render() {
    const { allFunds } = this.props;
    return (
      <div className="chart-wrapper">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.state.newName,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.state.newName,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />

        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: this.state.newName,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allFunds: state.funds.funds
  };
};

export default connect(mapStateToProps)(Chart);
