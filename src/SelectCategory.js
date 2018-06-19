import React from 'react'
import PropTypes from 'prop-types'
import './App.css'

class SelectCategory extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onShelfUpdate(this.props.book, e.target.value)
  }

  render() {
    return (
      <div>
        <select value={this.props.shelfName} onChange={this.handleSubmit}>
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">none</option>
        </select>
      </div>
    );
  }
}

SelectCategory.propTypes = {
  onShelfUpdate: PropTypes.func.isRequired,
  shelfName: PropTypes.string.isRequired
}

export default SelectCategory;