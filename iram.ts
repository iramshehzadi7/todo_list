import inquirer from "inquirer";
let todos:string[]=[];
let loop=true;
while (loop){
    const answers:{
        Todo:string,
        addmore:boolean,
    }=await inquirer. prompt([
            {
                type:"input",
                name:"ToDo",
                message:"what do you want to add in your todo?"
            },
            {
                type:"conform",
                name:"addmore",
                message:"Do you want to add more todo?"
            },
            {
                type:"conform",
                name:"addmore",
                message:"Do you want to add more todo?",
                default:"false"
            },
        ])
        const{Todo,addmore}=answers
        loop = addmore
        if(Todo){
            todos.push((Todo))
        }else{
            console.log("kindly add valid input");
        }
    }
    if(todos.length>0){
        console.log("Your todo list: \n")
        todos.forEach(todo =>{
            console.log(todo)

        });
    } else{   
        console.log("your Todos found");
    }    
    ;






    
