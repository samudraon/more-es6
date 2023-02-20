// syntactic sugar
class Instructor {
    name;
    designation = 'web course instructor'
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}

const amir = new Instructor('Amir', 'Mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.createQuiz(60);

const solaiman = new Instructor('Solaiman', 'Dhaka');
console.log(solaiman)