import React from 'react';
import Book from './Book';

class BookList extends React.Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.searchResults.map(book => {
          if (book.shelf === 'currentlyReading' && this.props.shelfName === 'currentlyReading') {
            return <Book key={book.id} book={book} shelfName={this.props.shelfName}/>
          }
          else if (book.shelf === 'wantToRead' && this.props.shelfName === 'wantToRead') {
            return <Book key={book.id} book={book} shelfName={this.props.shelfName}/>
          }
          else if (book.shelf === 'read' && this.props.shelfName === 'read') {
            return <Book key={book.id} book={book} shelfName={this.props.shelfName}/>
          } else {
            return '';
          }
        })}
      </ol>
    );
  }
}

export default BookList