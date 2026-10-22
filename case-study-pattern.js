
document.querySelectorAll(".case-study-decorated").forEach(main => {

    const pattern = main.querySelector(":scope > .case-study-pattern");
    const content = main.querySelector(":scope > .main-container");

    if (!pattern || !content) return;

    // Read the icons specified by this case study.
    const icons = (pattern.dataset.icons || "")
        .split(",")
        .map(icon => icon.trim())
        .filter(Boolean);

    if (icons.length === 0) return;

    // Create a predictable random number generator.
    function createRandom(seed) {
        return function () {
            seed = (
                Math.imul(1664525, seed) + 1013904223
            ) >>> 0;

            return seed / 4294967296;
        };
    }

    let previousHeight = -1;

    function generatePattern() {

        const height = Math.ceil(
            content.getBoundingClientRect().height
        );

        // Don't regenerate unless the page height changes.
        if (height === previousHeight) return;

        previousHeight = height;

        const random = createRandom(
            Number(pattern.dataset.seed) || 2026
        );

        const fragment = document.createDocumentFragment();

        ["left", "right"].forEach((side, index) => {

            // Start the two sides at different heights.
            let y = index === 0 ? 220 : 480;

            let previousIcon = null;

            while (y < height - 120) {

                const icon = document.createElement("span");

                // Randomly choose one of the available icons.
                // Exclude the previously selected icon.
                const availableIcons = icons.filter(
                    icon => icon !== previousIcon
                );

                // Randomly choose from the remaining icons.
                const selectedIcon = availableIcons[
                    Math.floor(random() * availableIcons.length)
                    ];

                // Remember the selected icon for the next iteration.
                previousIcon = selectedIcon;

                icon.className =
                    `case-study-pattern__icon pattern-${side} pattern-${selectedIcon}`;

                // Random size between 120px and 160px.
                const size = 120 + random() * 40;

                // Random rotation between -26 and +26 degrees.
                const rotation = -26 + random() * 52;

                icon.style.setProperty(
                    "--y", `${Math.round(y)}px`
                );

                icon.style.setProperty(
                    "--size", `${Math.round(size)}px`
                );

                icon.style.setProperty(
                    "--rotation", `${Math.round(rotation)}deg`
                );

                fragment.appendChild(icon);

                // Place the next icon further down.
                y += 520 + random() * 240;
            }
        });

        // Replace the previous pattern.
        pattern.replaceChildren(fragment);
    }

    generatePattern();

    // Regenerate when content height changes.
    const observer = new ResizeObserver(generatePattern);

    observer.observe(content);
});
