import React from 'react';
import Api from './Api.js'

class Flights extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef(); 
       }
       handleSubmit(event) {
        alert(this.input.current.value);
        this.setState({
            name:this.input.current.value
        })
        event.preventDefault();
        // event.stopPropagation();
      }
    render () {
        return(
            <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" ref={this.input} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <Api />
          </div>
          
        );

    }
}
export default Flights;