const { CrossTalk } = require("@routerprotocol/crosstalk-js");
const crosstalk = new CrossTalk({
  wallet: new ethers.Wallet("PRIVATE_KEY", provider),
  srcChainId: 137, //P
  dstChainId: 42, //S
  srcTokenAddress: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", //POLYGON
  dstTokenAddress: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", //SOLANA
});
const quote = await crosstalk.getQuote(
  ethers.utils.parseUnits("10.0", 6).toString(),
  "YOUR_WALLET_ADDRESS",
  "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4"
);
const tx = await crosstalk.swap(quote);
console.log(`Transaction successfully completed. Tx hash: ${tx.hash}`);
const receipt = await tx.wait();
console.log(`Transaction was mined in block ${receipt.blockNumber}`);
