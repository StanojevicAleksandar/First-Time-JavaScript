let users = [
    {
        username: "Aleks",
        email: "a.stanojeviic@gmail.com",
        passwort: "1995",
        subscriptionStatus: "VIP",
        discordId: "Aleksism#1234",
        lessonsCompleted: [0, 1, 2, 3]
    }
]

function register(user) {
  
    users.push(user);

}

register({
    username: "Aleks",
    email: "a.stanojeviic@gmail.com",
    password:"1995",
    subscriptionStatus: "VIP",
    discordId: "Aleksism#1234",
    lessonsCompleted: "0,1,2,3"
});

console.log(users);