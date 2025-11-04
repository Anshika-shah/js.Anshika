const accountID = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = 'Jaipur'
let accountState;

/* prefer not to use var bcz of issue block scope and functional scope
*/

//accountID = 254311
accountEmail = "abcd@hotmail.com"
accountPassword = "54321"
accountCity = 'Delhi'
//console.log(accountID);
console.log([accountID, accountEmail, accountPassword, accountCity]);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

