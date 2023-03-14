//ex1
const calculateFunction = (payment) => {
    return payment + 3 + (payment*0.001)
}

console.log(calculateFunction(100))


//ex2

let John = {name: "John", birth: "1980/09/10"}
let Will = {name: 'Will', birth: "1977/10/11"}
let Anna = {name: 'Anna', birth: "1999/05/03"}


const greetingFunction = (name1, name2, name3) =>{
    //ex2.1
    function greetingMessage(name1, name2, name3)  {
        console.log(`Welcom ${name1.name} ${name2.name} ${name3.name}`);
    }

    greetingMessage(name1, name2, name3)

    //ex2.2
    function getAge(dateString) {
        let today = new Date();
        console.log(today);
        let birthDate = new Date(dateString);
        console.log(birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        console.log(m);
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    console.log(getAge(name1.birth));

    //ex3

    const greetingAndAge = (name1, name2, name3) => {
        console.log(`Welcome ${name1.name}, you are ${getAge(name1.birth)}. Welcome ${name2.name}, you are ${getAge(name2.birth)}. Welcome ${name3.name}, you are ${getAge(name3.birth)}.`);
    }

    greetingAndAge(John,Will,Anna)
    
}

greetingFunction(John,Will,Anna)