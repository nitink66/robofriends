import React, { Component } from 'react';
import CardList from './CardList';
import './App.css'
import SearchBox from './SearchBox';
import Scroll from './Scroll.js';


class App extends Component  {
    constructor(){
        super()
        this.state ={
            robots :[],
            searchfield: ''
        }
    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>  this.setState({ robots : users}));
    }

    

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value})
    
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length === 0){
            return (  //loading spinner
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        }
        else {
            return(
                <div className="tc">
                      <h1 className='robotext'>ROBOFRIENDS</h1>
                      <SearchBox searchchange = {this.onSearchChange}/>   
                      <Scroll>    
                      <CardList robots={ filteredRobots }/>
                      </Scroll>
                </div>
          
              );
        }


    }
}

export default App;