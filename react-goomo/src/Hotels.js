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
    
      airpotName = (data) => {
        let temp = []
        for (let i=0;i<30;i++) {
          temp.push(<p>{data[i].an},{data[i].con}</p>)
        }
        return temp
      }
  render() {
    const { data } = this.state
    return (
      <div>
      <ApiHotels airpotName = {data && data.airports} />
      {/* {data && this.airpotName(data.airports)} */}
      </div>
    )
  }
}

export default Hotels;