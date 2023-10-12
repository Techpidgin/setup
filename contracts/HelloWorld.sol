// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

contract HelloWorld{


   
   string public message;

   
   constructor(string memory initMessage) {

     
      message = initMessage;
   }

   
   function update(string memory newMessage) public {
      message = newMessage;
   }

   function getMessage() external view returns(string memory){ 
         return message;
   }
}
