import React from 'react';
import SiteName from './SiteName';
import TransactionAdd from './TransactionAdd';
import TransactionShow from './TransactionShow';

function App() {
  return (
    <div>
      <SiteName />
      <input type="text" placeholder="Type"></input>
      <br></br>
      <input type="text" placeholder="Name"></input>
      <br></br>
      <input type="text" placeholder="Time"></input>
      <br></br>
      <input type="text" placeholder="IPFS Hash"></input>
      <br></br>
      <input type="text" placeholder="Registrant"></input>
      <br></br>
      <input type="text" placeholder="Responsible Manager"></input>
      <br></br>
      <input type="text" placeholder="File Type"></input>
      <br></br>
      <input type="text" placeholder="File Description"></input>
      <br></br>
      <TransactionAdd>트랜잭션 추가</TransactionAdd>
      <TransactionShow>트랜잭션 보기</TransactionShow>
    </div>
  );
}

export default App;
