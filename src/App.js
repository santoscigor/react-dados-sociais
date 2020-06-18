import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Card from './Components/Card'
import Nav from './Components/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Nav></Nav>
      </header>
      <main className="flex mb-4 items-center justify-between p-6">
        <Card className="w-1/5" title="Igu" content="Negão do telegram"></Card>
        <Card className="w-1/5" title="Juvenaldo" content="Palestinha tuitero"></Card>
        <Card className="w-1/5" title="Tertuliana" content="A travestis"></Card>
        <Card className="w-1/5" title="Sua mãe" content="Olha o respeito cidadão"></Card>
        <Card className="w-1/5" title="Hehehehe" content="Come cu de curioso"></Card>
        <Card className="w-1/5" title="Um texto tão grande mas tão grande mas tão grande mas tão grande mas tão grande mas " content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."></Card>
      </main>
    </div>
  );
}

export default App;
