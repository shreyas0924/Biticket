import Image from 'next/image'
const web3 = require('web3')

const provider = new ethers.providers.Web3Provider(web3.currentProvider)
if (provider) {
  Buynow(provider); // Initialize your app
} else {
  console.log('Please install MetaMask!');
}

const { ethers } = require('ethers')

Create a contract instance

Set the MetaMask network ID
const networkId = 5 // This is the ID for the Goerli test network

Set the address of the account that will be used to mint the token
const account = '0x16CcbEcCF9F1156EDBBcbe6417E353e5c56'

Set the amount of tokens to mint
const amount = 0.1

const contractAbi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]
const contract = ethers.Contract(contractAbi, account)

Define the function that will be called when the button is clicked
const onButtonClick = async () => {
  // Connect to MetaMask
  await ethers.connect(networkId)

  // Get the current account from MetaMask
  const accounts = await ethers.accounts()
  const from = accounts[0]

  // Mint the new token
  const tx = await contract.mint(account, amount, { from })

  // Wait for the transaction to be mined
  await tx.wait()

  // Show a success message
  alert('Token minted successfully!')
}

function Buynow(provider) {
  
  const abi = [
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ticketId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'originalPrice',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'ipfsHash',
          type: 'string',
        },
      ],
      name: 'mintNFTicket',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ticketId',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'originalPrice',
          type: 'uint256',
        },
      ],
      name: 'mintTicket',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ticketId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'transferNFTicket',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'ticketId',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
      ],
      name: 'transferTicket',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'maxResalePrice',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'minter',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'nftickets',
      outputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'originalPrice',
          type: 'uint256',
        },
        {
          internalType: 'string',
          name: 'ipfsHash',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'operator',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      name: 'tickets',
      outputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'originalPrice',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ]
  const contractAddress = '0x463c96a29f442c7fac48bc5b7d468f7b5dd37c94'
  const contract = new ethers.Contract(contractAddress, abi, signer)

  const handleBuy = async (ticketType) => {
    try {
      const originalPrice = 1 // set the original price of the ticket
      const ipfsHash =
        ' ipfs://bafkreifhqib4poqqnjzgw5rmmad7gy3nfolmtt37swjeyp47hqg3wbsei4'

      const tx = await contract.mintNFTicket(
        ticketType,
        originalPrice,
        ipfsHash
      )
      await tx.wait()
    } catch (err) {
      console.log(err)
    }

    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!')
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    const account = accounts[0]
  }

  return (
    <div className='container flex gap-3 ml-auto mr-auto'>
      <div className='flex-col'>
        <Image
          src='/silver.png'
          width={400}
          height={400}
          className='mt-8 mr-auto ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button
          onClick={() => handleBuy}
          className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'
        >
          Buy
        </button>
      </div>
      <div>
        <Image
          src='/gold.png'
          width={400}
          height={400}
          className='mt-8  ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'>
          Buy
        </button>
      </div>
      <div className='flex-col'>
        <Image
          src='/diamond.png'
          width={400}
          height={400}
          className='mt-8  ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Buynow
