const storyStages = {
    start: {
        text: "You find yourself in a dark forest. There are paths to the left and right.",
        choices: [
            { text: "Go left", consequence: "leftPath" },
            { text: "Go right", consequence: "rightPath" }
        ],
        image: "start.jpg"
    },
    leftPath: {
        text: "You encounter a wild animal. Do you fight or flee?",
        choices: [
            { text: "Fight", consequence: "fightAnimal" },
            { text: "Flee", consequence: "fleeAnimal" }
        ],
        image: "leftPath.jpg"
    },
    rightPath: {
        text: "You find a mysterious cave. Do you enter or walk past?",
        choices: [
            { text: "Enter", consequence: "enterCave" },
            { text: "Walk past", consequence: "walkPast" }
        ],
        image: "rightPath.jpg"
    },
    fightAnimal: {
        text: "You fought bravely but the animal was too strong. You died.",
        choices: [],
        image: "fightAnimal.jpg"
    },
    fleeAnimal: {
        text: "You successfully escaped the animal and found a river. Do you swim across or follow the river?",
        choices: [
            { text: "Swim across", consequence: "swimRiver" },
            { text: "Follow the river", consequence: "followRiver" }
        ],
        image: "fleeAnimal.jpg"
    },
    swimRiver: {
        text: "You swam across the river and found a village. You survived!",
        choices: [],
        image: "swimRiver.jpg"
    },
    followRiver: {
        text: "You followed the river and encountered a waterfall. You slipped and fell. You died.",
        choices: [],
        image: "followRiver.jpg"
    },
    enterCave: {
        text: "Inside the cave, you find a treasure chest. Do you open it or leave it?",
        choices: [
            { text: "Open it", consequence: "openChest" },
            { text: "Leave it", consequence: "leaveChest" }
        ],
        image: "enterCave.jpg"
    },
    openChest: {
        text: "You opened the chest and found a map. Do you follow the map or ignore it?",
        choices: [
            { text: "Follow the map", consequence: "followMap" },
            { text: "Ignore the map", consequence: "ignoreMap" }
        ],
        image: "openChest.jpg"
    },
    leaveChest: {
        text: "You left the chest and exited the cave. You survived!",
        choices: [],
        image: "leaveChest.jpg"
    },
    followMap: {
        text: "You followed the map and found a hidden treasure. You win!",
        choices: [],
        image: "followMap.jpg"
    },
    ignoreMap: {
        text: "You ignored the map and got lost in the cave. You died.",
        choices: [],
        image: "ignoreMap.jpg"
    },
    walkPast: {
        text: "You walked past the cave and encountered a band of robbers. Do you fight or negotiate?",
        choices: [
            { text: "Fight", consequence: "fightRobbers" },
            { text: "Negotiate", consequence: "negotiateRobbers" }
        ],
        image: "walkPast.jpg"
    },
    fightRobbers: {
        text: "You fought bravely but were outnumbered. You died.",
        choices: [],
        image: "fightRobbers.jpg"
    },
    negotiateRobbers: {
        text: "You successfully negotiated with the robbers and they let you go. You survived!",
        choices: [],
        image: "negotiateRobbers.jpg"
    }
};

let currentStage = 'start';
let history = [];

function startGame() {
    currentStage = 'start';
    history = [];
    updatePage();
}

function updatePage() {
    const stage = storyStages[currentStage];
    document.getElementById('story').textContent = stage.text;
    document.getElementById('story-image').src = stage.image;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    stage.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            history.push(currentStage);
            currentStage = choice.consequence;
            updatePage();
        };
        choicesContainer.appendChild(button);
    });

    document.getElementById('restart-button').style.display = 'block';
    document.getElementById('back-button').style.display = history.length > 0 ? 'block' : 'none';
}

function goBack() {
    if (history.length > 0) {
        currentStage = history.pop();
        updatePage();
    }
}

window.onload = startGame;
