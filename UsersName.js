// 1: Write code to get an array of names from given array of users
const users = [
{id: 1, name: 'Jack', isActive: true},
{id: 2, name: 'John', isActive: true},
{id: 3, name: 'Mike', isActive: false},
]

// Using For Loop
// const names =[];
// for(let i =0 ; i < users.length ;i++){
//     names.push(users[i].name);
// }
// console.log(names);


// Using ForEach 
// const names=[];
// users.forEach((user)=>{
//     names.push(user.name);
// })
// console.log(names);
 
// Using Map
// const names = users.map((user)=>{
//     return user.name;
// });

// console.log(names);



//2. Get back only active users

const activeUsers =  users.filter((user)=> user.isActive).map((user)=> user.name);
console.log(activeUsers);