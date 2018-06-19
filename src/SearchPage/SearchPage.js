import React from 'react'
import Book from '../Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './SearchPage.css'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      showResults: false
    }
  }

  updateQuery = (query) => {
    if (query) {
      this.setState({
        query: query.trim(),
        showResults: true
      });
      this.props.onSearch(query.trim());
    }
    else {
      this.setState({
        query: '',
        showResults: false
      });
    }
  }

  render() {
    console.log(this.props.errors)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to='/'
            className="close-search"
          >Close</Link>
          <div className="search-books-input-wrapper">

            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
          </div>
        </div>
        <ol className="books-grid">
          {this.state.showResults ? (
            this.props.errors.length > 0 ? (
              <h1>No Results for {this.state.query}</h1>
            ) : (
                this.props.searchResults.map(searchBook => {
                  //if current books are displayed on the search page give books their corresponding shelf name
                  const matchingBook = this.props.currentBooks.find(currentBook => {

                    return currentBook.id === searchBook.id;

                  })
                  return <Book key={searchBook.id} book={searchBook} matchingBook={matchingBook}
                    onShelfUpdate={this.props.onShelfUpdate} />
                })
              )) : (
              <h1>Search for books!</h1>
            )}
        </ol>
      </div>
    );
  }
}

SearchPage.propTypes = {
  searchResults: PropTypes.array.isRequired
}

export default SearchPage;