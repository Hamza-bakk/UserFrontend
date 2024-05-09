import  { Component } from 'react';
import { Navbar } from '../../components/landingpage/Navbar';
import { PageOne } from '../../components/landingpage/PageOne';


export default class LandingPage extends Component {
  render() {
    return (
      <div >
        < Navbar/>
        < PageOne/>
      </div>
    );
  }
}
