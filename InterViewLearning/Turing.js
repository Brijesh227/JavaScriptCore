// 1. date with json.stringify and deep copy vs shallow copy(JSON.parse(JSON.stringify(obj)) vs Object.assign(obj))

const customerRide = {
    rideId: "XC1452",
    walletBalance: 58960,
    totalDistance: 5.658,
    dateofTravel: new Date("02-02-2023"),
    lastTravelledOn: undefined,
    previousDues: Infinity,
    uniquRegex: /.*/,
};

function calculateFare() {
    const clone = JSON.parse(JSON.stringify(this));
    clone.walletBalance -= 5.5;
    console.log(`The rider traveled on date ${clone.dateofTravel} and balance of ${clone.walletBalance} and last traveled on ${clone.lastTravelledOn}`);
}

const bindedCalculateFare = calculateFare.bind(customerRide);
bindedCalculateFare();

// which option is correct:
// 1. there is no loss of value as the lastTravelledOn and dateofTravel are printed correctly.
// 2. the loss of value for lastTravelledOn and dateofTravel keys can be prevented if object.assign(this) is used instead of JSON.parse(JSON.stringify(this));

// option 2 is correct as 
//    -> JSON.stringify() does not handle Date objects as regular JavaScript objects
//    -> object is serialized using JSON.stringify(), the key-value pairs where the value is undefined 
//        are dropped from the resulting JSON string

//    -> Object.assign(this) is a shallow copy method. When you use Object.assign(), 
//        it will copy primitive values (like strings, numbers, and undefined values) 
//        and references (like objects, arrays, and functions) from the original object to the target object.
//           -> e.g., For Date objects, since the Date object is copied by reference, 
//               the date information will not be lost, and no time zone conversion or loss of data will occur.
//           -> If the lastTravelledOn key is undefined, it will remain undefined in the cloned object, 
//               instead of being dropped.


/**
 * new Date("02-02-2023"), the string "02-02-2023" according to the current timezone (GMT +5:30)
 * The date is created with the time part implicitly set to midnight (00:00:00), and the time zone offset is also factored in (IST is GMT +5:30).
 * 
 *      new Date("02-02-2023") => Thu Feb 02 2023 00:00:00 GMT+0530 (India Standard Time)
 * 
 * but when,
 *      JSON.stringify(this) converts the entire customerRide object into a JSON string. 
 *      The Date object (new Date("02-02-2023")) is converted into an ISO 8601 string format
 * 
 *      *****  JavaScript internally stores dates in UTC, A Date object in JSON is always converted into UTC format  *****
 * 
 *      JSON.parse() to deserialize the JSON string back into an object, 
 *      it will automatically convert the ISO 8601 string ("2023-02-02T00:00:00.000Z") back into a Date object (UTC time zone).
 * 
 * 
 *      new Date("2023-02-02T00:00:00.000Z")  // This is in UTC
 *          2023-02-01T18:30:00.000Z
 * 
 * 
 *  Key Points to Keep in Mind to Avoid This Issue
        Time Zone Handling in JavaScript: 
            JavaScript internally stores dates in UTC. 
            Any manipulation, serialization, or deserialization of Date objects might cause the time zone to shift, 
            depending on how the date is created, formatted, and logged.

        Serializing Date Objects: 
            When using JSON.stringify(), Date objects are automatically converted into ISO 8601 strings 
            (which are in UTC). If you plan to send a Date object to a server or store it in a database, 
            this is usually a good practice because it standardizes the representation. 
            However, when you later parse that string using JSON.parse(), 
            the time zone may shift if it’s interpreted incorrectly in your local environment.

        Local Time Zone Considerations: 
            If you need to preserve the exact local time zone when working with Date objects, 
            consider explicitly formatting or storing the time zone offset along with the Date 
            (e.g., storing Date as a string with both the date and time zone).

        Best Practices:

            Convert the Date to a string in the desired format (e.g., toLocaleString() or toISOString()) 
            when logging or displaying it.
            Store and handle time zone offsets manually if precise local time handling is needed.
 */


// 2. flat the array

const sensorReading = [1, 2, 3, [null, 5, [4, 10], 89, "20", ,[[[[,"96"]]]]]];

function convert() {
    // ??
    const mapped = flatArray.map((temp) => temp * 2);
    console.log(mapped);        // [2,  4,   6,  0,  10, 8, 20, 178, 40, 192]
}

convert();

/**
 * 1. const flatArray = sensorReading.flat(5);      // true
 * 2. const flatArray = sensorReading.flat(3);
 * 3. const flatArray = sensorReading.flattenArray(5);
 * 4. const flatArray = sensorReading.flat();
 * 5. customFlat function
 */

//3. the error thrown from the try block of server method is preserved along with method name

const billDetails = [
    {
        billId: "OP908",
        billAmount: 58960,
        billDiscount: 5,
        date: new Date("02-02-2023"),
    },
    {
        billId: "OP876",
        billAmount: 7813,
        billDiscount: 2.5,
        date: new Date("03-02-2023"),
    },
    {
        billId: "OP908",
        billAmount: 0,
        billDiscount: 0,
        date: new Date("09-02-2023"),
    }
];

