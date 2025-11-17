function calculateBMI() {

    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        alert("اكتب الطول والوزن يبويا خينا نخلص");
        return;
    }

    else if (height <= 0 || weight <= 0) {
        alert("الطول والوزن بالسالب ؟ لا لا خير ان شاء الله");
        return;
    }

    else if (height == weight) {
        alert("ايه يا عم المربع؟ مالك؟");
        return;
    }

    else if (height < 50 || height > 250) {
        alert("حط طول ووزن زي الناس بالله عليك");
        return;
    }

    else if ( weight > 400) {
        alert("حبيبي يا فيل");
        return;
    }

    else if (weight < 10 ) {
        alert("انت طفل رضيع ؟");
        return;
    }

    height = height / 100;
    let bmi = (weight / (height * height)).toFixed(1);

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
        status = "Obese, يا دبابة انت محتاج حزام امان";
        bgColor = "#ff0000";
    }

    document.getElementById("bmiStatus").textContent = status;
    document.body.style.backgroundColor = bgColor;
}
