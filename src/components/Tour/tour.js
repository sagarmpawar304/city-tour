import React, { Component } from 'react'
import './tour.scss'

export default class tour extends Component {
  state = {
    showInfo: false,
  }

  toggle = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    })
  }

  render() {
    const { id, city, img, info, name } = this.props.tour
    const { removeTour } = this.props

    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt='tour img' />
          <span className='close-btn' onClick={() => removeTour(id)}>
            <i className='fas fa-window-close'></i>
          </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info{' '}
            <span onClick={this.toggle}>
              <i className='fas fa-caret-square-down'></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </article>
    )
  }
}
