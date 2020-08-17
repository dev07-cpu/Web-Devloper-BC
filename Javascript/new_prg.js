var origin=Math.floor((Math.random() * 10) + 1);
var number=prompt("Guess the number");
while (true)
{
    
    if (Number(number)==origin)
    {
        alert("You guessed it right.");
        break;
    }

    else if (Number(number)>origin)
    {
        alert("You guessed it high");
        var number=prompt("Guess the number");
        continue;
    }
    else if (Number(number)<origin)
    {
        alert("You guessed it low");
        var number=prompt("Guess the number");
        continue;
}
}