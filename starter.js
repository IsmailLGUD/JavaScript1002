/*'use strict';

let hasDrivingLiscence = false;
let passTest = true;

if (passTest) hasDrivingLiscence = true;
if (hasDrivingLiscence) console.log("He can drive!");


function nameVariable() {
    console.log("I am Ismail");
}

nameVariable();

function juiceProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = "Juce with " + apples + " apples and " + oranges + " oranges";
    return juice;

}

juiceProcessor(1, 2);
console.log(juiceProcessor(3, 2));

const appleJuice = juiceProcessor(5, 0);
console.log(appleJuice);

function juiceProcessor1(apples1, oranges1) {
    console.log("number of Apple is " + apples1 + "\nNumber of orange is " + oranges1);
    const juice1 = "Juice is with " + apples1 + " apples and " + oranges1 + " oranges";
    return juice1;
}

juiceProcessor1(1, 2);
console.log(juiceProcessor1(2, 3));

const appleJuice1 = juiceProcessor1(3, 0);
console.log(appleJuice1);

const num = Number('21');
console.log(1 + num);



//function declaring
function calAge(birthYear, currentYear) {
    // birthYear = prompt("Please enter your birtYear: ");
    // currentYear = prompt("Please enter current year: ");
    console.log("Your birthYear is " + birthYear + "\nThis is " + currentYear)
    const age = currentYear - birthYear;
    console.log("You are " + age + " years old.");
    return age;
}

const age1 = calAge(2000, 2021);//here age1 is the variable that we can use later
console.log(age1);



//function expression
const calAge2 = function (birthYear) {
    const age2 = 2022 - birthYear;
    return age2;
}

const age2 = calAge2(2000);
console.log(age2);

const calAge3 = birthyeah => 2022 - birthyeah;
const age3 = calAge3(2000);
console.log("You are " + age3 + " years old now!");



const yearsUntilRetirement = birthyeah => {
    const age4 = 2022 - birthyeah;
    const retirement = 75 - age4;
    return retirement;
}
console.log(yearsUntilRetirement(2000));




const yearsUntilRetirement1 = (birthyeah, firstName1) => {
    const age5 = 2022 - birthyeah;
    const retirement1 = 75 - age5;
    return firstName1 + " will retire " + retirement1 + " years";
    // return retirement;
}
console.log(yearsUntilRetirement1(2000, 'Ismail'));


function cutFruits(fruit) {
    return fruit * 2;
}

function fruitJuice(lemon, watermelon) {
    const pieceLemon = cutFruits(lemon);
    const pieceWatermenlon = cutFruits(watermelon);
    const juice = "Juice is made with " + pieceLemon + " pieces of Lemon and " + pieceWatermenlon + " pieces of Warermelon";
    return juice;
}
console.log(fruitJuice(2, 4));




function meatPiece(meat) {
    console.log(meat * 10);
}

function deleciosFood(beef, potato) {
    const beefPiece = meatPiece(beef);
    const potatoPiece = meatPiece(potato);
    const riceB = "To cook biriyani " + beefPiece + " peices of beef and " + potatoPiece + " pieces of potato is needed!";
    return riceB;
}
console.log(deleciosFood(8, 3));


const newRetirement = function (birthyeah) {
    return 2022 - birthyeah;
}


const yearsUntilRetirement2 = (birthyeah, firstName1) => {
    const age5 = newRetirement(birthyeah);
    const retirement2 = 75 - age5;

    if (retirement2 > 0) {
        console.log(firstName1 + " will retire in next " + retirement2 + " years!");
        return retirement2;
    } else {
        console.log(firstName1 + " has already returned!");
        return -1;
    }

}
console.log(yearsUntilRetirement2(2000, 'Ismail'));
console.log(yearsUntilRetirement2(1940, 'Mahi'));

const calcAverage = function (teamName, a, b, c) {
    const average = ((a + b + c) / 3);
    console.log(teamName + " has the average of " + average);
}

const scoreDolphins = calcAverage('Dolphins', 44, 23, 71);
const scoreKoalas = calcAverage('Koalas', 65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Team Dolphins Won!" + "(" + avgDolphins + " vs. " + avgKoalas + " )");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Team Koalas Won!" + "(" + avgKoalas + " vs. " + avgDolphins + " )");
    } else {
        console.log("No team wins!");
    }
}
checkWinner(scoreDolphins, scoreKoalas);


const frineds = ['Muhammad', 'Rasel', 'Mahmudul', 'Alamin'];//Array declaration
console.log(frineds);
console.log(frineds.length);
console.log(frineds.length - 1);

const years = new Array(2000, 2010, 2013, 2016, 2018);
console.log(years);
console.log(years.length);

frineds[3] = 'Mohi';
console.log(frineds);


const Muhammad = ['Islam', 'Netrokona', 'third'];
console.log(Muhammad);

const Rasel = ['Ahmed', 'Thakurgaon', 'Good', frineds];
console.log(Rasel);

const ageCalculator = function (birthYear) {
    const old = "\nyou are " + (2030 - birthYear) + " years old!";
    return old;
}
const years1 = new Array(2000, 2010, 2013, 2016, 2018);
const ageYears1 = ageCalculator(years[0]);
const ageYears2 = ageCalculator(years[1]);
const ageYears3 = ageCalculator(years[4]);

console.log(ageYears1, ageYears2, ageYears3);

const ages = [ageCalculator(years[0]), ageCalculator(years[1]), ageCalculator(years[4])];
console.log(ages);


const persons = ['Khalid', 'Rasel'];
persons.push('Sarker');
console.log(persons);
console.log(persons.length);

persons.unshift('Rakib');//addg as first elemetns
console.log(persons);

//remove elements
persons.pop();
console.log(persons);

persons.pop();
console.log(persons);
console.log(popped);*/





