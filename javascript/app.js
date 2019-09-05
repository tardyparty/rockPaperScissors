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
const rockImg = '<i class="far fa-hand-rock"></i>';
const paperImg = '<i class="far fa-hand-paper"></i>';
const scissorImg = '<i class="far fa-hand-scissors"></i>';

// players
let player1 = '';
let player2 = '';

// - only two players online at the same time
    // player picks a username
    // player is online

// -when only two players are online
    // - players picks rock, paper, scissors. 
    //  - after selection, game shows the outcome of the game

// - game tracks each players wins / losses

//  - players can chat while playing the game
