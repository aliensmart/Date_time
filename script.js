let now = new Date()
console.log(now)
let date = new Date(2020, 0, 15, 14, 41, 567)
console.log(date)

let year = now.getFullYear()
console.log("year is "+ year)

let month = now.getMonth()
console.log("month is "+ month)

let anotherDate = now.getDate()
console.log("date is "+ anotherDate)

let hours = now.getHours()
console.log("hours is "+ hours)

let minutes = now.getMinutes()
console.log("minute is "+ minutes)

let secondes = now.getSeconds()
console.log("seconde is "+ secondes)

let millisecond = now.getMilliseconds()
console.log("millisecond is "+ millisecond)

let day = now.getDay()
console.log("day is "+ day)

let time = now.getTime()
console.log("day is "+ time)

let timeOffset = now.getTimezoneOffset()
console.log("time offset is "+ timeOffset)


// The following methods allow to set date/time components:

// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
// Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

// As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

let date1 = new Date(2016, 1, 28);
date1.setDate(date.getDate() + 2);
console.log('new date is '+ date1)

let start = Date.now()
for (let i = 0; i<10000000; i++){
    let some = i * i * i;
}

let end  = Date.now()
console.log(`loop en at ${end - start} ms`)

// If we want a reliable benchmark of CPU-hungry function, we should be careful.
// For instance, let’s measure two functions that calculate the difference between two dates: which one is faster?
function diffSubtract(date1, date2) {
    return date2 - date1;
  }
  
  function diffGetTime(date1, date2) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  let time1 = 0;
  let time2 = 0;
  
  // run bench(upperSlice) and bench(upperLoop) each 10 times alternating
  for (let i = 0; i < 10; i++) {
    time1 += bench(diffSubtract);
    time2 += bench(diffGetTime);
  }
  
  console.log( 'Total time for diffSubtract: ' + time1 );
  console.log( 'Total time for diffGetTime: ' + time2 );



// // Date parse
// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

// YYYY-MM-DD – is the date: year-month-day.
// The character "T" is used as the delimiter.
// HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
// The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

let ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(`the ms is ${ms}`)

let newDate =  new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );
console.log(newDate)