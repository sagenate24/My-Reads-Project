# MyReads Project

This project gives you the ability to search and save books to shelves categorized by 'Currently Reading', 'Want To Read', and 'Read'. There are currently two pages in this App - the main page and the search page. The main page has all your added books categorized by what shelf you put them in and your search page will render books as you type in the input field automatically. All books that show up on either the main page or search page have a drop down selection menu where you can choose to switch books to different shelves or add new books from your search results to one of the shelves on the main page.

## Install and Launch

- To install the project and all its dependencies you can run 'npm install --save' to save all dependencies as well as installing them.

- To start the project you can run 'npm start' in your terminal.

## Backend Server

The backend server is under the BooksAPI.js file and has all get and post requests you need to search, add, get all, and update books.

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

Happy Coding!