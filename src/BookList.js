import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.currentBooks.map(book => {
          // let shelfcategory;
          if (book.shelf === 'currentlyReading' && this.props.shelfName === 'currentlyReading') {
            // let shelfcategory = 'currentlyReading';
            return <Book key={book.id} book={book} currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate} />
          }
          else if (book.shelf === 'wantToRead' && this.props.shelfName === 'wantToRead') {
            // let shelfcategory = 'wantToRead';
            return <Book key={book.id} book={book} currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate} />
          }
          else if (book.shelf === 'read' && this.props.shelfName === 'read') {
            // let shelfcategory = 'read';
            return <Book key={book.id} book={book} currentBookShelf={this.props.shelfName}
              onShelfUpdate={this.props.onShelfUpdate} />
          }
          // return null
        })}
      </ol>
    );
  }
}

export default BookList;