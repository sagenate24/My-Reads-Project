import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage/SearchPage';
import BookList from './BookList';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

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
      currentBooks: [],
      searchResults: [],
    };
    this.updateShelf = this.updateShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((results) => {
        // console.log(results);
        this.setState({
          currentBooks: results
        });
      });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState(currState => ({
          currentBooks: currState.currentBooks.filter(b => b.id !== book.id).concat({ book })
        }))
      })
      this.componentDidMount()
  }

  // addShelfPropsToSearchResults = (books) => {
  //   let myBooks = this.state.currentBooks
  //   for (let book of books) {
  //     // console.log(books)
  //     book.shelf = "none"
  //   }
  //   for (let book of books) {
  //     for (let b of myBooks) {
  //       if (b.id === book.id) {
  //         book.shelf = b.shelf
  //       }
  //     }
  //   }
  //   // return books
  // }

  searchBooks = (query) => {
    BooksAPI.search(query).then(results => {
      // console.log(results);
      if (results.length > 0) {
        // this.addShelfPropsToSearchResults(results)
        this.setState(() => {
          return { searchResults: results }
        })
      }
    });
  }

  render() {
    console.log(this.state.currentBooks)
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BookList currentBooks={this.state.currentBooks} shelfName={'currentlyReading'}
                    onShelfUpdate={this.updateShelf} />
                </div>
              </div>
              <div className="bookshelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want To Read</h2>
                  <div className="bookshelf-books">
                    <BookList currentBooks={this.state.currentBooks} shelfName={'wantToRead'}
                      onShelfUpdate={this.updateShelf} />
                  </div>
                </div>
              </div>
              <div className="bookshelf">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <BookList currentBooks={this.state.currentBooks} shelfName={'read'}
                      onShelfUpdate={this.updateShelf} />
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link
                to='/search'
                onClick={() => this.setState({ showSearchPage: true })}
              >Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchPage onShelfUpdate={this.updateShelf} currentBooks={this.state.currentBooks}
          searchResults={this.state.searchResults} onSearch={this.searchBooks}
          shelfName={this.getShelf} />
        )} />
      </div>
    );
  }
}

export default BooksApp;