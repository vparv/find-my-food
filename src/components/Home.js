import React from 'react'

class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {location: ''};
  
      this.handleChange = this.handleChange.bind(this);
     
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleChange(event) {
      this.setState({location: event.target.value});
    }
    
    handleClick(){
    
        // Changing state
        this.setState({submit : true})
        console.log(this.state.submit)
        console.log(this.state.location)
      }
  
    
    render() {
      return (
          <div>
        <form>
          <label>
            Location:
            <input type="text" value={this.state.location} onChange={this.handleChange} />
          </label>
        </form>
        <button onClick={this.handleClick}>
        Click here!
      </button>
      </div>
           
                                     

      );
    }
  }
export default Home