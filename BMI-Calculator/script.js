

function BMI() {
  let height = document.getElementById("h").value;
  let weight = document.getElementById("w").value;
  let res;
  if (height == 0 || weight == 0) {
    alert('please input proper measures')
  }
  else {
    let bmi = weight / (((height / 100) * height) / 100);
    let bmio = bmi.toFixed(2);
    if (bmio < 18.5)
      res = "Underweight"
    else if (bmio < 24.19)
      res = "normal"
    else if (bmio < 29.9)
      res = "overweight"
    else res = "obese"

    document.getElementById("result").innerHTML = "Your BMI is " + bmio + " and you are " + res;
  }

}

