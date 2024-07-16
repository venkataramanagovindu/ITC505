const storyStages = {
    start: {
        text: "You find yourself in a dark forest. There are paths to the left and right.",
        choices: [
            { text: "Go left", consequence: "leftPath" },
            { text: "Go right", consequence: "rightPath" }
        ],
        image: "https://storage.googleapis.com/pod_public/1300/181437.jpg"
    },
    leftPath: {
        text: "You encounter a wild animal. Do you fight or flee?",
        choices: [
            { text: "Fight", consequence: "fightAnimal" },
            { text: "Flee", consequence: "fleeAnimal" }
        ],
        image: "https://m.media-amazon.com/images/I/611C0bN+qRL._AC_SL1024_.jpg"
    },
    rightPath: {
        text: "You find a mysterious cave. Do you enter or walk past?",
        choices: [
            { text: "Enter", consequence: "enterCave" },
            { text: "Walk past", consequence: "walkPast" }
        ],
        image: "https://ik.imagekit.io/storybird/images/fcbf24ed-2d30-4c03-8674-1b375a0e487c/0_64002201.png"
    },
    fightAnimal: {
        text: "You fought bravely but the animal was too strong. You died.",
        choices: [],
        image: "https://r2.erweima.ai/imgcompressed/compressed_333a4900f50f226484e7d80f0094b32c.webp"
    },
    fleeAnimal: {
        text: "You successfully escaped the animal and found a river. Do you swim across or follow the river?",
        choices: [
            { text: "Swim across", consequence: "swimRiver" },
            { text: "Follow the river", consequence: "followRiver" }
        ],
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/beautiful-river-in-forest-sandra-rugina.jpg"
    },
    swimRiver: {
        text: "You swam across the river and found a village. You survived!",
        choices: [],
        image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/a9fc51d1-b3fe-46a4-9496-9026f1393e12/080fa2f0-92f0-4a0f-83f5-7e568e35490c.png"
    },
    followRiver: {
        text: "You followed the river and encountered a waterfall. You slipped and fell. You died.",
        choices: [],
        image: "https://pics.craiyon.com/2023-10-12/6a1c58c08884466eabd3233b2c3a5348.webp"
    },
    enterCave: {
        text: "Inside the cave, you find a treasure chest. Do you open it or leave it?",
        choices: [
            { text: "Open it", consequence: "openChest" },
            { text: "Leave it", consequence: "leaveChest" }
        ],
        image: "https://pics.craiyon.com/2023-07-21/a0eb238e2d764b52908db5ebe9d61c55.webp"
    },
    openChest: {
        text: "You opened the chest and found a map. Do you follow the map or ignore it?",
        choices: [
            { text: "Follow the map", consequence: "followMap" },
            { text: "Ignore the map", consequence: "ignoreMap" }
        ],
        image: "https://www.sfcatholic.org/bishopsbulletin/wp-content/uploads/sites/3/2021/11/page-12-pic.jpg"
    },
    leaveChest: {
        text: "You left the chest and exited the cave. You survived!",
        choices: [],
        image: "https://images.nightcafe.studio/jobs/z5sfrPVTl8zqVOdFZ7gm/z5sfrPVTl8zqVOdFZ7gm--1--fkyjm.jpg?tr=w-1600,c-at_max"
    },
    followMap: {
        text: "You followed the map and found a hidden treasure. You win!",
        choices: [],
        image: "https://as1.ftcdn.net/v2/jpg/08/36/51/54/1000_F_836515415_IqdU82VmLjCGkco0WhE0OVWRpAsTWxb1.jpg"
    },
    ignoreMap: {
        text: "You ignored the map and got lost in the cave. You died.",
        choices: [],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ec/03/0e/lost-river-caverns.jpg?w=2000&h=-1&s=1"
    },
    walkPast: {
        text: "You walked past the cave and encountered a band of robbers. Do you fight or negotiate?",
        choices: [
            { text: "Fight", consequence: "fightRobbers" },
            { text: "Negotiate", consequence: "negotiateRobbers" }
        ],
        image: "https://devourfest.com/wp-content/uploads/2018/09/Cups-Robbers.jpeg"
    },
    fightRobbers: {
        text: "You fought bravely but were outnumbered. You died.",
        choices: [],
        image: "https://imgix.ranker.com/list_img_v2/14711/2814711/original/anime-characters-died-multiple-times"
    },
    negotiateRobbers: {
        text: "You successfully negotiated with the robbers and they let you go. You survived!",
        choices: [],
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/anime-boy-walking-city-streets-me.jpg"
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
    document.getElementById('back-button').style.display = (history.length > 0 && stage.choices.length > 0) ? 'block' : 'none';
}

function goBack() {
    if (history.length > 0) {
        currentStage = history.pop();
        updatePage();
    }
}

window.onload = startGame;
