function fullName(firstName , lastName){
  return `${firstName} ${lastName}`;
}

function ageInYears(birthdayString){
  const birthday = new Date(birthdayString);
  const ageInMilliseconds = Date.now() - birthday;
  const millisecondsPerYear = 31557600000;

  return Math.floor(ageInMilliseconds / millisecondsPerYear);


}
