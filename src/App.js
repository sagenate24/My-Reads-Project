import React from 'react';
import './App.css';
import * as BooksAPI from './BooksAPI';
import SearchPage from './SearchPage/SearchPage';
import BookList from './BookList';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBooks: [],
      searchResults: [],
      errors: ''
    };
  }

  //as component mounts this will set the state of currentBooks to all exisisting books with shelves
  componentDidMount() {
    BooksAPI.getAll()
      .then((results) => {
        this.setState({
          currentBooks: results
        });
      });
  }

  //Fires after books are changed to new Shelfs 
  renderAllUpdatedBooks = () => {
    BooksAPI.getAll()
      .then((results) => {
        this.setState({
          currentBooks: results
        });
      });
  }

  //Updates API with a new or exisisting book with the shelf passed in
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.setState(currState => ({
          currentBooks: currState.currentBooks.filter(b => b.id !== book.id).concat({ book })
        }));
        this.renderAllUpdatedBooks();
      });
  }
  //search books based on input value, if any errors set state of errors
  searchBooks = (query) => {
    BooksAPI.search(query).then(results => {
      if (results.length > 0) {
        this.setState(() => {
          return { searchResults: results, errors: '' }
        });
      } else if (results.error) {
        this.setState(() => {
          return { errors: results.error }
        });
      };
    });
  }

  render() {
    /*
      searchResults: array of book objets returned by search query
      currentBooks: all books that currently have a shelf and are displayed on main page
      errors: if search results come back with none then errors will handle a response to the user
    */
    const { searchResults, currentBooks, errors } = this.state;
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Currently Reading</h2>
                <div className='bookshelf-books'>
                  <BookList
                    currentBooks={currentBooks}
                    shelfName={'currentlyReading'}
                    onShelfUpdate={this.updateShelf}
                  />
                </div>
              </div>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Want To Read</h2>
                <div className='bookshelf-books'>
                  <BookList
                    currentBooks={currentBooks}
                    shelfName={'wantToRead'}
                    onShelfUpdate={this.updateShelf}
                  />
                </div>
              </div>
              <div className='bookshelf'>
                <h2 className='bookshelf-title'>Read</h2>
                <div className='bookshelf-books'>
                  <BookList
                    currentBooks={currentBooks}
                    shelfName={'read'}
                    onShelfUpdate={this.updateShelf}
                  />
                </div>
              </div>
            </div>
            <div className='open-search'>
              <Link
                to='/search'
              >Add a book</Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchPage
            onShelfUpdate={this.updateShelf}
            currentBooks={currentBooks}
            searchResults={searchResults}
            onSearch={this.searchBooks}
            errors={errors}
          />
        )} />
      </div>
    );
  }
}

export default BooksApp;