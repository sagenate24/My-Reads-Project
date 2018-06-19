import React from 'react';
import ImageNotFound from './ImageNotFound.png';
import SelectCategory from './SelectCategory';
import './App.css';

class Book extends React.Component {
  render() {
    const { book } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            {book.imageLinks && book.imageLinks.thumbnail
              ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ImageNotFound})` }}></div>
            }
            <div className="book-shelf-changer">
              {/* If books are matching in both App and SearchPage then display correct shelfName*/}
              {this.props.matchingBook && this.props.matchingBook.shelf
                ? <SelectCategory book={book} shelfName={this.props.matchingBook.shelf}
                  onShelfUpdate={this.props.onShelfUpdate} />

                : this.props.currentBookShelf ? (
                  <SelectCategory book={book}
                  onShelfUpdate={this.props.onShelfUpdate} shelfName={this.props.currentBookShelf} />
                ) : (
                  //no current books and no matching shelfs sets shelf name to none
                  <SelectCategory book={book}
                  onShelfUpdate={this.props.onShelfUpdate} shelfName={'none'} />
                )
              }
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          {book && book.authors
            ? <div className="book-authors">{book.authors[0]}</div>
            : <div className="book-authors">author not found</div>
          }
        </div>
      </li>
    );
  }
}

export default Book;