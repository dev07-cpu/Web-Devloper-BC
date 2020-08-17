alert("Hello");
var age=prompt("What is your age?");

if (age<0)
{
    console.log("error message");
}

else {
    console.log("It is perfect number.")
}
if (age==21)
{
    console.log("Happy 21st birthday");
}

else {
    console.log("It is not your 21st birthday.")
}
if (age%2!=0)
{
    console.log("Your age is odd.")
}

else {
    console.log("It is even number.")
}
if (Math.sqrt(age)-Math.floor(Math.sqrt(age))==0)
{
    console.log("Your age is perfect square.")
}
else {
    console.log("It is not perfect square.")
}