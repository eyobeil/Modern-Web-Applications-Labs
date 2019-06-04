const checkOutRecord = {
    "book":
{
    "title": 'DBMS',
    "ISBN": '12345677722',
    "author": 
        {
            "name": 'Edwin Steven',
            "address": '345 California street',
            "numPublishedBooked": 7
        }
    ,

   "checkOutInfo": {
    "student": 
        {
            "name": 'Eyobeil',
            "email": 'eyobiel@gmail.com',
            "ID": '109347',
            "checkoutDate": new Date(),
            "returnDate": new Date(Date.now() + 12096e5) // 14 days from now
        }
    ,
    "available": true
        }
 }       
};

module.exports = checkOutRecord;