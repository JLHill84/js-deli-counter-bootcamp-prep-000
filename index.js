function currentLine(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "The line is currently empty.";
  }

  const numbersAndNames = [];

  for (let i = 0, l = katzDeliLine.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${katzDeliLine[i]}`);
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`;
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!";
  }

  return `Currently serving ${katzDeliLine.shift()}.`;
}
let counterVariable = 1;
function takeANumber(katzDeliLine) {
  katzDeliLine.push(counterVariable);
  counterVariable++;

  return `You are number ${katzDeliLine.length} in line.`
}