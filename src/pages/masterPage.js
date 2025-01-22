// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
const teamColors = {
    49ers: { primary: "#AA0000", secondary: "#B3995D" }, // Add other teams' colors here
    // Add other teams' colors here
};

const allStatisticalLeaders = {
    49ers: {
        passingLeader: { name: "Player A", yards: 3500, touchdowns: 25 },
        rushingLeader: { name: "Player B", yards: 1200, touchdowns: 10 },
        receivingLeader: { name: "Player C", yards: 1000, touchdowns: 8 },
        defensiveLeader: { name: "Player D", tackles: 85, interceptions: 5 }
    },
    // Add other teams' data here
};

function displayStatisticalLeadersTable(team) {
    const leaders = allStatisticalLeaders[team];
    const colors = teamColors[team];

    let tableHtml = `
        <h2 style="color: ${colors.primary};">${team} Statistical Leaders</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Yards</th>
                    <th>Touchdowns</th>
                    <th>Tackles</th>
                    <th>Interceptions</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Passing Leader</td>
                    <td>${leaders.passingLeader.name}</td>
                    <td>${leaders.passingLeader.yards}</td>
                    <td>${leaders.passingLeader.touchdowns}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Rushing Leader</td>
                    <td>${leaders.rushingLeader.name}</td>
                    <td>${leaders.rushingLeader.yards}</td>
                    <td>${leaders.rushingLeader.touchdowns}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Receiving Leader</td>
                    <td>${leaders.receivingLeader.name}</td>
                    <td>${leaders.receivingLeader.yards}</td>
                    <td>${leaders.receivingLeader.touchdowns}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Defensive Leader</td>
                    <td>${leaders.defensiveLeader.name}</td>
                    <td></td>
                    <td></td>
                    <td>${leaders.defensiveLeader.tackles}</td>
                    <td>${leaders.defensiveLeader.interceptions}</td>
                </tr>
            </tbody>
        </table>
    `;
            
    $w('#roster').html = tableHtml;
}

// Example usage for dynamically setting the team based on the page
$w.onReady(function () {
    const pageName = $w('#pageName').text; // Assumes there's an element with the page name
    const team = pageName.split(' ')[0]; // Extract the team name from the page name
    displayStatisticalLeadersTable(team);
});
