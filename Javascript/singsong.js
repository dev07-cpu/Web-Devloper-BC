function singsong(val){
    if((val = "one") || (val = "1"))
    {
        alert("Baa, baa black sheep Have you any wool \n Yes sir, yes sir three bags full. \n One for my master And one for my dame And one for the little boy who lives down the lane.");
        return;
    }
    if((val = "two") || (val = "2"))
    {
        alert("Hey diddle diddle, The cat and the fiddle, \n The cow jumped over the moon. The little dog laughed to see such sport, \n And the dish ran away with the spoon. \n");
        return;
    }
    if((val = "three") || (val = "3"))
    {
        alert("Humpty Dumpty sat on a wall, Humpty Dumpty had a great fall. \n All the King's horses and all the king's men, Couldn't put Humpty together again. \n");
        return;
    }
    if((val = "four") || (val = "4"))
    {
        alert("Rock a bye baby, on the tree top, When the wind blows the cradle will rock \n When the bough breaks the cradle will fall, \n And down will come baby, cradle and all.");
        return;
    }
    else{
        alert("Enter proper option for me to sing.");
        return;
    }
}

var val=prompt("Enter a value between 1 and 4");
while(true)
{
    singsong(val);
    break;

}