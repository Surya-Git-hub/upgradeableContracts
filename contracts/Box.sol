// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

contract Box {
    uint public val;

    function initialize(uint _val) external {
        val = _val;
    }
}