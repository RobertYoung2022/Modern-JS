"use strict";
//.
console.log("Hello Robert")

const promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
      // Food truck found
      // Change status from 'pending' to 'fulfilled'
     resolve("Bringing tacos!")
  }, 5000)
});

const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        // Food truck not found
        // Change status from 'pending' to 'rejected'
        reject("Not bringing tacos. Food truck was not there.")
    }, 5000)
});

const onFulfillment = (result) => {
    // resolve was called
    console.log(result)
    console.log("Set up the table to eat tacos")
};

const onRejection = (error) => {
    //reject was called
    console.log(error)
    console.log("Start cooking pasta")
};

promise.then(onFulfillment);
promise.catch(onRejection);