// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
// Buccaneers.js

$w.onReady(function () {
    // Set the page name dynamically
    $w('#pageName').text = "Buccaneers Statistics";

    // Call the master page script
    loadScript('path/to/masterPage.js');
});

function loadScript(url) {
    const script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script);
}
