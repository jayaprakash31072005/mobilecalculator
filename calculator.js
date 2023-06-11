function appendValue(value) {
  let expressionInput = document.getElementById("expression");
  expressionInput.value += value;
}

function clearExpression() {
  let expressionInput = document.getElementById("expression");
  expressionInput.value = "";
}

function calculate() {
  let expression = document.getElementById("expression").value;
  let result;

  try {
    result = eval(expression);
  } catch (error) {
    result = "Invalid expression";
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
