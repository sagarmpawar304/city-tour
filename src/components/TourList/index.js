import React, { Component } from 'react'
import Tour from '../Tour/tour'
import './tourList.scss'
import { tourData } from '../../tourData'

export default class tourLIst extends Component {
  state = {
    tours: tourData,
  }

  removeTour = (id) => {
    const { tours } = this.state
    const sortedTour = tours.filter((tour) => tour.id !== id)
    this.setState({
      tours: sortedTour,
    })
  }
  render() {
    // console.log(this.state.tours)
    const { tours } = this.state
    return (
      <section className='tourList'>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}></Tour>
        ))}
      </section>
    )
  }
}
