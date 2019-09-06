// firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAcW6zFp8AyaRrHvPm3VJxfk1cSBbkguxQ",
    authDomain: "rockpaperscissors-f19ad.firebaseapp.com",
    databaseURL: "https://rockpaperscissors-f19ad.firebaseio.com",
    projectId: "rockpaperscissors-f19ad",
    storageBucket: "",
    messagingSenderId: "1004885032983",
    appId: "1:1004885032983:web:793cb07b9220d794ba9c52"
  };

  firebase.initializeApp(firebaseConfig);


// global variables 
const rockImg = '<i id="rock" class="far fa-hand-rock"></i>';
const paperImg = '<i id="paper" class="far fa-hand-paper"></i>';
const scissorImg = '<i id="scissors" class="far fa-hand-scissors"></i>';

const ref = firebase.database().ref('/');

// players
let player1 = '';
let player2 = '';


function username(){
    $("#gameBox").prepend(`
        <form>
            <label id="username">Choose your name</label>
            <input type="text">
        </form>
    `);
}

username();


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
