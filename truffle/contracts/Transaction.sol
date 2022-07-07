// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Transaction {
    struct transaction {
        string ttype;
        string name;
        uint256 timestamp;
        string ipfs_hash;
        string registrant;
        string responsible_manager;
        string file_type;
        string file_description;
    }

    //saves all the transactions of the account
    mapping (address=>transaction[]) allTransactions;
    //count the total number of transaction of the account
    mapping (address=>uint16) transaction_cnt;

    //send the transaction
    function sendTrans() payable external {
        //inserts transaction information
        transaction memory newTransaction = transaction("cctv", "KimYoungHoon", block.timestamp, "1234asdf", "KimJungHyun", "JoHyungWoo", ".avi", "it is a cctv video in MCNL Lab");
        //count the number of transactions sent
        transaction_cnt[msg.sender]++;
        //save all the transactions
        allTransactions[msg.sender].push(newTransaction);
    }

    //view all the transactions of the user
    function getAllTransactions() view external returns(transaction[] memory){
        return allTransactions[msg.sender];
    }

    function cntTransactions() view external returns(uint16){
        return transaction_cnt[msg.sender];
    }
}