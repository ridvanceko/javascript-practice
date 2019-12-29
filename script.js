// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("How old are you?");

if (Number(age) < 21) {
	alert("You are underage to drive.Power off!!");
} else if (Number(age) > 21) {
	alert("Start to drive");
} else if (Number(age) === 21) {
	alert("Good luck in your experience");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?
function checkDriverAge() {
  var age = prompt ("How old are you?");
  if (Number(age) < 21) {
    alert("You are underage to drive.Power off!!");
  } else if (Number(age) > 21 ) {
    alert("Start to drive");
  } else if (Number(age) === 21) {
    alert("Good luck in your experience");
  }
}


//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

var checkDriverAge2 = function() {
  var age = prompt("How old are you?");
  if (Number(age) < 21) {
    alert("You are underage to drive.Power off!!");
  } else if (Number(age) > 21) {
    alert("Start to drive");
  } else if (Number(age) === 21) {
    alert("Good luck in your experience");
  }
}






