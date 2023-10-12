require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomicfoundation/hardhat-toolbox");



module.exports = {
   solidity: "0.8.17",
   networks: {
     goerli: {
       url: `${process.env.ALCHEMY_GOERLI_URL}`,
       accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`],
     }
   }
 };