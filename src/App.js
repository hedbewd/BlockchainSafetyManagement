import React from 'react';
import SiteName from './SiteName';
import TransactionAdd from './TransactionAdd';
import TransactionShow from './TransactionShow';
import TransactionInput from './TransactionInput';

function App() {
  return (
    <div>
      <SiteName />
      <TransactionInput></TransactionInput>
      <TransactionAdd>트랜잭션 추가</TransactionAdd>
      <TransactionShow>트랜잭션 보기</TransactionShow>
    </div>
  );
}

export default App;
