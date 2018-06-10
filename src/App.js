import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import CurrentlyReading from './ShelfCategoryComponents/CurrentlyReading';
import WantToRead from './ShelfCategoryComponents/WantToRead';
import AlreadyRead from './ShelfCategoryComponents/AlreadyRead';
import SearchPage from './SearchPage/SearchPage';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      showSearchPage: true,
      books: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div className="bookshelf">
                  <CurrentlyReading books={this.state.books} />
                </div>
                <div className="bookshelf">
                  <WantToRead books={this.state.books} />
                </div>
                <div className="bookshelf">
                  <AlreadyRead books={this.state.books} />
                </div>
              </div>
              <div className="open-search">
                <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
              </div>
            </div>
          )}
      </div>
    )
  }
}

export default BooksApp
