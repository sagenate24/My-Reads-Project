import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage/SearchPage';
import BookList from './BookList';

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
      showSearchPage: false,
      currentBooks: [],
      currentlyRead: [],
      wantToRead: [],
      read: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((currentBooks) => {
        this.setState({
          currentlyRead: currentBooks
        })
        // currentBooks.map(book => {
        //   if (book.shelf === 'currentlyReading') {
        //     this.setState({
        //       currentlyRead: currentBooks
        //     })
        //   }
        // })
        // return;
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
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                      <BookList searchResults={this.state.currentlyRead} shelfName={'currentlyReading'} />
                  </div>
                </div>
                <div className="bookshelf">
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want To Read</h2>
                    <div className="bookshelf-books">
                        <BookList searchResults={this.state.currentlyRead} shelfName={'wantToRead'} />
                    </div>
                  </div>
                </div>
                <div className="bookshelf">
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <BookList searchResults={this.state.currentlyRead} shelfName={'read'} />
                    </div>
                  </div>
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
