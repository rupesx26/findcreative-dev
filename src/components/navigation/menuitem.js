import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  handleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const styles = {
      pos: {
        opacity: this.state.hover ? '1' : '0',
        bottom: this.state.hover ? '67%' : '60%',
        transition: 'all 0.4s ease-in-out'
      }
    };

    return (
      <li className="list-item-wrapper">
        <Link to={this.props.route}>
          <span className="pos">{this.props.number}</span>
          <div className="list-item">{this.props.children}</div>
        </Link>
      </li>
    );
  }
}

export default MenuItem;
