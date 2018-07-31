import React from 'react';
import Movie from './Movie';
import { Link, withRouter } from 'react-router-dom';


class Search extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    this.setState({
      searchText: ''
    })
  }

  _handleChange = (e) => {
    this.setState({
      searchText: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          this.props.searchSubmit(this.state.searchText);
          e.preventDefault();
          this.props.history.push('/search/' + this.state.searchText);
        }}>
        <input type="text" placeholder='Search for movie' onChange={this._handleChange}/>
        <input type="submit"/>

        </form>
      </div>
    )
  };
};

export default withRouter(Search);