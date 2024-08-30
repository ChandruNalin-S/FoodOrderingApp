import React from "react"
// class based componenet -> it is a older version to create component

class UserClass extends React.Component{
  constructor(props){
    super(props);

    //console.log(this.props.name+"child constructor");

    this.state = {// creating state variable in class based object and it contains lot of state variable inside this state object.
      userInfo:
      {
        name:"dummy",
        location:"delhi"
      } 
    }
  }

  async componentDidMount(){
    //console.log(this.props.name+"child did mount");

    this.timer = setInterval(()=>{
      console.log("the component is running");
    },1000);

    const data =await fetch("https://api.github.com/users/ChandruNalin-S");
    const json  = await data.json();

    //console.log(json);

    this.setState({
      userInfo:json
    })

  }

  componentDidUpdate(){
    console.log("the component is updated in website");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("the component is unmounted from website");
  }


  render(){
    //console.log(this.props.name+"child render");
    //const {name,location} = this.props;
    //const {count} = this.state;
    const {name, location,avatar_url} = this.state.userInfo
    return(
      <div>
        <img src={avatar_url}/>
        <h1>{name}</h1>
        <h3>{"location:" +location}</h3>
      </div>
    )
  }
}


export default UserClass;