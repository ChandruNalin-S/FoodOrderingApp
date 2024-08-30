import React, { Component } from 'react';
import UserClass from './UserClass';


class About extends Component{
  constructor(props){
    super(props);


    console.log("Parent constructor");
  }

  componentDidMount(){// it is just work as a useEffect function/hook in functional component.
    console.log("Parent did mount");
  }

  render(){
    console.log("Parent render");
    return(
      <div>
      <h2>About Class Component</h2>
      <h3>this is online site use to buy foods</h3>
      <UserClass name="first (class)" location = "Chennai"/>
    </div>
    )
  }
}





export default About

/*
"Important:" React Life Cycle:
  -> there are two phase in react life cycle in class based component:
      (mounting)/loading
      -> Render Phase
              -> constructor
              -> render
      -> Commit Phase
              -> Dom manipulation after render the component and reconciliation, find out the different btw previse virtual dom and new virtual dom, compare the dom and then updated the dom in website.
              ->componentDidMount()-> this function will ensure that component is loaded/mount in the website.
*/

/*
 note:"In react life cycle envirnoment"

 -> react always batch the render phase first and batch the commit phase.
 for example: In about component is a parent component and there are three child component is called.
 -> First, batch all render phase in each and every component and then, batch all commit phase in each and every component after updated in dom and call the componentDidMount()-> for the component is loaded.        
  
 In console how the component is working:

 ->Parent constructor
 ->Parent render
      (Render Phase- batch all render phase->constructor and render function)
      ->first (class)child constructor
      ->first(class)child render
      ->second(class)child constructor
      ->second (class)child render
      ->third (class)child constructor
      ->third (class)child render

      (Commit Phase- after render phase, the dom is updated and call the componentDidMount())
      ->first (class)child did mount
      ->second (class)child did mount
      ->third (class)child did mount
->Parent did mount
*/
