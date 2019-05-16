import React from 'react';
import ApiHotels from './ApiHotels.js'

class Hotels extends React.Component{
    constructor(props) {
        super(props);
     
        this.state = {
          data: null,
        };
      }
    
      componentDidMount() {
        fetch('https://api.goomo.team/int/master/v2.0/flights/airports')
          .then(response => response.json())
          .then(data => this.setState({ data }));
      }
  render() {
    const { data } = this.state
    return (
      <div>
      <ApiHotels airpotName = {data && data.airports} />
      </div>
    )
  }
}

export default Hotels;