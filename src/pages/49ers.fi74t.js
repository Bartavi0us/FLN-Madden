// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code
});
// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Write your JavaScript here

    // To select an element by ID use: $w('#elementID')

    // Click 'Preview' to run your code

    // Sample statistical leaders data for the 49ers team
    const statisticalLeaders = {
        passingLeader: { name: "Player A", yards: 3500, touchdowns: 25 },
        rushingLeader: { name: "Player B", yards: 1200, touchdowns: 10 },
        receivingLeader: { name: "Player C", yards: 1000, touchdowns: 8 },
        defensiveLeader: { name: "Player D", tackles: 85, interceptions: 5 }
    };

    // Function to display the statistical leaders
    function displayStatisticalLeaders(leaders) {
        let html = '<h2>49ers Statistical Leaders</h2><ul>';
        html += `<li>Passing Leader: ${leaders.passingLeader.name} - Yards: ${leaders.passingLeader.yards}, Touchdowns: ${leaders.passingLeader.touchdowns}</li>`;
        html += `<li>Rushing Leader: ${leaders.rushingLeader.name} - Yards: ${leaders.rushingLeader.yards}, Touchdowns: ${leaders.rushingLeader.touchdowns}</li>`;
        html += `<li>Receiving Leader: ${leaders.receivingLeader.name} - Yards: ${leaders.receivingLeader.yards}, Touchdowns: ${leaders.receivingLeader.touchdowns}</li>`;
        html += `<li>Defensive Leader: ${leaders.defensiveLeader.name} - Tackles: ${leaders.defensiveLeader.tackles}, Interceptions: ${leaders.defensiveLeader.interceptions}</li>`;
        html += '</ul>';
        
        $w('#roster').html = html;
    }

    // Call the function to display the leaders
    displayStatisticalLeaders(statisticalLeaders);
});// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world

$w.onReady(function () {
    // Sample statistical leaders data for the 49ers team
    const statisticalLeaders = {
        passingLeader: { name: "Player A", yards: 3500, touchdowns: 25 },
        rushingLeader: { name: "Player B", yards: 1200, touchdowns: 10 },
        receivingLeader: { name: "Player C", yards: 1000, touchdowns: 8 },
        defensiveLeader: { name: "Player D", tackles: 85, interceptions: 5 }
    };

    // Function to display the statistical leaders in a table
    function displayStatisticalLeadersTable(leaders) {
        let tableHtml = `
            <h2>49ers Statistical Leaders</h2>
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

    // Call the function to display the leaders in a table
    displayStatisticalLeadersTable(statisticalLeaders);
});
