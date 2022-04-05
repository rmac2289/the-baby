export const calculateAgeInWeeks = (bday) => {
  const today = new Date();
  const birthDate = new Date(bday);
  const ageInMilliseconds = today.getTime() - birthDate.getTime();
  const ageInWeeks = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 7));
  return ageInWeeks;
};

export const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();
  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

export const formatTime = (seconds) => {
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  if (seconds <= 60) {
    if (seconds < 10) {
      return "00:0" + seconds;
    }
    return `00:${seconds}`;
  }
  if (minutes <= 60 && seconds > 61) {
    seconds = seconds % 60;
    if (seconds < 10) {
      return `${minutes}:0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }
  if (minutes > 60) {
    minutes = minutes % 60;
    return `${hours}:${minutes}`;
  }
};
