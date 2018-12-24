const displayFrequentVisiters = require('../');

const wrongLog = '08-Jun-20121:00AM4ABCDEFGHI08-Jun-20121:00AM4ABCDEFGHI';
const emptyLog = '';
const validLog = `08-Jun-2012 1:00 AM 4ABCDEFGHI
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

test('returnFalseIfLogIsEmpty', () => {
  expect(displayFrequentVisiters(emptyLog)).toEqual([]);
});

test('returnFalseIfLogIsWrong', () => {
  expect(displayFrequentVisiters(wrongLog)).toEqual([]);
});

test('returnArrayOfIdsIfLogIsValid', () => {
  expect(displayFrequentVisiters(validLog)).toEqual(['1ABCDEFGHI', '3ABCDEFGHI']);
});
