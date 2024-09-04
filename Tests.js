const {getAllUsersWhoInterestedInVideoGames,getAllUserByCountry,getAllUserWithMasterDegree,getDesignationByProgrammingLanguage} = require("./Solutions");

//Get all users who are interested in playing video games.
console.log(getAllUsersWhoInterestedInVideoGames());

//edge case
//1) reg exp that  match with case senstive


//Get all users staying in Germany.

console.log(getAllUserByCountry("Germany"));

//edge case
//1) if we did not pass the arg

console.log(getAllUserByCountry());

//2) if we did not give an vaild country

console.log(getAllUserByCountry("Germa"));


// Get all users with masters Degree.

console.log(getAllUserWithMasterDegree());

//edge case
//1) its should be match master , master's and master's degree

console.log(getAllUserWithMasterDegree());



// Get Group users based on their Programming language mentioned in their designation.

console.log(getDesignationByProgrammingLanguage());

//edge case
//1) if we have mutiple pesons with same programming lanuage so we can use array

console.log(getDesignationByProgrammingLanguage());


