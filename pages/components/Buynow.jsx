// import Image from "next/image";

// const Buynow = () => {
//   return (
//     <div className="container flex gap-3 ml-auto mr-auto">
//       <div className="flex-col">
//         <Image
//           src="/silver.png"
//           width={400}
//           height={400}
//           className="mt-8 mr-auto ml-auto  border-2 border-black rounded-[20px]"
//         ></Image>
//         <button className="text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black">
//           Buy
//         </button>
//       </div>
//       <div>
//         <Image
//           src="/gold.png"
//           width={400}
//           height={400}
//           className="mt-8  ml-auto  border-2 border-black rounded-[20px]"
//         ></Image>
//         <button className="text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black">
//           Buy
//         </button>
//       </div>
//       <div className="flex-col">
//         <Image
//           src="/diamond.png"
//           width={400}
//           height={400}
//           className="mt-8  ml-auto  border-2 border-black rounded-[20px]"
//         ></Image>
//         <button className="text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black">
//           Buy
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Buynow;

import { useState } from "react";
import Image from "next/image";
import { ethers } from "ethers";
const Web3 = require("web3");

const Buynow = () => {
  const [showModal, setShowModal] = useState(false);

  const provider = new ethers.providers.Web3Provider(web3.currentProvider);
  const signer = provider.getSigner();
  setShowModal(false);
  const abi = [
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
  ];
  const contractAddress = "0x463c96a29f442c7fac48bc5b7d468f7b5dd37c94";
  const contract = new ethers.Contract(contractAddress, abi, signer);

  const handleBuy = async (ticketType) => {
    try {
      const originalPrice = 1; // set the original price of the ticket
      const ipfsHash =
        " ipfs://bafkreifhqib4poqqnjzgw5rmmad7gy3nfolmtt37swjeyp47hqg3wbsei4";

      const tx = await contract.mintNFTicket(
        ticketType,
        originalPrice,
        ipfsHash
      );
      await tx.wait();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container flex gap-3 ml-auto mr-auto">
      <div className="flex-col">
        <Image
          src="/silver.png"
          width={400}
          height={400}
          className="mt-8 mr-auto ml-auto  border-2 border-black rounded-[20px]"
        ></Image>
        <button onClick={() => handleBuy("silver")}>Buy</button>
      </div>
      <div>
        <Image
          src="/gold.png"
          width={400}
          height={400}
          className="mt-8  ml-auto  border-2 border-black rounded-[20px]"
        ></Image>
        <button className="text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black">
          Buy
        </button>
      </div>
      <div className="flex-col">
        <Image
          src="/diamond.png"
          width={400}
          height={400}
          className="mt-8  ml-auto  border-2 border-black rounded-[20px]"
        ></Image>
        <button className="text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black">
          Buy
        </button>
      </div>
    </div>
  );
};

export default Buynow;