//Using Strict Mood
'use strict';

let hasDriversLicense1 = false;
const passTest1 = true;

if (passTest1) hasDriversLicense1 = true;
if (hasDriversLicense1) console.log('I can drive');

const song = 'audio';




//Functions
//declaring the function

function mySelf() {
    console.log("My name is Ismail");
}


//calling/running/invoking the function
mySelf();
mySelf();
mySelf();



function fruitJuice2(mangoes, bananas) {
    console.log(mangoes, bananas);
    const juice2 = `juice with ${mangoes} mangoes and with ${bananas} bananas`;
    return juice2;

}

const mangojuice = fruitJuice2(2, 3);
console.log(mangojuice);
console.log(fruitJuice2(2, 3));


//Another way for declaring and calling function
function student(Name, ID) {
    console.log(`His name is ${Name} and ID is ${ID}`);
}

student('Ismail', 20123811);

//age calculator function
function ageCalculator2(birthYear2) {
    const age2 = 2022 - birthYear2;
    return age2;
}

console.log(`I'm ${ageCalculator2(2000)} years old!`);


//Function Expression or anynomous function
const ageCalculator4 = function (birthYear3) {
    return 2022 - birthYear3;
}

console.log(`He is ${ageCalculator4(1990)} years old!`);



//Arrow Function
const arrowAage = birthYeah => 2022 - birthYeah;
console.log("You are " + arrowAage(2003) + " Years old!");


const retirementCalc = (firstName, birthYeah1, jobYear) => {
    const currentAge = 2022 - birthYeah1;
    const jobRetirement = 65 - currentAge;
    console.log(`Your name is ${firstName}, Your age is ${currentAge} and you retires in ${jobRetirement} years!`);
}

retirementCalc('Shakib', 1970, 22);




//Calling Other Functions
function cutMachin(fruit) {
    return fruit * 4;
}

function juice3(lemon, cream) {
    const pieceLemon = cutMachin(lemon);
    const pieceCream = cutMachin(cream);
    console.log(`Juice made with ${pieceLemon}  pieces of Lemons and with ${pieceCream} pieces of cram`);
}

