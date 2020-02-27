import React, { Component } from 'react';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      open: this.state.open ? 'menu-open' : 'menu-close'
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({
        open: nextProps.open ? 'menu-open' : 'menu-close'
      });
    }
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    return (
      <div
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
        className={`hamburger ${this.state.open} ${this.props.colorUpdate}`}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    );
  }
}

export default Hamburger;
