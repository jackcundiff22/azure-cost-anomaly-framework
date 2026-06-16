
document.getElementById("callApiBtn").addEventListener("click", async () => {
    const result = document.getElementById("result");
 
    try {
        const response = await fetch("/api/cost-test");
        const data = await response.json();

        result.textContent = `API Response: ${data.message} at ${data.timestamp}`;

    } catch (error) {
        result.textContent = "API call failed.";
        console.error(error);
    }
});
