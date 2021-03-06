var katzDeli = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line) {
  var start = "The line is currently: ";
  var middle = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    for (var i = 0; i < line.length; i ++) {
      middle.push(`${i + 1}. ${line[i]}`);
    }
    return start + middle.join(', ');
  }

}
