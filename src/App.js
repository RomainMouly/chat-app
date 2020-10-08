import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name = 'Chad Soto' avatar = 'https://randomuser.me/api/portraits/men/18.jpg' online = {false} />
      <Contact name = 'Pelé Sata' avatar = 'https://randomuser.me/api/portraits/men/17.jpg' online = {true} />
      <Contact name = 'Chady toto' avatar = 'https://randomuser.me/api/portraits/men/16.jpg' online = {false}/>
    </div>
  );
}

export default App;
