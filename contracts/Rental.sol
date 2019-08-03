pragma solidity ^0.5.1;

import {RentLib} from "./RentLib.sol";

contract Rental {

   

     address payable owner;
 address payable rentee;



   modifier ownerOnly() {
    require(msg.sender == owner);
     _;
}


 //Number of Cars available for rent
    RentLib.Item[] public rentals;

     function getItemCount() public view returns(uint) {
        return rentals.length;
    }
    

    function addNewItem(string memory name, bool isAvailable, address rentee,address owner,string memory date,
    string memory faceId, string memory faceUrl, string memory itemUrl, bool repay, bool rent, unit256 priceInWei) public returns (uint) {
        
        //Current # of items
        uint count = getItemCount();
        //Increment Count
        //Construct Car Object
        
        RentLib.Item memory newItem = RentLib.Item(name,true,0x0,0x0,date, faceId, faceUrl, itemUrl, false, false, priceInWei);
        
        //Add to Array
        rentals.push(newItem);
        
         return count;
    }
}

    
// Getting the getters

  function getItemAvailability(uint _item) view public returns(bool) {
    return rentals[_item].isAvailable;
}

  function getPriceOfItem(uint _item) view public returns(uint256) {
    return rentals[_item].priceInWei;
}

function getCurrentOccupant(uint _item) view public returns(address) {
    return rentals[_item].rentee;
}

function 



// Getting the setters


// function setItemAvailability(uint8 _item, bool _newAvailability) ownerOnly public
// {
//     rentals[_item].isAvailable = _newAvailability;
//     if (_newAvailability) {
//       rentals storage itemToBeRented = rentals[_item]
//         itemToBeRented.rentee = msg.sender;

//     }
// }
 
// function setPriceOfFlat(uint8 _item, uint256 _priceInWei) ownerOnly public
// {
//     rentals[_item].priceInWei = _priceInWei; 

// }


function rentItem(uint8 _item) public payable returns(uint256) {
    rentals storage itemToBeRented = rentals[_item]

       itemToBeRented.rentee = msg.sender;
       itemToBeRented.rent = false;
       itemToBeRented.repay = true;
    if (msg.value % rentals[_item].priceInWei == 0 && msg.value > 0 && rentals[_item].isAvailable == true) {
        uint256 numberOfDaysPaid = msg.value / rentee[_item].priceInWei;
        rentals[_item].isAvailable = false;
        owner.transfer(msg.value);
        return numberOfDaysPaid;
    } else {
revert();
  return 0;
    }
}   

function returnItem(uint _item) public  returns (bool) {
        
        //Get Specific car
        rentals._item storage itemToReturn = rentals[_item];
        require(itemToReturn.owner == msg.sender);

        itemToReturn.rent = true;
        itemToReturn.repay = false;

        // msg.sender == itemToReturn.owner;
        //Make car available again
        itemToReturn.isAvailable = true;
        //Remove previous rentee
        itemToReturn.rentee = 0x0;
        
        //Return Success
        return true;
    }





    
      //Add new Item
    