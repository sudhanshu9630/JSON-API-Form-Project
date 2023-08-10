document.getElementById("jsonForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const jsonInput = document.getElementById("jsonInput").value;
    let parsedJson;

    try {
        parsedJson = JSON.parse(jsonInput);
    } catch (error) {
        document.getElementById("apiResponse").textContent = "Invalid JSON input.";
        return;
    }

    // You would need to replace this with your actual API request handling code
    // For this example, we'll just display the parsed JSON in the response area.
    document.getElementById("apiResponse").textContent = JSON.stringify(parsedJson, null, 2);
});
