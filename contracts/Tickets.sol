// SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract tickets {
    using SafeMath for uint256;

    struct Ticket {
        address owner;
        uint256 originalPrice;
    }

    mapping(uint256 => Ticket) public tickets;
    uint256 public maxResalePrice;

    constructor() public {
        maxResalePrice = 100; // 100%
    }

    function mintTicket(
        uint256 ticketId,
        uint256 originalPrice
    ) public returns (bool) {
        require(tickets[ticketId].owner == address(0), "Ticket already minted");

        tickets[ticketId].owner = msg.sender;
        tickets[ticketId].originalPrice = originalPrice;
        return true;
    }

    function transferTicket(
        uint256 ticketId,
        address to
    ) public payable returns (bool) {
        require(
            tickets[ticketId].owner == msg.sender,
            "Sender is not the owner of the ticket"
        );
        require(
            msg.value <=
                tickets[ticketId].originalPrice.mul(maxResalePrice).div(100),
            "Resale price exceeds maximum allowed price"
        );

        tickets[ticketId].owner = to;
        return true;
    }
}
