function calculatePercent(subject = '', maxMarks = 1) {
  var marks = prompt(`Enter your ${subject} marks out of ${maxMarks}`);
  let percent = (Number(marks) / Number(maxMarks)) * 100;
  if (percent >= 0 && percent <= 100) {
    if (percent < 50) {
      alert(`You failed. You got a D in ${subject} with ${percent}%`);
    }
    else if (percent < 60) {
      alert(`You barely passed. You got a C in ${subject} with ${percent}%`);
    }
    else if (percent < 70) {
      alert(`Good Try. You got a B in ${subject} with ${percent}%`);
    }
    else if (percent < 80) {
      alert(`Nice. You got an A in ${subject} with ${percent}%`);
    }
    else {
      alert(`Amazing !!!. You got an A+ in ${subject} with ${percent}%`);
    }
    return percent;
  }
  else {
    alert('Invalid Marks Entered');
  }
}
var total = 0;
total += calculatePercent('maths', 100)
total += calculatePercent('physics', 100)
total += calculatePercent('chemistry', 100)
total += calculatePercent('biology', 100)
total += calculatePercent('english', 100)
alert('You got a total of ' + (total / 500 * 100) + '% combined')
var array = [1, true, '3', 4.5, 5]
var index = 0;
var num = 2;
console.log(array[index])
index = num++
console.log(array[index])
index = ++num
console.log(array[index])
index = --num
console.log(array[index])
index = num--
console.log(array[index])

console.log(array)
array.push(99, 24)
console.log(array)
array.pop()
console.log(array)