// FileUpload Component : Uploads a Single File to IPFS and returns the URL
import React, { useState } from "react";
import {FileUpload} from './components/FileUpload';
import SiteName from './SiteName';
import TransactionAdd from './TransactionAdd';
import TransactionShow from './TransactionShow';
import TransactionInput from './TransactionInput';

const App = () => {
  const [fileUrl, setFileUrl] = useState("");

  return (
    <div>
      
      <SiteName />
      <TransactionInput></TransactionInput>

      <FileUpload setUrl={setFileUrl} />
      FileUrl :{" "}
      <a href={fileUrl} target="_blank" rel="noopener noreferrer">
        {fileUrl}
      </a>
      <br></br>
      <TransactionAdd>트랜잭션 추가</TransactionAdd>
      <TransactionShow>트랜잭션 보기</TransactionShow>
    </div>
  );
};

export default App;