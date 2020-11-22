import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';




class App extends React.Component{
  state = {lat: null, errorMessage:'',message:'Please accept location request'};
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
    position=> this.setState({lat:position.coords.latitude}),
    err => this.setState({errorMessage:err.message})
    );
  }

  renderContent(){
    
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return( <SeasonDisplay
        lat={this.state.lat}
      />
      );
    }
    return <Spinner
      message={this.state.message}
    />;
  }
  render(){
    return(
      this.renderContent()
    );
  }
}



ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);



