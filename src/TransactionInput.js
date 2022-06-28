import React from 'react';

function TransactionInput() {
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
            <input type="file" onChange={(e) => console.log(e.target.files[0])}></input>
            <br></br>
        </div>
    );
}

export default TransactionInput;