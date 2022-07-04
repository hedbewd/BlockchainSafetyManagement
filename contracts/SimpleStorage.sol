//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract SimpleStorage {
    uint storedData;

    event Change(string message, uint newVal);

    function set(uint x) public {
        storedData = x;
        emit Change("set", x);
    }

    function get() public view returns (uint) {
        return storedData;
    }
}