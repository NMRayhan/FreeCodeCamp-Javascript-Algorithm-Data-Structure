/*
Finish writing the function so that it returns true if the object passed to it contains all four names, Alan, Jeff, Sarah and Ryan and returns false otherwise.
*/

let users = {
    Alan: {
        age: 27,
        online: true
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: true
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function isEveryoneHere(userObj) {
    if (userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Alan')) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEveryoneHere(users));