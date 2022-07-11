// pragma solidity ^0.8.14;

// contract Transaction {
//     struct transaction {
//         string ttype;
//         string name;
//         uint256 timestamp;
//         string ipfs_hash;
//         string registrant;
//         string responsible_manager;
//         string file_type;
//         string file_description;
//     }

//     // CCTV, video, doc, tert
//     mapping (string=>transaction[]) cate_transactions;
//     mapping (string=>uint256) cate_cnt;

//     //saves all the transactions of the account
//     mapping (address=>transaction[]) allTransactions;
//     //count the total number of transaction of the account
//     mapping (address=>uint16) transaction_cnt;

//     //send the transaction
//     function sendTrans(string memory cate, string memory name, string memory ipfs_hash, string memory registrant, string memory responsible_manager, string memory file_type, string memory file_description) public payable{
//         // cate = " " + cate;
//         //inserts transaction information
//         transaction memory newTransaction = transaction(cate, name, block.timestamp, ipfs_hash, registrant, responsible_manager, file_type, file_description);
//         //count the number of transactions sent
//         transaction_cnt[msg.sender]++;
//         //save all the transactions
//         allTransactions[msg.sender].push(newTransaction);
//         cate_transactions[cate].push(newTransaction);
//         cate_cnt[cate]++;
//     }

//     //view all the transactions of the user
//     function getAllTransactions() view external returns(transaction[] memory){
//         return allTransactions[msg.sender];
//     }

//     function getcateTransactions(string memory cate) view external returns(transaction[] memory){
//         return cate_transactions[cate];
//     }

//     function cntTransactions() view external returns(uint16){
//         return transaction_cnt[msg.sender];
//     }
// }




// SPDX-License-Identifier: MIT
pragma solidity ^0.8.14;

contract Transaction {
    struct transaction {
        string category;
        string name;
        uint256 timestamp;
        string ipfs_hash;
        string registrant;
        string responsible_manager;
        string file_type;
        string file_description;
    }

    event handleTransaction(string category, string name, uint256 time, string ipfs_hash, string registrant, string mresponsible_manager, string file_type, string file_description);

    //saves all the transactions of the account
    mapping (address=>transaction) transactionIndex;
    //count the total number of transaction of the account
    mapping (address=>uint16) transaction_cnt;

    //send the transaction
    function sendTrans(string memory category, string memory name, string memory ipfs_hash, string memory registrant, string memory responsible_manager, string memory file_type, string memory file_description) public payable{
        // cate = " " + cate;
        //inserts transaction information
        transaction memory newTransaction = transaction(category, name, block.timestamp, ipfs_hash, registrant, responsible_manager, file_type, file_description);
        //count the number of transactions sent
        transaction_cnt[msg.sender]++;
        //save all the transactions
        transactionIndex[msg.sender] = newTransaction;

        emit handleTransaction(category, name, block.timestamp, ipfs_hash, registrant, responsible_manager, file_type, file_description);
    }

    //view all the transactions of the user
    function getAllTransactions() view external returns(transaction memory){
        return transactionIndex[msg.sender];
    }

    function cntTransactions() view external returns(uint16){
        return transaction_cnt[msg.sender];
    }
}