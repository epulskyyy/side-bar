export const timeConvert = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    time = time.slice(1);
    time[5] = +time[0] < 12 ? 'am' : 'pm';
    time[0] = +time[0] % 12 || 12;
  }
  return time[0] + time[5];
};

export const convertDate = (item) => {
  const newDate = new Date(item);
  const date = newDate.getDate();
  const months = newDate.getMonth();
  const year = newDate.getFullYear();
  const month = monthName[months - 1];
  let h = newDate.getHours().toString();
  let m = newDate.getMinutes().toString();
  let s = newDate.getSeconds().toString();
  if (h.length < 2) {
    h = `0${h}`;
  }
  if (m.length < 2) {
    m = `0${m}`;
  }
  if (s.length < 2) {
    s = `0${s}`;
  }
  const dTime = h + ':' + m;
  const time = timeConvert(dTime);
  return { date, month, year, dTime, time, full: `${date} ${month} ${year}` };
};

export const convertMoney = (value, type) => {
  if (type === '1') {
    if (value < 1000) {
      return 'Rp ' + value;
    } else if (value >= 1000 && value < 1000000) {
      return 'Rp ' + value / 1000 + ' ribu';
    } else if (value >= 1000000 && value < 1000000000) {
      return 'Rp ' + value / 1000000 + ' juta';
    } else if (value >= 1000000000 && value < 1000000000000) {
      return 'Rp ' + value / 1000000000 + ' miliar';
    } else if (value >= 1000000000000) {
      return 'Rp ' + value / 1000000000000 + ' triliun';
    }
  } else {
    if (value < 1000) {
      return 'Rp ' + value;
    } else if (value >= 1000 && value < 1000000) {
      return 'Rp ' + value / 1000 + 'rb';
    } else if (value >= 1000000 && value < 1000000000) {
      return 'Rp ' + value / 1000000 + 'jt';
    } else if (value >= 1000000000 && value < 1000000000000) {
      return 'Rp ' + value / 1000000000 + 'mil';
    } else if (value >= 1000000000000) {
      return 'Rp ' + value / 1000000000000 + 'tri';
    }
  }
};

export const monthName = [
  'Januari',
  'Februari',
  'Maret',
  'April',
  'Mei',
  'Juni',
  'Juli',
  'Agustus',
  'September',
  'Oktober',
  'November',
  'Desember',
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Des',
];
