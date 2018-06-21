import React from 'react';
import Book from './Book';
import PropsTypes from 'prop-types';

class BookList extends React.Component {
  render() {
    const { currentBooks, shelfName, onShelfUpdate } = this.props;
    return (
      <ol className='books-grid'>
        {currentBooks.map(book => {
          if (book.shelf === shelfName) {
            return <Book
              key={book.id}
              book={book}
              currentBookShelf={shelfName}
              onShelfUpdate={onShelfUpdate}
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