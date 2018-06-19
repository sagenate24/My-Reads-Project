import React from 'react';
import Book from './Book';
import PropsTypes from 'prop-types';

class BookList extends React.Component {
  render() {
    return (
      <ol className='books-grid'>
        {this.props.currentBooks.map(book => {
          if (book.shelf === 'currentlyReading' && this.props.shelfName === 'currentlyReading') {
            return <Book
              key={book.id}
              book={book}
              currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate}
            />
          }
          else if (book.shelf === 'wantToRead' && this.props.shelfName === 'wantToRead') {
            return <Book
              key={book.id}
              book={book}
              currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate}
            />
          }
          else if (book.shelf === 'read' && this.props.shelfName === 'read') {
            return <Book
              key={book.id}
              book={book}
              currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate}
            />
          }
        })}
      </ol>
    );
  }
}

BookList.propTypes = {
  currentBooks: PropsTypes.array.isRequired,
  shelfName: PropsTypes.string.isRequired,
  onShelfUpdate: PropsTypes.func.isRequired
};

export default BookList;