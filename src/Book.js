import React from 'react';
import ImageNotFound from './image-not-found.jpg';

class Book extends React.Component {

  render() {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.searchResults.map(book => {

            return (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> */}
                    {book.imageLinks && book.imageLinks.thumbnail
                  ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> 
                  : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ImageNotFound})` }}></div>
                  }
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
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
          })}

        </ol>
      </div>
    );
  }
}

export default Book;