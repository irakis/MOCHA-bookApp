module.exports = (fullName) => {
  if(fullName !== 'string') return 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName && !lastName) {
    return 'Error'
  } else {
    firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase()
  }
}