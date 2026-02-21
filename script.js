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
    let dailyVar = litresSold - salesDip;
    let cumVar = prevVariance + dailyVar;

    // Output
    document.getElementById("totalReading").innerText = totalReading;
    document.getElementById("litresSold").innerText = litresSold;
    document.getElementById("totalDip").innerText = totalDip;
    document.getElementById("salesDip").innerText = salesDip;
    document.getElementById("dailyVar").innerText = dailyVar;
    document.getElementById("cumVar").innerText = cumVar;
}