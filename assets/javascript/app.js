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
const rockImg = '<i id="rock" class="choice far fa-hand-rock fa-3x" value="rock"></i>';
const paperImg = '<i id="paper" class="choice far fa-hand-paper fa-3x" value="paper"></i>';
const scissorImg = '<i id="scissors" class="choice far fa-hand-scissors fa-3x" value="scissors"></i>';

const dataref = firebase.database().ref();


// players
let player1 = {
    name: "",
    wins: 0,
    losses: 0,
    choice: "",
    online: false,
}

let player2 = {
    name: '',
    wins: 0,
    losses: 0,
    choice: "",
    online: false,
}


// called when page loads
$(document).ready(function(){

    // wont allow more than 2 players at a time
    if (player1.online && player2.online){
        $("#gameBox").html(
            '<p>Sorry, please try again later. 2 people are currently playing.</p>'
        );
    }

    else {
        username();
        gamePlay();
    }
});


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
    dataref.set({
        player1
    });
    
    user1stats();

}


function user1stats(){
    // push player1 data to html
    $("#gameBox").html(`
    <h3 id="gameHead">Waiting on another Player...</h3>
    <div id="player1Div">
        <h2 id="player1name">${player1.name}</h2>
        <h2 id="player1wins">Wins: ${player1.wins}</h2>
        <h2 id="player1losses">Losses: ${player1.losses}</h2>
    </div>
    <div id="player1choice">
        ${rockImg}
        ${paperImg}
        ${scissorImg}
    </div>
    <div id="choices"></div>
    `);
}


function secondUser(){
    player2.name = $("#name-input").val().trim();
    player2.online = true;
    dataref.set({
        player2
    });

    $("#gameHead").html(`${player2.name} is online!`);

    user2stats();
    
}


function user2stats(){
    $("#gameBox").append(`
    <div id="player2Div">
        <h2 id="player2name">${player2.name}</h2>
        <h2 id="player2wins">${player2.wins}</h2>
        <h2 id="player2losses">${player2.losses}</h2>
    </div>
    <div id="player2choice">
        ${rockImg}
        ${paperImg}
        ${scissorImg}
    </div>
    `);
}


function gamePlay() {
    if (player1.online && player2.online){
        gamePlay()
    }
    else{}
}


function game(){
    $("#").on("click", ".choice", function(){
        // ======= how do i know which user clicks which button?
        player1.choice = this.val();

        if (player1.choice === "rock" && player2.choice === "scissors" ||
            player1.choice === "paper" && player2.choice === "rock" ||
            player1.choice === "scissors" && player2.choice === "paper"){
                player1.wins ++;
                player2.losses--;
                // ======== push all data from results to firebase and rewrite the data from database to html
            }
        else {
            player1.losses--;
            player2.wins++;
            // ========= push all data from results to firebase and rewrite the data from database to html
        }

        // reset player choices for next game
        player1.choice = "";
        player2.choice = "";

    })
}

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
