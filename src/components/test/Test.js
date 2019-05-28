import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    completed: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          completed: data.completed
        })
      );
  }

  // componentWillMount() {
  //   console.log('componentWillMount...');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }
  // componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }
  // componentWillReceiveProps() {
  //   console.log('componentWillReceiveProps...');
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     test: 'something'
  //   };
  //   // return rather than calling setState
  // }
  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, completed } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        {completed ? <p>completed</p> : <p>Not yet completed</p>}
      </div>
    );
  }
}

export default Test;
