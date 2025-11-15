function calculateBMI() {
    
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("Please enter valid numbers.");
        return;
    }

    height = height / 100;
    
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1);

    document.getElementById("bmiValue").textContent = bmi;

    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi < 25) status = "Normal Weight";
    else if (bmi < 30) status = "Overweight";
    else status = "Obese";

    document.getElementById("bmiStatus").textContent = status;
}