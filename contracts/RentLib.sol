pragma solidity ^0.5.1;

library RentLib {
    //This library contains helps create Item Objects for Rental Contracts
    struct Item {
        string name; // name of product
        bool isAvailable;  // if true, this car can be rented out
        address rentee; // person delegated to
        address owner; //Owner of Car
        string  date;   // date of item put to rent
        string faceId; // string of azure face id
        string  faceUrl; // face image url cloudinary
        string  itemUrl; // item image url cloudinary
        uint itemId; // index of item to be rented 
    }
}
