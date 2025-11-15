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
    let bgColor = "";
    if (bmi < 18.5) {
        status = "Underweight, انت كدا هتطير في الهواء يسطا";
        bgColor = "#e85c5cff"; 
    }
    else if (bmi < 25) {
        status = "Normal Weight, انت اصلي وتمام التمام";
        bgColor = "#009900";
    }
    else if (bmi < 30) {
        status = "Overweight, بص الجيم مش للمفركشين بس";
        bgColor = "#e85c5cff";
    }
    else {
        status = "Obese,يا دبابة انت محتاج حزام امان";
        bgColor = "#ff0000";
    }

    document.getElementById("bmiStatus").textContent = status;
    document.body.style.backgroundColor = bgColor;

}