import React, { useEffect, useState, Component } from "react";
import {FileUpload} from './components/FileUpload';
import SiteName from './components/SiteName';
import TransactionAdd from './components/TransactionAdd';
import TransactionShow from './components/TransactionShow';
import TransactionInput from './components/TransactionInput';
import "./App.css";
import TransactionContract from "../src/contracts/Transaction.json"
import Web3 from 'web3';


// export default function App() {
//   const [fileUrl, setFileUrl] = useState("");
//   const [web3, setWeb3] = useState("");
//   const [account, setAccount] = useState("");
//   const [transactionInstance, setTransactionInstance] = useState("");
//   const [ttype, setTtype] = useState("");

//   const componentWillMount = async() => {
//     const wweb3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

//     setWeb3((web3) => wweb3);
//     this.instantiateContract();
//     // this.setState({
//     //   web3: web3s
//     // }, () => {
//     //   this.instantiateContract();
//     // })
//     console.log(web3)
//   }

//   const instantiateContract = async() => {
//     const contract = require("truffle-contract");
//     const transaction = contract(TransactionContract);
//     console.log(web3);
//     transaction.setProvider(web3.currentProvider);
//     web3.eth.getAccount((error, accounts) => {
//       if (!error){
//         transaction.deployed().then(instance => {
//           setTransactionInstance((transactionInstance) => instance);
//           setAccount((account) => accounts[0]);
//         })
//       }
//     })
//   }

//   const sendTransaction = async() => {
//     transactionInstance.sendTransaction({
//       from: this.state.account,
//       value: this.state.web3.utils.toWei('10', "ether"),
//       //gas: 100000
//     })
//     //this.updateAllTransactions();
//   }

// // updateAllTransactions() {
// //   this.state.transactionInstance.getAllTransactions.then(result => {
// //     this.setState ({ttype: result})
// //   })
// // }

//   return (
//     componentWillMount(),

//     <div>
//       <input type="text" placeholder="Type"></input>
//       <br></br>
//       <input type="text" placeholder="Name"></input>
//       <br></br>
//       <input type="text" placeholder="Time"></input>
//       <br></br>
//       <input type="text" placeholder="IPFS Hash"></input>
//       <br></br>
//       <input type="text" placeholder="Registrant"></input>
//       <br></br>
//       <input type="text" placeholder="Responsible Manager"></input>
//       <br></br>
//       <input type="text" placeholder="File Type"></input>
//       <br></br>
//       <input type="text" placeholder="File Description"></input>
//       <br></br>
      
//       {/* <FileUpload setUrl={setFileUrl} />
//       FileUrl :{" "}
//       <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//         {fileUrl}
//       </a>
//       <br></br> */}

//       <p>Your account: {account}</p>
//       <br></br>

//       <button onClick={() => this.sendTransaction()}>
//         트랜잭션 추가
//       </button>
//       <br></br>

//       <p>all transactions:</p>
//       <br></br>
//       <p>{ttype}</p>
//     </div>
//   )
// }











// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       web3: null,
//       account: null,
//       transactionInstance: null,

//       ttype: null,
//       name: null,
//       timestamp: null,
//       ipfs_hash: null,
//       registrant: null,
//       responsible_manager: null,
//       file_type: null,
//       file_description: null
//     };
//   }

//   componentWillMount() {
//     const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
//     this.setState({
//       web3: web3
//     }, () => {
//       this.instantiateContract();
//     })
//     console.log(web3)
//   }

//   instantiateContract(){
//     const contract = require("truffle-contract");
//     const transaction = contract(TransactionContract);
//     console.log(this.state.web3);
//     transaction.setProvider(this.state.web3.currentProvider);

//     this.state.web3.eth.getAccounts((error, accounts) => {
//       if (!error){
//         transaction.deployed().then(instance => {
//           this.setState({transactionInstance: instance, account: accounts[0]});
//           //this.updateAllTransactions();
//         })
//       }
//     })
//   }

//   sendTransaction() {
//     this.state.transactionInstance.sendTransaction({
//       from: this.state.account,
//       value: this.state.web3.utils.toWei('10', "ether"),
//       //gas: 100000
//     })
//     //this.updateAllTransactions();
//   }

// updateAllTransactions() {
//   this.state.transactionInstance.getAllTransactions.then(result => {
//     this.setState ({ttype: result})
//   })
// }

//   render() {
//     return (
//       <div>
//         <input type="text" placeholder="Type"></input>
//         <br></br>
//         <input type="text" placeholder="Name"></input>
//         <br></br>
//         <input type="text" placeholder="Time"></input>
//         <br></br>
//         <input type="text" placeholder="IPFS Hash"></input>
//         <br></br>
//         <input type="text" placeholder="Registrant"></input>
//         <br></br>
//         <input type="text" placeholder="Responsible Manager"></input>
//         <br></br>
//         <input type="text" placeholder="File Type"></input>
//         <br></br>
//         <input type="text" placeholder="File Description"></input>
//         <br></br>
        
//         {/* <FileUpload setUrl={setFileUrl} />
//         FileUrl :{" "}
//         <a href={fileUrl} target="_blank" rel="noopener noreferrer">
//           {fileUrl}
//         </a>
//         <br></br> */}

//         <p>Your account: {this.state.account}</p>
//         <br></br>

//         <button onClick={() => this.sendTransaction()}>
//           트랜잭션 추가
//         </button>
//         <br></br>

//         <p>all transactions:</p>
//         <br></br>
//         <p>{this.state.ttype}</p>
//       </div>
//     )
//   }
// }

// export default App;













class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      account: null,
      transactionInstance: null,

      ttype: null,
      name: null,
      timestamp: null,
      ipfs_hash: null,
      registrant: null,
      responsible_manager: null,
      file_type: null,
      file_description: null
    };
  }

  async componentWillMount() {
    const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
    this.setState({
      web3: web3
    }, () => {
      this.instantiateContract();
    })
    console.log(web3)
  }

  async instantiateContract(){
    const contract = require("truffle-contract");
    const transaction = contract(TransactionContract);
    console.log(this.state.web3);
    transaction.setProvider(this.state.web3.currentProvider);

    this.state.web3.eth.getAccounts((error, accounts) => {
      if (!error){
        transaction.deployed().then(instance => {
          this.setState({transactionInstance: instance, account: accounts[0]});
          //this.updateAllTransactions();
        })
      }
    })
  }

  async sendTransaction() {
    await this.state.transactionInstance.sendTrans({
      from: this.state.account,
      value: this.state.web3.utils.toWei('10', "ether"),
      gas: 1000000
    })
    //this.updateAllTransactions();
  }

async updateAllTransactions() {
  await this.state.transactionInstance.getAllTransactions().then(result => {
    this.setState ({ttype: result})
    console.log(this.state.ttype);
  })
}

  render() {
    return (
      <div>
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
        
        {/* <FileUpload setUrl={setFileUrl} />
        FileUrl :{" "}
        <a href={fileUrl} target="_blank" rel="noopener noreferrer">
          {fileUrl}
        </a>
        <br></br> */}

        <p>Your account: {this.state.account}</p>
        <br></br>

        <button onClick={() => this.sendTransaction()}>
          트랜잭션 추가
        </button>
        <button onClick={() => this.updateAllTransactions()}>
          트랜잭션 보여주기
        </button>
        <br></br>

        <p>all transactions:</p>
        <br></br>
        <p>{this.state.ttype}</p>
      </div>
    )
  }
}

export default App;