juice3(2, 3);




function calcAge(BY) {
    return 2022 - BY;
}


const retirementCalc1 = (firstName, birthYeah1, jobYear) => {
    const currentAge = calcAge(birthYeah1);
    const jobRetirement = 65 - currentAge;

    if (jobRetirement > 0) {
        console.log(`Your name is ${firstName}, Your age is ${currentAge} and you retires in ${jobRetirement} years!`);

    } else {
        console.log(`${firstName} is retired for ${-jobRetirement} years!`);
    }
}

retirementCalc1('Shakib', 1945, 22);


const calcAverageD = (44 + 23 + 71) / 3;
const calcAverageK = (65 + 54 + 49) / 3;
const winner = function (AverageD, AverageK) {
    if (AverageD >= 2 * AverageK) {
        console.log("D won the match");
    } else if (AverageK >= 2 * AverageD) {
        console.log('K won the match!');
    } else {
        console.log('No one won!!!');
    }

}

winner(calcAverageD, calcAverageK);

let scoreDolphins =
    (44 + 23 + 71) / 3;
let scoreKoalas = (65 + 54 + 49) / 3;
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

//checkWinner(576, 111);



//Array
const friends1 = ['Rasel', 'AL-Islam', 'Mohi'];
console.log("Friends: " + friends1);

const semesters = new Array(1, 2, 3, 4, 5, 6, 7, 8);
console.log(semesters);


console.log(friends1[0]);
console.log(friends1[2]);

console.log(friends1.length);
console.log(semesters.length);

console.log(friends1[friends1.length - 1]);

friends1[2] = 'Shaful';
console.log(friends1);

semesters[0] = '1st';
console.log(semesters);

const me = ['firstName', 'Hossain', 22];
console.log(me);
console.log(me.length);

console.log(friends1)


//Adding Element in array
friends1.push('Mohi');//Adding element in the last of an Array
console.log(friends1);
const newLengthm = friends1.push('Pranto');
console.log('size of New firends1 Array = ' + newLengthm);

friends1.unshift('Shaful');//adding element in the begining of an Array
console.log(friends1);


//Removing elements from Arrays
friends1.pop();//last element remove
console.log(friends1);

const popped = friends1.pop();//last element remove
console.log(popped);

friends1.shift(friends1);//Remove first element
console.log(friends1);

console.log(friends1.indexOf('AL-Islam'));


friends1.push('23');//Add last element
console.log(friends1.includes('Rasel'));
console.log(friends1.includes('Bob'));
console.log(friends1.includes('23'));


if (friends1.includes
    ('Shaful')) {
    console.log("You have a friend Shaful");
} else {
    console.log("You don't have friend Shaful");
}


//Conding Challenge#4
const calcTip = function (bills) {
    return bills >= 50 && 300 <= 300 ? bills * 0.15 : bills * 0.20;
}


//const calcTip = bills => 50 && 300 <= 300 ? bills * 0.15 : bills * .20;

const billsA = [125, 555, 44];
const tips = [calcTip(billsA[0]), calcTip(billsA[1]), calcTip(billsA[2])];

const total = [(billsA[0] + tips[0]), (billsA[1] + tips[1]), (billsA[2] + tips[2])];

console.log(billsA, tips, total);


//Objects
const jonasArray = [
    'jonas',
    'watson',
    2022 - 2001,
    'teacher',
    ['Rasel', 'Peter', "Steven"]
];

console.log(jonasArray);

const jonas = {
    firstName: 'Ismail',
    lastName: 'Hossain',
    age: 2022 - 2000,
    job: "QA Automation",
    friends: ['Rasel', 'Peter', "Steven"]
};


console.log(jonas);

