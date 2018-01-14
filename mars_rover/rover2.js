//definition of the grid

var grid = [[],[]];

for (var i = -5; i < 6; i++) {
  for (var j = -5; j < 6; j++) {
    grid = [[i],[j]];
  }
}


/*var to define the Rover position and direction
conventions:
N - North (up) - forward
[x,y] - [horizontal,vertical]
*/

var myRover = {
  position: [0,0],
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case "N":
      rover.position[1]++;
      break;
    case "E":
      rover.position[0]++;
      break;
    case "S":
      rover.position[1]--;
      break;
    case "W":
      rover.position[0]--;
      break;
  }

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  switch(rover.direction) {
    case "N":
      rover.position[1]--;
      break;
    case "E":
      rover.position[0]--;
      break;
    case "S":
      rover.position[1]++;
      break;
    case "W":
      rover.position[0]++;
      break;
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("New Rover Direction: " + rover.direction);
}

function turnLeft(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
  }
  console.log("New Rover Direction: " + rover.direction);
}
console.log("Rover's Inicial Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
goForward(myRover);
goBack(myRover);


function userCommands(rover, commands) {
  for(var i = 0; i < commands.length; i++){
    var newCommands = commands[i];
    switch (newCommands) {
      case "f":
        goForward(rover);
        break;
      case "b":
        goBack(rover);
        break;
      case "l":
        turnLeft(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      default: console.log("Please insert a valid command");
    }
  }
}


if(Number(myRover.position[0]) < -5) {
  rover.position[0] = 5;
}

if(Number(myRover.position[1]) < -5) {
  rover.position[1] = 5;
}

if(Number(myRover.position[0]) > 5) {
  rover.position[0] = -5;
}
if(Number(myRover.position[1]) > 5) {
  rover.position[1] = -5;
}
