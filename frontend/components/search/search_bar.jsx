import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchProduct(this.state.query).then(() => {
      this.props.history.push('/search');
    });
    this.setState({query: ''});
  }

  render() {
    console.log(this.state.query);
    return (
      <form className="searchform" onSubmit={this.onFormSubmit} >
      <div className="searchbox">
        <input
          placeholder="Search for items"
          className="search-field"
          value={this.state.query}
          onChange={this.onInputChange} />

        <span className="outer-search">
          <button type='submit' className="search-button">Search</button>
        </span>
        </div>
      </form>
    );
  }
}

export default SearchBar;