/*/Dot notation vs Bracket Notation
console.log(jonas.friends);
console.log(jonas.firstName);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


//const interestedIn = prompt("firstName, lastName, Job, age and friends");
const interestedIn = 'job';
console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Please choose between firstname, lastName, Job, age and friends ");
}
console.log("Ismail");

jonas.location = 'Bangladesh';
jonas['github'] = 'IsmailLGUD';
console.log(jonas);

//Jonas has few friends, firstname , friends first
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}!`);

console.log("Ismail");
console.log("Sabbir");*/


//Dot and Bracket Notation
const mates = {
    firstName: "Ismail",
    lastName: "Hossain",
    roll: 20123811,
    reg: 9328,
    cgpa: [3.69, 3.81, 3.76]

}

console.log(mates);
console.log(mates.cgpa);//Dot notation
console.log(mates['cgpa']);//Bracket Notation

const nameV = "Name";
console.log(mates['first' + nameV]);//Bracket Notation can use another variable nameV
console.log(mates['last' + nameV]); //Bracket Notation can use another variable nameV

//console.log(mates.'last' + nameV);//It doesn't work in Dot(.) Notation

//const interest = prompt("What do you want to know about Ismail choose between firstName, lastName, cgpa, roll or reg")

const interest = 'roll';
console.log("Your choice is: " + interest);
console.log(mates.interest);//Cuz of Dot notation, it doesn't work
console.log(mates[interest]);

if (mates[interest]) {
    console.log(`Ismail ${interest} is:
    ${mates[interest]}`)
} else {
    console.log("Your choice didn't match!!! Please choose among firstName, lastName, cgpa, roll or reg!")
}

mates.location = 'Bangladesh';
mates['github'] = "IsmailLGUD";
console.log(mates);

//Coding Challenge
//"John has 3 friends and His best friend is Rock"

const bFriend = {
    firstName1: "John",
    friends: ["Brock", "Rock", "Lesner"]
}

console.log(`${bFriend.firstName1} has ${bFriend.friends.length} friends and His best friend is ${bFriend.friends[1]}!!!!`);



//Object Method
const mates1 = {
    firstName: "Ismail",
    lastName: "Hossain",
    roll: 20123811,
    reg: 9328,
    cgpa: [3.69, 3.81, 3.76],
    BD: 2000,
    hasDriversLicense3: true,

    calAge: function (BD) {
        return 2022 - BD;
    }

};

console.log("age = " + mates1.calAge());
console.log("age = " + mates1.calAge(2001));
console.log("Year = " + mates1['calAge'](2002));


const mates2 = {
    firstName: "Ismail",
    lastName: "Hossain",
    roll: 20123811,
    reg: 9328,
    cgpa: [3.69, 3.81, 3.76],
    BD: 2000,
    hasDriversLicense3: true,

    calAge: function (BD) {
        return 2022 - this.BD;
    }

};

console.log("age2 = " + mates2.calAge());
console.log("age2 = " + mates2.calAge(2001));
console.log("Year2 = " + mates2['calAge'](2002));

//Coding Challenge
const Ismail = {
    firstName: "Ismail",
    lastName: "Hossain",
    roll: 20123811,
    reg: 9328,
    cgpa: [3.69, 3.81, 3.76],
    BD: 2000,
    hasDriversLicense3: true,

    calAge: function (BD) {
        return 2022 - this.BD;
    },

    getSummery: function () {
        return `${this.firstName} is  ${this.calAge}`;
    }

};

console.log(Ismail.getSummery());



//Object Coding Challenge#3
const Mark01 = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

const John01 = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
};

Mark01.calcBMI();
console.log("Mark BMI is: " + Mark01.bmi);

John01.calcBMI();
console.log("John BMI is: " + John01.bmi);

if (John01.bmi > Mark01.bmi) {
    console.log(`${John01.fullName} has more BMI!!!`);
} else {
    console.log(`${Mark01.fullName} has the largest BMI!!!`)
};


//using of for loop
for (let i = 1; i < 11; i++) {
    console.log(`Practise ${i} times!!!`);
};

//Looping Arrays
for (let i = 0; i < friends1.length; i++) {
    console.log(i, friends1[i], typeof friends1[i]);
}