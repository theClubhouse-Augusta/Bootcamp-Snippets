/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';

import NavBar from 'components/NavBar';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      infoHover:false
    }
  }

  enterHover = () => {
    this.setState({
      infoHover:true
    })
    console.log(this.state.infoHover);
  };

  leaveHover = () => {
    this.setState({
      infoHover:false
    })
    console.log(this.state.infoHover);
  };

  showAni = () => {

    const boxOne = {
      height:"300px",
      width:"300px",
      background:"#FFF000",

    };

    const aniBox = {
      height:"500px",
      width:"300px",
      background:"#FFF000",
      opacity:"0.1",
      transition: "all 2s ease"
    }

    if(this.state.infoHover == true)
    {
      return (
        <div style={aniBox} onMouseLeave={this.leaveHover}>  </div>
      )
    }
    else {
      return(
        <div style={boxOne} onMouseOver={this.enterHover}>  </div>
      )
    }
  }

  render() {


    //Desktop Styles

    const container = {
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around"
    };

    const imgStyle = {
      boxShadow:"0 0 1000px 30px rgba(0, 0, 0, 1) inset"
    }

    const boxOne = {
      height:"300px",
      width:"300px",
      background:"#FFF000",

    };



    const boxTwo = {
      height:"300px",
      width:"300px",
      background:"#0000FF"
    };

    const boxThree = {
      height:"300px",
      width:"300px",
      background:"#AAFF00"
    };

    const boxFour = {
      height:"300px",
      width:"300px",
      background:"#00FFD0"
    };

    //Mobile Styles

    const containerMobile = {
      display:"flex",
      flexDirection:"column"
    };

    const boxOneMobile = {
      height:"300px",
      width:"100%",
      background:"#FFF000"
    };

    const boxTwoMobile = {
      height:"300px",
      width:"100%",
      background:"#0000FF"
    };

    const boxThreeMobile = {
      height:"300px",
      width:"100%",
      background:"#AAFF00"
    };

    const boxFourMobile = {
      height:"300px",
      width:"100%",
      background:"#00FFD0"
    };
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <NavBar page="Home"/>

        <Responsive minDeviceWidth={1024}>
          <div style={container}>

            {this.showAni()}

            <div style={boxTwo}> </div>

            <div style={boxThree}> </div>

            <div style={boxFour}> </div>


          </div>
        </Responsive>


        <Responsive maxDeviceWidth={1023}>
          <div style={containerMobile}>

            <div style={boxOneMobile}> </div>

            <div style={boxTwoMobile}> </div>

            <div style={boxThreeMobile}> </div>

            <div style={boxFourMobile}> </div>

          </div>
        </Responsive>
      </div>
    );
  }
}
