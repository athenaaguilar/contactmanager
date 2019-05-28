import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';

// class-based component
class Contact extends Component {
  state = {
    showContactInfo: false // by default
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo }); // toggle true and false
  };

  // onDeleteClick = (id, dispatch) => {
  //   axios
  //     .delete(`http://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: 'DELETE_CONTACT', payload: id }));
  // };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  render() {
    // destruturing
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='card card-body mb-3'>
              <h4>
                {name}{' '}
                <i
                  className='fas fa-caret-square-down fa-sm'
                  onClick={this.onShowClick}
                  style={{ cursor: 'pointer' }}
                />
                <i
                  className='fas fa-trash fa-sm'
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                />{' '}
                <Link to={`edit/${id}`}>
                  <i
                    className='fas fa-pencil-alt'
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className='list-group'>
                  <li className='list-group-item'>Email: {email}</li>
                  <li className='list-group-item'>Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

// one prop - contact
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
