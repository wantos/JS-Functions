var entries = prompt ("Please enter a number");
// var num = prompt ("Please enter a number:");



function Game(entries) {
   // var entry = prompt ("Please enter number of trials");
i =Math.floor(Math.random()*100)+ 1;
//generate number between 1 and 100

var num = i%2;//gets the modulus and stores the result in j
if (i==0)//checks to see if modulus is equal to zero
	console.log(" is even");//if var i is equal to an even number like 2/4
else
	console.log(" Odd");//this outputs an odd number if its not even 


 for(count=1;count<=10;count++) 
 {
 	let num = prompt("please enter a number now:");
 
 if (num>1)
 	alert("Number is higher, make another guess");
 else if (num<1)
 	alert("Number is Lower,try again");
 else if (num==1)
 	alert("Great you win")
else
	alert("Sorry You lose")
   }
}
Game(entries);
