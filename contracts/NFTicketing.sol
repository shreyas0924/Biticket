// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./Tickets.sol";

contract NFTicketing is tickets {
    using SafeMath for uint256;

    struct NFTicket {
        address owner;
        uint256 originalPrice;
        string ipfsHash;
    }

    mapping(uint256 => NFTicket) public nftickets;

    // Address of the minter and operator
    address public minter;
    address public operator;

    constructor() public {
        minter = msg.sender;
        operator = msg.sender;
    }

    function mintNFTicket(
        uint256 ticketId,
        uint256 originalPrice,
        string memory ipfsHash
    ) public returns (bool) {
        // Only the minter can mint a new ticket
        require(msg.sender == minter, "Only the minter can mint tickets");

        require(
            nftickets[ticketId].owner == address(0),
            "Ticket already minted"
        );

        nftickets[ticketId].owner = msg.sender;
        nftickets[ticketId].originalPrice = originalPrice;
        nftickets[ticketId].ipfsHash = ipfsHash;
        return true;
    }

    function transferNFTicket(
        uint256 ticketId,
        address to
    ) public payable returns (bool) {
        // Only the operator can transfer an existing ticket
        require(
            msg.sender == operator,
            "Only the operator can transfer tickets"
        );

        require(
            nftickets[ticketId].owner == msg.sender,
            "Sender is not the owner of the ticket"
        );
        require(
            msg.value <=
                nftickets[ticketId].originalPrice.mul(maxResalePrice).div(100),
            "Resale price exceeds maximum allowed price"
        );

        nftickets[ticketId].owner = to;
        return true;
    }
}
