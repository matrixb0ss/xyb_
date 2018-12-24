1. Clone repository
2. Move to project folder
3. Run to fetch required development-dependencies
```sh
npm install / yarn
```
## Testing

To run the tests:
```sh
npm run test / yarn test
```
The answer for this task (a function `displayFrequentVisiters` that calculate result) is in src/index.js file;

This is the average runtime and space complexity method
It's because only 1 iteration of calculations needed;
Use one complicated 'for loop' is average case in such situation.
Case with sorting, adding moment.js for dates and using map and reduce methods would be worst case for this kind of exercise.

`Task`:

Provide several examples that call your function and demonstrate that it works.

Provide the average runtime and space complexity (memory usage), and worst-case runtime
and space complexity for your solution, and a short explanation as to why.

State any assumptions you make for your solution.Also please add a set unit tests.Question:
Given an access log for a feature, output the customer ids of repeat customers who have visited on 3 or
more consecutive days. Each line of the access log is tab delimited with two fields: the timestamp of
when the customer visited, and the customer id (a 10 byte string). The feature writes an entry to the log
file as it gets the hits. Below is an example log file.

var log = `08-Jun-2012 1:00 AM 4ABCDEFGHI
09-Jun-2012 1:00 AM 1ABCDEFGHI
09-Jun-2012 9:23 AM 3ABCDEFGHI
10-Jun-2012 1:00 AM 2ABCDEFGHI
10-Jun-2012 2:03 AM 2ABCDEFGHI
10-Jun-2012 1:00 AM 1ABCDEFGHI
10-Jun-2012 7:23 AM 3ABCDEFGHI
10-Jun-2012 9:23 AM 3ABCDEFGHI
11-Jun-2012 1:00 AM 1ABCDEFGHI
11-Jun-2012 2:12 AM 2ABCDEFGHI
11-Jun-2012 8:23 AM 3ABCDEFGHI
12-Jun-2012 10:21 PM 1ABCDEFGHI`;

In this example, the 3-consecutive-day repeat customers are "1ABCDEFGHI" and "3ABCDEFGHI". The
result that your program generates will be these two customer ids. */
