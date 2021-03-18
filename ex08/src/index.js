function getUsername(email) {
    var username = '';

    // Only change code below this line
    var usernames = {
        'user1@mail.com': 'user1',

        'user2@mail.com': 'user2',

        'user3@mail.com': 'user3',

        'user4@mail.com': 'user4',

        'user5@mail.com': 'user5',

        'user6@mail.com': 'user6'

    };

    username = usernames[email];
    // Only change code above this line
    return username;

}
console.log(getUsername("user2@mail.com")); // Change this line
module.exports = getUsername;