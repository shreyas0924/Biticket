// A Web3Provider wraps a standard Web3 provider, which is
// what MetaMask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum);

// MetaMask requires requesting permission to connect users accounts
await provider.send("eth_requestAccounts", []);

// The MetaMask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
import React from "react";
import Ether from "ether.js";

class MyApp extends React.Component {
  // Initialize the Ether.js library and connect to the blockchain
  async componentDidMount() {
    this.web3 = new Ether.Web3(
      new Ether.providers.Web3Provider(web3.currentProvider)
    );
    this.contract = new this.web3.eth.Contract(ABI, contractAddress);
  }

  // Handle the button click event and call the mintNft function
  async handleClick() {
    await this.contract.methods
      .mintNft(tokenId, tokenMetadata)
      .send({ from: account });
  }

  render() {
    return <button onClick={this.handleClick}>mintNFTicket</button>;
  }
}
