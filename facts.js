/* =========================================
   THE SCIENCE BEHIND EVERYDAY THINGS
   AMAZING FACTS - JAVASCRIPT
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


/* ---------- PAGE INITIALIZATION ---------- */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================
       1. DARK AND LIGHT MODE
    ===================================== */

    const themeButton = document.getElementById("theme-toggle");

    // Restore saved theme
    const savedTheme = localStorage.getItem("science-facts-theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-theme");
    }

    function updateThemeButton() {

        const isDark = document.body.classList.contains("dark-theme");

        themeButton.textContent = isDark
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";

    }

    updateThemeButton();

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        const currentTheme = document.body.classList.contains("dark-theme")
            ? "dark"
            : "light";

        localStorage.setItem("science-facts-theme", currentTheme);

        updateThemeButton();

    });


    /* =====================================
       2. RANDOM FACT GENERATOR
    ===================================== */

    const randomButton = document.getElementById("random-btn");
    const randomIcon = document.getElementById("random-icon");
    const randomTitle = document.getElementById("random-fact-title");
    const randomText = document.getElementById("random-fact-text");
    const randomFactBox = document.querySelector(".random-fact-box");

    let previousFactIndex = -1;

    function showRandomFact() {

        let randomIndex;

        // Prevent the same fact from appearing twice in a row
        do {

            randomIndex = Math.floor(Math.random() * scienceFacts.length);

        } while (
            scienceFacts.length > 1 &&
            randomIndex === previousFactIndex
        );

        previousFactIndex = randomIndex;

        const selectedFact = scienceFacts[randomIndex];

        // Fade out
        randomFactBox.style.opacity = "0";
        randomFactBox.style.transform = "translateY(8px)";

        setTimeout(function () {

            randomIcon.textContent = selectedFact.icon;
            randomTitle.textContent = selectedFact.title;
            randomText.textContent = selectedFact.fact;

            // Fade in
            randomFactBox.style.opacity = "1";
            randomFactBox.style.transform = "translateY(0)";

        }, 180);

    }

    randomButton.addEventListener("click", showRandomFact);

    // Show a random fact when the page opens
    showRandomFact();


    /* =====================================
       3. SEARCH AND CATEGORY FILTERS
    ===================================== */

    const searchInput = document.getElementById("facts-search");

    const filterButtons = document.querySelectorAll(".filter-btn");

    const factCategories = document.querySelectorAll(".fact-category");

    const factCards = document.querySelectorAll(".fact-card");

    const categoryCards = document.querySelectorAll(".category-card");

    const resultCount = document.getElementById("facts-result-count");

    let activeFilter = "all";


    function filterFacts() {

        const searchValue = searchInput.value.toLowerCase().trim();

        let visibleCount = 0;

        // Filter individual fact cards
        factCategories.forEach(function (section) {

            const sectionMatches =
                activeFilter === "all" ||
                section.id === activeFilter;

            let visibleCards = 0;

            const cards = section.querySelectorAll(".fact-card");

            cards.forEach(function (card) {

                const cardText = card.textContent.toLowerCase();

                const matchesSearch = cardText.includes(searchValue);

                const shouldShow = sectionMatches && matchesSearch;

                card.classList.toggle("hidden", !shouldShow);

                if (shouldShow) {

                    visibleCards++;
                    visibleCount++;

                }

            });

            // Hide a complete section if it has no matching facts
            section.classList.toggle("hidden", visibleCards === 0);

        });


        // Filter category shortcut cards
        categoryCards.forEach(function (card) {

            const link = card.querySelector("a");

            const targetId = link.getAttribute("href").substring(1);

            const shouldShow =
                activeFilter === "all" ||
                targetId === activeFilter;

            card.classList.toggle("hidden", !shouldShow);

        });


        // Update result information
        if (visibleCount === 0) {

            resultCount.textContent =
                "No matching facts found. Try another search.";

        } else {

            resultCount.textContent =
                `Showing ${visibleCount} science fact${visibleCount === 1 ? "" : "s"}.`;

        }

    }


    // Search as the user types
    searchInput.addEventListener("input", filterFacts);


    // Category filter buttons
    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            activeFilter = button.dataset.filter;

            filterButtons.forEach(function (item) {

                item.classList.remove("active");

            });

            button.classList.add("active");

            filterFacts();

        });

    });


    /* =====================================
       4. BACK TO TOP BUTTON
    ===================================== */

    const topButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 350) {

            topButton.classList.add("visible");

        } else {

            topButton.classList.remove("visible");

        }

    });

    topButton.addEventListener("click", function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });


    /* =====================================
       5. SCROLL REVEAL ANIMATIONS
    ===================================== */

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.12

        });


        factCards.forEach(function (card) {

            observer.observe(card);

        });

    }

});