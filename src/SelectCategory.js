import React from 'react';
import './App.css'

class SelectCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfCatagory: ''
    }
  }
  
  componentDidMount() {
    console.log(this.props.shelfName)
  }
  
  render() {
    // console.log(this.state.currentRead);
    return (
      <select>
        <option value="none" disabled>Move to...</option>

        {this.props.book.shelf === 'currentlyReading'
      ? <option value='currentlyReading' selected>Currently Reading</option>
      : <option value='currentlyReading'>Currently Reading</option>}

        {this.props.book.shelf === 'wantToRead'
      ? <option value={this.props.book.shelf} >Want to Read</option>
      : <option value='wantToRead'>Want to Read</option>}

        {this.props.book.shelf === 'read'
      ? <option value='read' selected>Read</option>
      : <option value='read'>Read</option>}

        <option value="none">None</option>
      </select>
    );
  }
}

export default SelectCategory;