// Create the following:
// 1. The javascript array filter method takes in a callback,
//  Write a function that takes in a callback function and return a result 
// Suggestion: You can use the setTimeout to demonstrate a delay
const delay = (callback, ms) => {
    setTimeout(callback, ms);
  };
  
  const filter = (callback, array) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  };
  
  // Example usage
  delay(() => {
    const filteredArray = filter((item) => item > 2, [1, 2, 3, 4, 5]);
    console.log(filteredArray); // [3, 4, 5]
  }, 2000);

//   In this example, the filter function takes in a callback 
// function that checks if an item in the array is greater than 2. 
// The delay function is used to demonstrate a delay of 2 seconds 
// before the filter function is executed. The result will be logged 
// to the console after 2 seconds.