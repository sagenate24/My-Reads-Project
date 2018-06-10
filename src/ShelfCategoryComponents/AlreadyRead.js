import React from 'react';
import Book from '../Book';

class AlreadyRead extends React.Component {
  render() {
    return (
      <div className="bookshelf">
				<h2 className="bookshelf-title">Read</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map((book) => {
							return <li key={book.id}><Book key={book.id} book={book} /></li>
						})}
					</ol>
				</div>
			</div>
    );
  }
}

export default AlreadyRead;