import React from 'react';
import * as BooksAPI from '../BooksAPI';
// import SearchList from './SearchList';
// import SearchList from './SearchList';
import Book from '../Book';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    }
  }

  updateQuery = (query) => {
    if (query) {
      this.setState({
        query: query
      });
      BooksAPI.search(query).then(results => {
        this.setState({
          searchResults: results
        })
      })
    }
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
    console.log(this.state.searchResults)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a className="close-search">Close</a>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        {this.state.searchResults.length > 0 &&
          <Book searchResults={this.state.searchResults} />
        }

      </div>
    );
  }
}

export default SearchPage;