document
  .getElementById("bmi-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (!validateInputs(weight, height)) {
      alert("Please enter valid values for weight and height.");
      return;
    }

    const bmi = calculateBMI(weight, height);
    const category = bmiCategory(bmi);
    const fitnessPlan = recommendFitnessPlan(category);
    const resultText = `Your BMI is ${bmi.toFixed(
      1
    )}, which is considered ${category}.<br><br>Fitness Plan: ${fitnessPlan}`;

    document.getElementById("result").innerHTML = resultText;
  });

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function bmiCategory(bmi) {
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 24.9 && bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

function validateInputs(weight, height) {
  if (weight <= 0 || height <= 0) {
    return false;
  }
  return true;
}

function recommendFitnessPlan(category) {
  let plan;

  switch (category) {
    case "Underweight":
      plan =
        "Focus on gaining weight in a healthy way. Include strength training and a balanced diet with an increased caloric intake.";
      break;
    case "Normal weight":
      plan =
        "Maintain your weight with a mix of cardio exercises, strength training, and a balanced diet.";
      break;
    case "Overweight":
      plan =
        "Focus on weight loss through a combination of cardio exercises, strength training, and a calorie-controlled diet.";
      break;
    case "Obese":
      plan =
        "Consult a doctor or a professional trainer for a personalized weight loss plan that includes exercise and a tailored diet.";
      break;
    default:
      plan = "Please enter valid values for weight and height.";
  }

  return plan;
}
