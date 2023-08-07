/*
  BY: rewrite123
  Find me here: https://github.com/rewrite123
  October 4, 2019
  Notes:
    Here is a js test for people so they can see this in action
*/

/* Ok, ok, ok. So this looks weird, but it is to allow nodeJS and vanilla JS to be compatable for testing this file. */
/* nodeJS users define it as follows: const emoji = require("./emoJSi.js").emoji; */
if( (typeof emoji) == "undefined"){
  emoji = require("./emoJSi.js").emoji; //Spookie weird JS stuff going on here
}

/* These will return the same thing */
console.log(emoji(8));
console.log(emoji("squinting-bear"));

/* This will change them */
emoji(8, "This would be the new face in the array ;P");
console.log(emoji(8));
console.log(emoji("squinting-bear"));

/* And so will this */
emoji("squinting-bear", "This would be the new face in the object ;)");
console.log(emoji(8));
console.log(emoji("squinting-bear"));
