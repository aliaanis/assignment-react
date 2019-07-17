import React, { Component } from 'react';
import { Nav, Cover, Detail, Testimonials, Contact,Footer } from './templates';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Cover />
        <Detail />
        <Testimonials />
        <Contact />
        <Footer/>
      </div>
    )
  }
}

export default App;
