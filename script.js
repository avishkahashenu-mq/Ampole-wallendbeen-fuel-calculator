function calculate() {

    let pump1 = Number(document.getElementById("pump1").value);
    let pump2 = Number(document.getElementById("pump2").value);
    let pump3 = Number(document.getElementById("pump3").value);
    let pump4 = Number(document.getElementById("pump4").value);

    let lastReading = Number(document.getElementById("lastReading").value);

    let stock = Number(document.getElementById("stock").value);
    let previousDip = Number(document.getElementById("previousDip").value);
    let delivery = Number(document.getElementById("delivery").value);
    let prevVariance = Number(document.getElementById("prevVariance").value);

    // Pump calculations
    let totalReading = pump1 + pump2 + pump3 + pump4;
    let litresSold = totalReading - lastReading;

    // Tank calculations
    let totalDip = previousDip + delivery;
    let salesDip = totalDip - stock;
    let dailyVar = salesDip - litresSold;
    let cumVar = prevVariance + dailyVar;

    // Display results
    document.getElementById("totalReading").textContent = totalReading;
    document.getElementById("litresSold").textContent = litresSold;
    document.getElementById("totalDip").textContent = totalDip;
    document.getElementById("salesDip").textContent = salesDip;
    document.getElementById("dailyVar").textContent = dailyVar;
    document.getElementById("cumVar").textContent = cumVar;
}

function resetForm() {

    // Clear all input fields
    document.getElementById("fuelForm").reset();

    // Clear results
    document.getElementById("totalReading").textContent = "";
    document.getElementById("litresSold").textContent = "";
    document.getElementById("totalDip").textContent = "";
    document.getElementById("salesDip").textContent = "";
    document.getElementById("dailyVar").textContent = "";
    document.getElementById("cumVar").textContent = "";
}
