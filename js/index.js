// 1. create a promise to print out "Hello from 1"
const promise1 = new Promise(function (resolve, reject) {
  resolve("Hello from 1");
});
let promise2 = null;
let promise3 = null;

// 2. after the previous promise is fullfilled, do "hello from 2" after 2s
promise1.then((result) => {
  console.log("result from promise1", result);
  promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Hello from 2"), 2000);
  });

  // 3. finally, print "hello from 3" in another promise
  promise2.then((result) => {
    console.log("result from promise2", result);
    promise3 = new Promise(function (resolve, reject) {
      setTimeout(() => resolve("Hello from 3"), 2000);
    });

    promise3.then((result) => {
      console.log("result from promise3", result);
    });
  });
});
