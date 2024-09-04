const {users} = require("./Users"); // data is object of object


const Users = Object.entries(users); // we modify into key value array to easy access

//All users who are interested in playing video games.


function getAllUsersWhoInterestedInVideoGames(){

    let videoGames = [];
    let regExp = /Video Games/i; // i means we can check with case senstive
    for(let i=0;i<Users.length;i++){
        let object = Users[i][1];  // here we are checking reg Exp if match with that we push the user name
        if(object.interests.some(interest => regExp.test(interest))){
            videoGames.push(Users[i][0]);
        }
    }
   return videoGames;

}


//  All users staying in Germany.

function getAllUserByCountry(Country){
    if(Country===undefined|| Country===null){
        return "Enter vaild Couontry";
    }
    let Germany = [];
    for(let i=0;i<Users.length;i++){
        let data = Users[i][1];
        if(data.nationality===Country){ // checking nantionality match with country
            Germany.push(Users[i][0]);
        }
    }
    return Germany.length>0?Germany:"Country Not Found";
}


// All users with masters Degree.

function getAllUserWithMasterDegree(){
    let masterDegree = [];
    let regExp = /\bmaster('?s)?( degree)?\b/i; // here we are primary check with master its also check master's degree
    for(let i=0;i<Users.length;i++){
        let data = Users[i][1];
        if(regExp.test(data.qualification)){
            masterDegree.push(Users[i][0]);
        }
    }
    return masterDegree;
}


// Group users based on their Programming language mentioned in their designation.

function getDesignationByProgrammingLanguage(){
    let groupUsers = {};
    for(let i=0;i<Users.length;i++){
        let data = Users[i][1];
        if(!groupUsers.hasOwnProperty(data.desgination)){ // here we are check the property is execited or not

            groupUsers[data.desgination]=[];  // if not created an array
        }
        groupUsers[data.desgination].push(Users[i][0]); // pushing to that array


    }
    return groupUsers;
}
//exporting all function
module.exports = {getAllUsersWhoInterestedInVideoGames,getAllUserByCountry,getAllUserWithMasterDegree,getDesignationByProgrammingLanguage};