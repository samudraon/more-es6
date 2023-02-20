const student = {
    name: 'Kolilm Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },
}

const math = student.marks.math;

const marks = student['marks']['chemistry']
const subject = 'physics'
const marks2 = student.marks[subject];
console.log(marks2);
