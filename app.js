//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']

    // let countries = ['Italy', 'Paris', 'Turkey','USA']
    // let [first, second, third, fourth] =  countries;
    // let firstCountry = first;
    // let secondCountry = second;
    // let thirdCountry = third;
    // let fourthCountry = fourth;
    // console.log(firstCountry, secondCountry, thirdCountry, fourthCountry)

    //We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}

    // let obj = {
    //     name:'Marry',
    //     age:20,
    //     roll:2
    // }
    // let {name, age, roll} = obj;
    // let a = name;
    // let b = age;
    // let c = roll;
    // console.log(a, b, c);


    //A function is taking 5 arguments and You have to pass it through an array.

    // let func = [1,2,3,4,5]
    // arrayFunc = (a,b,c,d,e) => {
    //     let func = [];
    //     return  console.log(func = [a,b,c,d,e]);
    // }
    // arrayFunc(1,2,3,4,5)

    //Given an array of firstname and an array of last name. First check both array
    //size is equal or not, if equal then make third new array which has first last name concat value

    let first = ['soha', 'qirrat', 'anaya', 'rayyan']
    let last = ['khan', 'khan', 'khan', 'khan']
    ['soha khan', 'qirrat khan', 'anaya khan', 'rayyan khan']

    let firstName = ['soha', 'qirrat', 'anaya', 'rayyan']
    let lastName = ['khan', 'khan', 'khan', 'khan']
    firstName.forEach((i) => {
        lastName.forEach(x => console.log(`${i} ${x}`))
    })

    //Create an arrow function that takes array as an input and make each element double and then return an array 

    // let firstArray = +prompt("Enter your number");
    // let secondArray = +prompt("Enter your number");
    // let thirdArray = +prompt("Enter your number");
    // elem = (x,y,z) => {
    //     let lastArray =[x,y,z]
    //     lastArray.map(a => console.log(a*2))
    // }
    // elem(firstArray,secondArray,thirdArray);

    //Create an arrow function that takes a number and return square of a number

    // let number = +prompt("Enter a number");
    // square = (x) => {
    //     console.log(Math.pow(x,2));
    // }
    // square(number)

    // question: `var authenticated=true;
    // var allowed = authenticated ? (alert('you are allowed')) : (alert('you are not allowed))
    // which alert will run

    // let authenticated = true;
    // authenticated ? alert('you are allowed'):
    // alert('you are not allowed');
    //******** "you are allowed" will run"//********


// question: ` What is the value of canDrive
// var age = 12;
// var canDrive = age > 18 ? 'yes' : 'no';`,
// answers: ['12', '18', 'yes', 'no'],
// which is correct answer

// var age = 12;
// let canDrive= age > 18 ? alert('yes')
// :
// alert('no')

                        // Answer : 'no' //

// const dog = 'snickers'
//             logdog(dog);
// function logdog(dog) {
//             console.log(dog)
//     }
// function go() {
//             const dog = 'sunny';
//             logdog(dog)
//     }
// ['snickers sunny', 'sunny snickers', 'snickers snickers', 'sunny sunny']
                        /// Answer : snickers



//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

// let text = `He's often called "Johnny"`;
// console.log(text)

// function welcomeMsg(name = "Everyone") {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
// welcomeMsg("Faiza")
// welcomeMsg()
// I have called funtion twice , share the answer what is printed each time

// welcomeMsg = (name = "Everyone") => {
//     let msg = "Welcome " + name
//     console.log(msg)
// }
// welcomeMsg("Faiza") // Welcome Faiza
// welcomeMsg() // Welcome Everyone

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.

// let gender = "female";
// const myPromise = new Promise((resolve,reject) => {
//     gender == "female" ?
//    resolve('Your allowed')
//     :
//     reject('your not allowed')
// })

// myPromise
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// const h = y => new Promise(resolve => setTimeout(resolve, y));

// let c = Promise.resolve();
// for (let count = 25; count >= 0; --count) {
//   c = c.then(() => {
//     console.log(count);
//     return h(5000);
//   });
// }