// firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKQMMHnVfYPlDloWmnIz3pkZ92kto5wXc",
    authDomain: "homework7-c378a.firebaseapp.com",
    databaseURL: "https://homework7-c378a.firebaseio.com",
    projectId: "homework7-c378a",
    storageBucket: "",
    messagingSenderId: "922398007496",
    appId: "1:922398007496:web:ba3cdcced86a61a1f2c5fd"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// global variables 
const rockImg = '<i id="rock" class="far fa-hand-rock fa-5x"></i>';
const paperImg = '<i id="paper" class="far fa-hand-paper fa-5x"></i>';
const scissorImg = '<i id="scissors" class="far fa-hand-scissors fa-5x"></i>';

const dataref = firebase.database().ref();


// players
let player1 = {
    name: "",
    wins: 0,
    losses: 0,
    online: false,
}

let player2 = {
    name: '',
    wins: 0,
    losses: 0,
    online: false,
}


// display form to select username at start of session
function username(){
    $("#gameBox").html(`
        <form role="form">
            <label for="name-input">Screen Name:</label>
            <input class="form-control" id="name-input" type="text">
            <button class="btn btn-default" id="add-user" type="submit">Submit</button>
        </form>
    `);
}


// called when page loads
$(document).ready(username());


// after name is submitted - name added to correct variable and database
$(document).on("click", "#add-user", function(event){

    // stops page reloading
    event.preventDefault();

    // establishes each player
    if (player1.online === false) {
        firstUser();
    }
    else {
        secondUser();
    }

});


function firstUser() {

    // push player1 data to firebase
    player1.name = $("#name-input").val().trim();
    player1.online = true;
    dataref.push({
        name: player1.name,
        wins: player1.wins,
        losses: player1.losses,
        online: player1.online,
        date: firebase.database.ServerValue.TIMESTAMP
    });
}
    

dataref.orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    // push player1 data to html
    $("#gameBox").html(`
    <h3 id="gameHead">Waiting on another Player...</h3>
    <div id="player1Div">
        <h2 id="player1name">${snapshot.val().name}</h2>
        <h2 id="player1wins">Wins: ${snapshot.val().wins}</h2>
        <h2 id="player1losses">Losses: ${snapshot.val().losses}</h2>
    </div>
    `);
});


function secondUser(){
    player2.name = $("#name-input").val().trim();
    player2.online = true;
    dataref.push({
        name: player2.name,
        wins: player2.wins,
        losses: player2.losses,
        online: player2.online,
        date: firebase.database.ServerValue.TIMESTAMP
    });

    $("#gameHead").html(`${player2.name} is online!`);

    $("#gameBox").append(`
    <div id="player2Div">
        <h2 id="player2name">${player2.name}</h2>
        <h2 id="player2wins">${player2.wins}</h2>
        <h2 id="player2losses">${player2.losses}</h2>
    </div>
    `);
    
}


// - once someone lands on the page - 
    // choose a username
    // notified in the chat box that they are now online and ready to play
    // will see notification when someone else is online
    // when 2 are online, ability to create username halts


// - once two players are online -
    // - each player can now click on rock paper or scissor
        // - each choice is sent to firebase
        // - once both have chosen, firebase sends both choices to the game() func to determine who won and prints the results
        // - after game() returns winner/loser - 
            // - gameReset() is automatically called to prepare for the next game
            // - display "choose r/p/s only while users choice is unselected"

// - Win/Losses
    // - anytime the game ends, wins losses for each player will be updated

//  - players can chat while playing the game
    // recieve a message form player to firebase
    // on child added to firebase from certain player, print that out on the chat under players name. 
    // new chats should append to the bottom and not change the height of text box.
    // add ability to scroll to top of chat

// -  BONUS - 
    // set up button for single player to play against a computer
