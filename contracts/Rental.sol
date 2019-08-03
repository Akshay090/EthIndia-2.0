pragma solidity ^0.5.1;

import {RentLib} from "./RentLib.sol";

contract Rental {
 
 //Number of Cars available for rent
    RentLib.Item[] public rentals;   
    
    //Return Total Number of Items
    function getItemCount() public view returns(uint) {
        return rentals.length;
    }
    
      //Add new Item
    function addNewItem(string memory name, bool isAvailable, address rentee,address owner,string memory date,
    string memory faceId, string memory faceUrl, string memory itemUrl) public returns (uint) {
        
        //Current # of items
        uint count = getItemCount();
        //Increment Count
        //Construct Car Object
        
        RentLib.Item memory newItem = RentLib.Item(name,true,0x0,0x0,date, faceId, faceUrl, itemUrl, count);
        
        //Add to Array
        rentals.push(newItem);
        
         return count;
    }
}