function server(index) {
    try {
        billDetails[index].billDiscount;
    } catch (error) {
        // ??
    }
}

function getPerItemCostByCustomerId(id) {
    try {
        server(3);
    } catch (exception) {
        //??
    }
}

getPerItemCostByCustomerId(2);

/*
The Error constructor only accepts two arguments: a message string and an optional cause (as of modern JavaScript).

option 3.

replace 1st with
throw new Error("Method: server", {
    cause: error,
});

replace 2nd with
console.log(`${exception.message}: ${exception.cause}`);

*/

//4. which of the following is true about throttling and debouncing

/*
    Debouncing:
        Debouncing delays the function invocation by a specific period of time to avoid unnecessary
        invocation which may impact the performance of the application.

    Throttling:
        Throttling performs function invocation at specific intervals as long as event triggger is  active.
*/

// 5. output of the following code

const Ride = [
    {
        rideId: "XC1452",
        walletBalance: 58960,
        totalDistanceInKm: 5.658,
        dateofTravel: new Date("02-02-2023"),
    },
];

Ride[-1] = {
    rideId: "XC1451",
    walletBalance: 8569,
    totalDistanceInKm: 14785,
    dateofTravel: new Date("03-02-2023"),
};

Ride[1] = {
    rideId: "XC145158",
    walletBalance: 78512,
    totalDistanceInKm: 6931,
    dateofTravel: new Date("04-02-2023"),
};

function printCustomerRides() {
    let distance = 0;
    for (let i = 0; i < Ride.length; i++) {
        distance += Ride[i].totalDistanceInKm;
    }
    console.log(distance);
}

const bindedCustomerRides = printCustomerRides.bind(Ride);
bindedCustomerRides();

/**
 * Ride:[
  {
    rideId: 'XC1452',
    walletBalance: 58960,
    totalDistanceInKm: 5.658,
    dateofTravel: 2023-02-02T00:00:00.000Z
  },
  {
    rideId: 'XC145158',
    walletBalance: 78512,
    totalDistanceInKm: 6931,
    dateofTravel: 2023-04-02T00:00:00.000Z
  },
  '-1': {
    rideId: 'XC1451',
    walletBalance: 8569,
    totalDistanceInKm: 14785,
    dateofTravel: 2023-03-02T00:00:00.000Z
  }
]

For loop => 2 element (starting from 0)
For loop => 3 element (starting from -1)
forEach loop => 2 element
for of loop => 2 element
for in loop => all key(0,1,-1)

 */

// 6. Account types => Normal, Gold, Prefered

class BankAccount {
    static changeAccountType(accountType) {
        this.newAccountType = accountType;
        return this.newAccountType;
    }

    constructor({ newAccountType = "Normal" } = {}) {
        this.newAccountType = newAccountType;
    }
}

const customer = new BankAccount({ newAccountType: "Gold" });
console.log(customer.changeAccountType("Prefered"));

// There is runtime exception it can be solved by removing static keyword from changeAccountType method

/*
  static methods are indeed only called on the class itself, not on instances of the class.
*/

// 7. select the correct option

const bankAccount = [
    {
        customerId: "A10120123",
        accountNumber: "5023621415",
        balance: 5000,
        addressLine1: "Parkway Avenue",
        addressLine2: "United States",
    },
    {
        customerId: "A101201231",
        accountNumber: "5023621451",
        balance: 10000,
        addressLine1: "CA Avenue",
        addressLine2: "United States",
    },
];

for (let index = 0; index < bankAccount.length; index++) {
    Object.freeze(bankAccount[index]);
}

bankAccount[1].balance = 200;

console.log(bankAccount[1].balance);

// The freeze method freezes the object but does not throw an error, rather freezeWithError should be used to ensure that an error is thrown when a frozen object is being modified.

// "use strict" should be added at the top of the file to ensure that an error is thrown whenever the developer tries to reassign a value to a frozen object.

// Objects which are frozen inside the array will never throw an error if modified because the freeze function does not return a new object; rather it freezes the object at the same reference.

// The V8 engine used by the browser and NodeJS is different hence if the same code is executed in a browser runtime it will throw an error. It is not throwing an error right now because it is executed in NodeJS runtime.

// None of the options are correct.

/**
 * The Object.freeze() method prevents modifications to an object but does not inherently throw an error 
 * when trying to modify a frozen object unless the code is running in "strict mode".
 * 
 */

//8.


// 4. delete isSelected from bank
let bank= {
    accountNumber: 123,
    add: "USA",
    isSelected: true
}

const {isSelected: _, {...newObj}} = bank;   // Invalid (throws syntax error)
const {isSelected: _, ...newObj} = bank;     // newObj = { accountNumber: 123, add: "USA" }
const {isSelected: _, newObj} = bank;        // newObj = undefined

const newObj = bank;
delete newObj.isSelected;