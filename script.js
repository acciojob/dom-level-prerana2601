//your JS code here. If required.
// JavaScript code to calculate DOM level of an element with the id "level"

window.onload = function() {
    // Find the element with the id 'level'
    const targetElement = document.getElementById('level');

    // Initialize the level counter
    let level = 0;

    // Traverse the DOM upwards until we reach the root html element
    let currentElement = targetElement;
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    // Show the level of the element
    alert(`The level of the element is: ${level}`);
}
