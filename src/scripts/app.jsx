import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./header";
import { Catalogue } from "./catalogue";

class App extends React.Component {
  constructor( props ) {
    super( props );

    this.state = { productFilter: "" };

    this.handleFilterChange = this.handleFilterChange.bind( this );
  }

  handleFilterChange( filterType ) {
    this.setState({ productFilter: filterType });
  }

  render() {
    return (
      <React.Fragment>
        <Header productFilter={ this.state.productFilter } onFilterChange={ this.handleFilterChange } />
        <Catalogue productFilter={ this.state.productFilter } onFilterChange={ this.handleFilterChange } />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);
