/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

class NavBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      siteName:"Nadeem"
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

  showMenu = () => {

    const nav = {
      display:"flex",
      flexDirection:"column",
      alignSelf:'center'
    }

    const navLink = {
      margin:'5px',
      border:'1px solid #999999',
      padding:'5px'
    };

    if(this.state.menuOpen == true)
    {
      return(
        <nav style={nav}>
          <Link style={navLink}>Link One</Link>
          <Link style={navLink}>Link Two</Link>
          <Link style={navLink}>Link Three</Link>
        </nav>
      )
    }
  }


  render() {

    const navBar = {
      height:"65px",
      width:"100%",
      background:"rgba(255, 0, 0, 0.4)",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }

    const titleStyle = {
      fontSize:"3em",
      fontVariant:"small-caps"
    }

    const nav = {
      display:"flex",
      flexDirection:"row",
      alignSelf:'center'
    }

    const navLink = {
      margin:'5px',
      border:'1px solid #999999',
      padding:'5px'
    };


    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <nav style={navBar}>
            <div style={titleStyle}></div>
            <nav style={nav}>
              <Link style={navLink}>Link One</Link>
              <Link style={navLink}>Link Two</Link>
              <Link style={navLink}>Link Three</Link>
            </nav>
          </nav>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <nav style={navBar}>
            <div style={titleStyle}>{this.props.chicken}</div>
            <nav style={nav}>
              <IconButton onTouchTap={this.handleMenu}><Menu/></IconButton>
            </nav>
          </nav>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}

export default NavBar;
