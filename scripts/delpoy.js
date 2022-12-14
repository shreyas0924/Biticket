const ethers = require("ethers");

// Create a provider to connect to the Ethereum network
const provider = new ethers.providers.Web3Provider(window.ethereum);

<<<<<<< HEAD
// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
// import React from "react";
// import Ether from "ether.js";

// class MyApp extends React.Component {
//   // Initialize the Ether.js library and connect to the blockchain
//   async componentDidMount() {
//     this.web3 = new Ether.Web3(
//       new Ether.providers.Web3Provider(web3.currentProvider)
//     );
//     this.contract = new this.web3.eth.Contract(ABI, contractAddress);
//   }

//   // Handle the button click event and call the mintNft function
//   async handleClick() {
//     await this.contract.methods
//       .mintNft(tokenId, tokenMetadata)
//       .send({ from: account });
//   }

//   render() {
//     return <button onClick={this.handleClick}>mintNFTicket</button>;
//   }
// }
=======
// Get the contract address and ABI (interface) of the NFT contract
const contractAddress = "0x463c96a29f442c7fac48bc5b7d468f7b5dd37c94"; // Replace with the contract address
const contractABI = [
  [
    {
      inputs: [
        {
          internalType: "uint256",
          name: "ticketId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "originalPrice",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "ipfsHash",
          type: "string",
        },
      ],
      name: "mintNFTicket",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "ticketId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "originalPrice",
          type: "uint256",
        },
      ],
      name: "mintTicket",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "ticketId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "transferNFTicket",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "ticketId",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "transferTicket",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      inputs: [],
      name: "maxResalePrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "minter",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "nftickets",
      outputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "originalPrice",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "ipfsHash",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "operator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "tickets",
      outputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "originalPrice",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
];

// Create an instance of the contract using the provider and contract ABI
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Get the account that is currently connected to the provider
const signer = provider.getSigner();

// Define the function that will be called when the button is clicked
const onBuyButtonClick = async () => {
  // Mint a new NFT ticket by calling the contract's mintNFTicket function
  const tx = await contract.mintNFTicket(1, { from: signer });
  console.log(`Transaction hash: ${tx.hash}`);
};
>>>>>>> 8c3cdb4c1c3a1670bd746d3eefb93382a3182189
