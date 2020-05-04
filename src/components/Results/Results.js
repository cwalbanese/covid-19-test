import React, { Component } from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: props.match.params.state,
      data: [],
      updated: {},
    };
  }

  componentDidMount() {
    const url = `https://covid-19-testing.github.io/locations/${this.state.state}/complete.json`;
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response });
      })
      .then(() => {
        const state = this.state.state.toUpperCase().replace(/-/g, ' ');
        this.setState({ state: state });
      });
  }

  render() {
    const callPhone = (evt) => {
      window.open(`tel:${evt.target.innerHTML}`);
    };

    return (
      <div id="results">
        <h1 className="results-title">RESULTS FOR {this.state.state}</h1>

        {this.state.data.map((result) => (
          <div className="testing-site" key={result.id}>
            <div className="info">
              <h2>{result.name}</h2>

              <h3 className="phone" onClick={callPhone}>
                {result.phones[0] ? result.phones[0].number : ''}
              </h3>
              <h3>
                {result.physical_address[0]
                  ? result.physical_address[0].address_1.replace(/,/g, '')
                  : ''}
              </h3>
              <h3>
                {result.physical_address[0]
                  ? result.physical_address[0].city + ', '
                  : ''}
                {result.physical_address[0]
                  ? result.physical_address[0].state_province + ' '
                  : ''}
                {result.physical_address[0]
                  ? result.physical_address[0].postal_code
                  : ''}
              </h3>
            </div>
            <div className="description">
              <p>{result.description}</p>
              <p className="updated">Last updated: {result.updated}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default Results;
