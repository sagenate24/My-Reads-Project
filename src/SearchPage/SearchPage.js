import React from 'react'
import Book from '../Book'
import { Link } from 'react-router-dom'

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateQuery = (query) => {
    if (query) {
      this.setState({
        query: query.trim()
      });
      this.props.onSearch(query.trim());
    }
    else {
      this.setState({
        query: ''
      });
    }
  }

  render() {
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
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <ol className="books-grid">
          {
            this.props.searchResults.map(searchBook => {

              const matchingBook = this.props.currentBooks.find(currentBook => {
                // console.log(currentBook.id === searchBook.id)
                return currentBook.id === searchBook.id;

              })
              return <Book key={searchBook.id} book={searchBook} matchingBook={matchingBook}
                onShelfUpdate={this.props.onShelfUpdate} />
            })
          }
        </ol>
      </div>
    );
  }
}

export default SearchPage;