// import React, { Component } from 'react'
import React, {Component, useEffect, useState } from 'react';
import Listitem from './Listitem';
import _ from 'lodash';
import './Check.css'


class Check extends Component{
    constructor(props){
        super(props);
    
        this.state = {
          chores:[
            {
              id: 1,
              name: 'Country roads',
              description: 'something like that',
              completed: true
            },
            {
              id: 2,
              name: 'take me home',
              description: 'something like that',
              completed: false
            },
            {
              id: 3,
              name: 'To the place i belong',
              description: 'something like that',
              completed: true
            }
          ]
        }
      }
      handleOnClick=id=>{
        const chores = _.cloneDeep(this.state.chores);
    
        for(let chore of chores){
          if(chore.id==id){
            chore.completed = !chore.completed;
            break;
          }
        }
        this.setState({chores})
      }

    

      render(){
        const { chores} = this.state;
        return (
          <div className="maincom">
            <h1>Chores</h1>
            <ul>
              {chores.map(chore => (
                <Listitem
                  key={chore.id}
                  id={chore.id}
                  name={chore.name}
                  completed={chore.completed}
                  description={chore.description}
                  handleOnClick={this.handleOnClick}
                />
              ))}
            </ul>
          </div>
        );
      }
  }
  
  export default Check;