var tasks=[];

function addNewTask()
{
    var task=prompt("What is the task you wish to add to your to-do-list?");
    tasks.push(task);
    return tasks;
}

function quitApp()
{
    console.log("Thank you for using our app.")
}

function removeTask()
{
    var tasksToRmv=prompt("What is the task you wish to remove?");
    const index = tasks.indexOf(tasksToRmv);
    if (index > -1)
    {
        tasks.splice(index,1);
        return tasks;
    }

}

window.setTimeout(function() {
    

while(true)
{
    var userEntry=prompt("What do you want to do?");

    if(userEntry=="new")
    {
        addNewTask();
        continue;
    }
    else if (userEntry=="list")
    {
        tasks.forEach(function(ding){
            
            console.log(ding);
        });
    }
    else if (userEntry=="quit")
    {
        quitApp();
        break;
        
    }
    else if (userEntry=='remove')
    {
        removeTask();
        continue;
    }
    else
    {
        console.log("Enter valid choice.");
        continue;
    }

}
   
  }, 500);