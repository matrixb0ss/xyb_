const log = `08-Jun-2012 1:00 AM 4ABCDEFGHI
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

const displayFrequentVisiters = (log = '') => {
  if (!log) return [];
  const userData = log.split('\n');
  const dayInMs = 86400000;
  const fulfilled = 'fulfilled';
  let userVisits = {}
  let result = [];
  for (let i = 0; i < userData.length; i+=1) {
    const argArray = userData[i].split(' ');
    const userId = argArray[3];
    const stringDate = argArray[0];

    const dateOfVisit = new Date(stringDate.replace('-', ' '));

    if (!userVisits[userId]) {
      userVisits[userId] = [dateOfVisit];
    } else if (userVisits[userId] != fulfilled) {
      let dates = userVisits[userId];
      const dayDifference = Math.abs(dateOfVisit - dates[dates.length - 1]);
      if (dayDifference === dayInMs) {
        dates.push(dateOfVisit);
        userVisits[userId] = dates;
      } else if (dayDifference < dayInMs) {
        // same day, do nothing
      } else {
        userVisits[userId] = [dateOfVisit];
      }
      if (userVisits[userId].length === 3) {
        result.push(userId);
        userVisits[userId] = fulfilled;
      }
    }
  }
  return result;
}

module.exports = displayFrequentVisiters;
