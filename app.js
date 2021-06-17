
// Was not a 100% what you wanted me to do, so i just broke down the challenge into 3 functions
// and made them as easy to read and clean as possible to do the exact same thing, please check out
// the rest of my github, thank you for introducing me to Robert Martin !

const cDay = () => {

  today = new Date();

  xmas = new Date('December 25, 2021');
  msPerDay = 24 * 60 * 60 * 1000;
  timeLeft = xmas.getTime() - today.getTime();

  timeDivide = timeLeft / msPerDay;
  daysLeft = Math.floor(timeDivide);
  dayMinus = (timeDivide - daysLeft) * 24;
  hrsLeft = Math.floor(dayMinus);
  minsLeft = Math.floor((dayMinus - hrsLeft) * 60);
  var daysLeft = parseInt((xmas - today) / (24 * 3600 * 1000));

  var ul = document.getElementById('days-until');
  var li = document.createElement('li');
  li.appendChild(
    document.createTextNode(daysLeft.toString() + ' days until Christmas')
  );
  ul.appendChild(li);
};

const nyDay = () => {

  today = new Date();

  nyDate = new Date('December 31, 2021');
  msPerDay = 24 * 60 * 60 * 1000;
  timeLeft = nyDate.getTime() - today.getTime();

  timeDivide = timeLeft / msPerDay;
  daysLeft = Math.floor(timeDivide);
  dayMinus = (timeDivide - daysLeft) * 24;
  hrsLeft = Math.floor(dayMinus);
  minsLeft = Math.floor((dayMinus - hrsLeft) * 60);
  var daysLeft = parseInt((nyDate - today) / (24 * 3600 * 1000));

  var ul = document.getElementById('days-until');
  var li = document.createElement('li');
  li.appendChild(
    document.createTextNode(daysLeft.toString() + ' days until New Years Day')
  );
  ul.appendChild(li);
};

const vDay = () => {

  today = new Date();

  valDate = new Date('February 14, 2022');


  msPerDay = 24 * 60 * 60 * 1000;
  timeLeft = valDate.getTime() - today.getTime();

  timeDivide = timeLeft / msPerDay;
  daysLeft = Math.floor(timeDivide);
  dayMinus = (timeDivide - daysLeft) * 24;
  hrsLeft = Math.floor(dayMinus);
  minsLeft = Math.floor((dayMinus - hrsLeft) * 60);
  var daysLeft = parseInt((valDate - today) / (24 * 3600 * 1000));

  var ul = document.getElementById('days-until');
  var li = document.createElement('li');
  li.appendChild(
    document.createTextNode(daysLeft.toString() + ' days until Valentines Day')
  );
  ul.appendChild(li);
};

document.getElementById('trigger').addEventListener('click', cDay);
document.getElementById('trigger').addEventListener('click', nyDay);
document.getElementById('trigger').addEventListener('click', vDay);
