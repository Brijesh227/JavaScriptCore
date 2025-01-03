///     date ===== standard   
            // standard month first
            // node console
            // ISO 8601 format(standard format) e.g., "2024-01-02T13:00:00.000Z"


///     UTC => UTC is a time zone, not a date format (Coordinated Universal Time)
///     ISO 8601 => date and time format standard      
///     comparison always in milliseconds(Date.now())
///     toLocaleString() => more customizable
///     A Date object in JSON is always converted into UTC timezone (see Turing.js first question)

// Best Practices:
//  Convert the Date to a string in format(toLocaleString(),toISOString()) when logging or displaying it.
//  Store and handle time zone offsets manually if precise local time handling is needed.


/* 
    in browser console mostly(excepts toISOString()) converted in local time zone (in india and in usa it will be different)
    in node always in UTC time zone(console)
                    |
                    |--> suffix Z(Zulu time) means UTC

    Format of date:
        Locale-specific string representation:
            Thu Dec 26 2024 15:25:54 GMT+0530 (India Standard Time)

        ISO 8601 format(standard format):
            "2024-12-24T06:23:05.998Z"
                |
                |--> The T separates the date (2024-12-24) from the time (06:23:05.998)
                |--> The Z indicates that the time is in UTC (Coordinated Universal Time)

    Date -> standard way of date & time  ====> ISO 8601 format(standard format)

        new Date(year, month, day, hour, minute, second, millisecond)
                month (0-11) only in this

        new Date("YYYY-MM-DDTHH:mm:ssZ")    // make sure wrap in string
                                            // month start from 01-12  

        new Date("MM-DD-YYYY")              // same as above month(01-12)  

        new Date(epoch)
                epoch = milliseconds(13 digit) (10 digit * 1000)
*/

console.log(new Date())     // Mon Dec 23 2024 17:30:02 GMT+0530 (India Standard Time)      Browser  (start with thu)
                            // 2024-12-26T10:01:19.992Z                                     node

// adding Z(or z both fine) change the output in browser only for node it is same across all
// 
// koi na bap ni takat nathi z and toISOString() sathe avi jai to
// browser ne timezone nahi apo but toISOString() karso etle sali karse

const date10 = new Date("2024-12-23T05:20:00Z");    // Mon Dec 23 2024 10:50:00 GMT+0530 (India Standard Time)
                                                    // 2024-12-23T05:20:00.000Z

const date11 = new Date("2024-12-23T05:20:00");     // Mon Dec 23 2024 05:20:00 GMT+0530 (India Standard Time)
                                                    // 2024-12-23T05:20:00.000Z
                                                    

console.log(date10.toISOString());                  // 2024-12-23T05:20:00.000Z
                                                    // 2024-12-23T05:20:00.000Z

console.log(date11.toISOString());                  // 2024-12-22T23:50:00.000Z
                                                    // 2024-12-23T05:20:00.000Z


console.log(new Date("2024-01-02T12:00:00Z"));      // Tue Jan 02 2024 17:30:00 GMT+0530 (India Standard Time)
                                                    // 2024-01-02T12:00:00.000Z (with extra bit(milisecond))

console.log(new Date("2024-01-02T12:00:00"));       // Tue Jan 02 2024 12:00:00 GMT+0530 (India Standard Time)
                                                    // 2024-01-02T12:00:00.000Z
                                                                                                    
console.log(new Date("2024-12-26T17:30:02"));       // Thu Dec 26 2024 17:30:02 GMT+0530 (India Standard Time)
                                                    // 2024-12-26T17:30:02.000Z
                                                    
let date4 = new Date('2024-12-24T06:23:05.998Z');   // valid                                              
let date5 = new Date('2024-12-24T06:23:05');        // valid
let date6 = new Date('2024-12-24T06:23:05Z');       // valid
let date7 = new Date('2024-12-24T12:01');           // valid
let date8 = new Date('2024-12-24T12:0');            // invalid
let date9 = new Date('2024-12-24');                 // valid

/* new Date("02-02-2023"), 
    the string "02-02-2023" according to the current timezone (GMT +5:30) 
    The date is created with the time part implicitly set to midnight (00:00:00), 
    and in browser the time zone offset is also factored in (IST is GMT +5:30). 
*/

console.log(new Date("01-02-2024"))                 // Tue Jan 02 2024 00:00:00 GMT+0530 (India Standard Time)
                                                    // 2024-01-02T00:00:00.000Z

console.log(new Date("30-10-2024"))                 // Invalid Date                                               

console.log(new Date(0))        // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)                    
                                // 1970-01-01T00:00:00.000Z
                                                    
