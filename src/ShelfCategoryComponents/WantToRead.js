import React from 'react';
import Book from '../Book';

class WantToRead extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="bookshelf">
				<h2 className="bookshelf-title">Want To Read</h2>
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

export default WantToRead;