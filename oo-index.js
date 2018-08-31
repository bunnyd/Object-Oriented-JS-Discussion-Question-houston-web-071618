const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')

class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
    const restartButton = document.getElementById('restart').addEventListener("click",()=> this.restart())
    const attackButton = document.getElementById('attack').addEventListener("click",()=> this.attack())
    const defendButton = document.getElementById('defend').addEventListener("click",()=> this.defend())
    const healButton = document.getElementById('heal').addEventListener("click",()=> this.heal())
    const breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> this.breakdance())
    const eatButton = document.getElementById('eat').addEventListener("click",()=> this.eatCronut())
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

  attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }
}
blah = new Unicorn("blah", "jay")
asd = new Unicorn("lol", "haha")
