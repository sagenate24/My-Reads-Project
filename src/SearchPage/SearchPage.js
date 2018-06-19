import React from 'react';
import Book from '../Book';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchPage.css';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateQuery = (query) => {
    if (query) {
      this.setState({ query: query.trim() });
      this.props.onSearch(query.trim());
    } else {
      this.setState({ query: '' });
    }
  }

  render() {
    const { searchResults, currentBooks, errors, onShelfUpdate } = this.props;
    const { query } = this.state;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link
            to='/'
            className='close-search'
          >Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <ol className='books-grid'>
          {query.length > 0 ? (
            //this.props.errors is a string that comes back from the server if the query does not match
            errors.length > 0 ? (
              <h1>No Results for '{query}'</h1>
            ) : (
                searchResults.map(searchBook => {
                  //if current books are displayed on the search page give books their corresponding shelf name
                  const matchingBook = currentBooks.find(currentBook => {
                    return currentBook.id === searchBook.id;
                  })
                  return <Book
                    key={searchBook.id}
                    book={searchBook}
                    matchingBook={matchingBook}
                    onShelfUpdate={onShelfUpdate}
                  />;
                })
              )) : (
              <h1>Search for books!</h1>
            )}
        </ol>
      </div>
    )
  }
}

SearchPage.propTypes = {
  searchResults: PropTypes.array.isRequired
};

export default SearchPage;