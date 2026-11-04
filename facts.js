/* =========================================
   THE SCIENCE BEHIND EVERYDAY THINGS
   AMAZING SCIENCE FACTS - JAVASCRIPT
========================================= */


/* ---------- RANDOM SCIENCE FACTS ---------- */

const scienceFacts = [

    {
        icon: "🐙",
        title: "Octopuses Have Three Hearts!",
        fact: "Two hearts pump blood to the gills, while the third pumps blood to the rest of the body."
    },

    {
        icon: "☀️",
        title: "The Sun Is Enormous!",
        fact: "Approximately 1.3 million Earths could fit inside the Sun by volume."
    },

    {
        icon: "🪐",
        title: "Saturn Is Less Dense Than Water!",
        fact: "Saturn's average density is lower than water. If there were an ocean large enough, Saturn would float."
    },

    {
        icon: "🌙",
        title: "The Moon Is Moving Away From Earth!",
        fact: "The Moon moves away from Earth at an average rate of approximately 3.8 centimetres per year."
    },

    {
        icon: "🧠",
        title: "Your Brain Has Billions of Neurons!",
        fact: "The human brain contains approximately 86 billion neurons that communicate with each other."
    },

    {
        icon: "❤️",
        title: "Your Heart Works Continuously!",
        fact: "Your heart pumps blood throughout your body, delivering oxygen and nutrients to different organs."
    },

    {
        icon: "💡",
        title: "Light Travels Extremely Fast!",
        fact: "Light travels through a vacuum at approximately 300,000 kilometres per second."
    },

    {
        icon: "🌈",
        title: "White Light Contains Many Colours!",
        fact: "A prism can separate white light into the colours of the visible spectrum."
    },

    {
        icon: "🌌",
        title: "Space Is Almost Silent!",
        fact: "Sound cannot travel through the vacuum of space because it needs a material medium."
    },

    {
        icon: "🐝",
        title: "Bees Communicate Through Dance!",
        fact: "Honeybees perform a special waggle dance to communicate the location of food to other bees."
    },

    {
        icon: "🌱",
        title: "Plants Make Their Own Food!",
        fact: "Plants use sunlight, water and carbon dioxide to produce glucose through photosynthesis."
    },

    {
        icon: "🦴",
        title: "Adults Have 206 Bones!",
        fact: "A typical adult human skeleton contains 206 bones, although babies are born with more."
    },

    {
        icon: "⚡",
        title: "Lightning Is Extremely Hot!",
        fact: "The air in a lightning channel can reach temperatures of around 30,000 kelvin."
    },

    {
        icon: "🧊",
        title: "Ice Floats on Water!",
        fact: "Ice is less dense than liquid water, which is why it floats on the surface."
    },

    {
        icon: "🦋",
        title: "Butterflies Taste With Their Feet!",
        fact: "Butterflies have taste receptors on their feet that help them identify suitable plants."
    },

    {
        icon: "🌍",
        title: "Earth Is Not a Perfect Sphere!",
        fact: "Earth is slightly flattened at the poles and bulges around the equator."
    },

    {
        icon: "🐬",
        title: "Dolphins Use Sound to Navigate!",
        fact: "Dolphins use echolocation, sending out sounds and listening to returning echoes to locate objects."
    },

    {
        icon: "🧲",
        title: "Magnets Have Two Poles!",
        fact: "Ordinary magnets have a north pole and a south pole. Like poles repel, while opposite poles attract."
    },

    {
        icon: "🌳",
        title: "Trees Help Clean the Air!",
        fact: "During photosynthesis, trees absorb carbon dioxide and release oxygen."
    },

    {
        icon: "🦒",
        title: "Giraffes Have Seven Neck Vertebrae!",
        fact: "Just like humans, giraffes usually have seven neck vertebrae, but each one is much longer."
    },

    {
        icon: "🌊",
        title: "Water Covers Most of Earth!",
        fact: "Approximately 71% of Earth's surface is covered by water."
    },

    {
        icon: "🔊",
        title: "Sound Travels Faster in Water!",
        fact: "Sound generally travels faster through water than through air because of differences in their physical properties."
    },

    {
        icon: "🪐",
        title: "A Day on Venus Is Very Long!",
        fact: "Venus takes about 243 Earth days to rotate once on its axis, longer than its approximately 225-day year."
    },

    {
        icon: "🧬",
        title: "DNA Stores Genetic Information!",
        fact: "DNA carries the genetic instructions used in the growth, development and functioning of living organisms."
    },

    {
        icon: "🦈",
        title: "Sharks Have Been Around for Millions of Years!",
        fact: "Shark ancestors existed hundreds of millions of years ago, long before the first dinosaurs."
    }

];


/* ---------- SELECT HTML ELEMENTS ---------- */

const randomButton = document.getElementById("random-btn");

const randomIcon = document.getElementById("random-icon");

const randomTitle = document.getElementById("random-fact-title");

const randomText = document.getElementById("random-fact-text");

const randomFactBox = document.querySelector(".random-fact-box");


/* ---------- RANDOM FACT GENERATOR ---------- */

let previousFactIndex = -1;


function showRandomFact() {

    // Check that all required elements exist
    if (!randomButton || !randomIcon || !randomTitle ||
        !randomText || !randomFactBox) {
        return;
    }

    let randomIndex;

    // Avoid showing the same fact twice in a row
    do {
        randomIndex = Math.floor(Math.random() * scienceFacts.length);
    }
    while (
        scienceFacts.length > 1 &&
        randomIndex === previousFactIndex
    );

    previousFactIndex = randomIndex;

    // Get the selected fact
    const selectedFact = scienceFacts[randomIndex];

    // Start fade-out animation
    randomFactBox.style.opacity = "0";
    randomFactBox.style.transform = "translateY(8px)";

    // Update the fact after a short delay
    setTimeout(function () {

        randomIcon.textContent = selectedFact.icon;

        randomTitle.textContent = selectedFact.title;

        randomText.textContent = selectedFact.fact;

        // Bring the fact back with a smooth animation
        randomFactBox.style.opacity = "1";
        randomFactBox.style.transform = "translateY(0)";

    }, 180);

}


/* ---------- BUTTON EVENT ---------- */

if (randomButton) {

    randomButton.addEventListener("click", showRandomFact);

}


/* ---------- INITIAL PAGE SETUP ---------- */

document.addEventListener("DOMContentLoaded", function () {

    // Ensure the random fact generator starts correctly
    if (randomButton) {

        randomButton.setAttribute(
            "aria-label",
            "Show another random science fact"
        );

    }

});