console.log(new Date(1))        // 1970-01-01T00:00:00.001Z (node)
console.log(new Date(-1))       // 1969-12-31T23:59:59.999Z (node)

                                // from 0 to 999 for browser it is same string => (Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time))

console.log(new Date(1000))     // Thu Jan 01 1970 05:30:01 GMT+0530 (India Standard Time)
                                // 1970-01-01T00:00:01.000Z

// running on 23 dec, 2024 (4:36 PM)
const date = new Date();
console.log(typeof date)            // object
console.log(date)                   // Mon Dec 23 2024 16:36:04 GMT+0530 (India Standard Time)
                                    // 2024-12-23T11:06:00.437Z             (-5:30)

console.log(date.toISOString())     // 2024-12-23T12:05:56.525Z     
                                    // 2024-12-23T12:05:56.525Z   (same in both)

console.log(date.toString());       // Mon Dec 23 2024 17:30:02 GMT+0530 (India Standard Time)
                                    // Mon Dec 23 2024 12:03:00 GMT+0000 (Coordinated Universal Time)

console.log(date.toLocaleString())  // 23/12/2024, 16:36:34         (in browser)
                                    // 12/23/2024, 11:06:34 AM      (in node)

const date2 = new Date("2024-12-23T05:40:00Z");     // 2024-12-23T05:40:00.000Z  // node
const date3 = new Date("2024-12-23T20:40:00Z");     // 2024-12-23T20:40:00.000Z  // node

console.log(date2.toLocaleString())     // 23/12/2024, 11:10:00         (in browser)
                                        // 12/23/2024, 5:40:00 AM       (in node)

console.log(date3.toLocaleString())     // 24/12/2024, 02:10:00         (in browser)(date changed) dd/mm/yyyy mm-01 to 12
                                        // 12/23/2024, 8:40:00 PM       (in node)

console.log(date2.toLocaleTimeString())     // 11:10:00
                                            // 5:40:00 AM

console.log(date2.toLocaleDateString())     // 23/12/2024
                                            // 12/23/2024

// toUTCString() -> a human-readable, standard UTC timestamp in the RFC 1123 format(Day, DD Mon YYYY HH:MM:SS GMT)
// toISOString() -> a standard ISO 8601 timestamp in UTC with format(YYYY-MM-DDTHH:mm:ss.sssZ)
//               -> There is no conversion if Z is present  

console.log(date2.toUTCString())            // Mon, 23 Dec 2024 05:40:00 GMT    (browser)
console.log(date2.toISOString())            // 2024-12-23T05:40:00.000Z         (browser)(timezone not converted)

                                            // Mon, 23 Dec 2024 05:40:00 GMT    (node)
                                            // 2024-12-23T05:40:00.000Z         (node)

const year = date.getFullYear();
const month = date.getMonth();          // 0-11
const day = date.getDate();             // 1-31
const hour = date.getHours();           // 0-23
const minute = date.getMinutes();       // 0-59
const second = date.getSeconds();       // 0-59
const dayofWeek = date.getDay();        // 0-6 (sunday-saturday)

console.log(year)
console.log(month)          
console.log(day)            
console.log(hour)           
console.log(minute)         
console.log(second)         
console.log(dayofWeek)      

// get milliseconds(Date.now() is more preferable)

let myTimeStamp = Date.now();
console.log(myTimeStamp)    // 1703521837045

const newDate = new Date();
console.log(newDate.getTime())      // work with object - 1703521837045


// to convert local time to UTC time zone(Coordinated Universal Time)

//nodejs
let localDate = new Date(2024, 11, 24, 18, 30, 0);
console.log(localDate);                                 // 2024-12-24T18:30:00.000Z
console.log(localDate.toISOString());                   // 2024-12-24T18:30:00.000Z 

// browser

let localDate2 = new Date(2024, 11, 24, 18, 30, 0);
console.log(localDate2);                                // Tue Dec 24 2024 18:30:00 GMT+0530 (India Standard Time)
let utcDate = new Date(localDate2.toUTCString());
// or
// let utcDate = new Date(localDate2);              // both works (JavaScript Date objects store time in UTC internally)

console.log(utcDate.toISOString());                     // 2024-12-24T13:00:00.000Z

// -------- OR(simple) --------------------

let localDate3 = new Date(2024, 11, 24, 18, 30, 0);
/**
 * new Date(2024, 11, 24, 18, 30, 0) creates a date object in the local timezone:
    This means 2024-12-24 18:30:00 in your local timezone (e.g., UTC+5.5).
 */
console.log(localDate3.toISOString());                  // 2024-12-24T13:00:00.000Z

