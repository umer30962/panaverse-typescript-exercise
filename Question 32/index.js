"use strict";
/* Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
let current_users = ['John', 'Ali', 'Ikram', 'Doe', 'Ahmed'];
let new_users = ['Peter', 'Jane', 'john', 'Ikram', 'Tom'];
new_users.forEach((user) => {
    let lower_case = user.toLowerCase();
    let upper_case = user.toUpperCase();
    // some will loop through the array and return true value if the username is matched.
    const username = current_users.some(name => name == user || name.toLowerCase() == lower_case || name.toUpperCase() == upper_case);
    if (username) {
        console.log(user + ' username already exists');
    }
    else {
        console.log(user + ' username avaiable');
    }
});
