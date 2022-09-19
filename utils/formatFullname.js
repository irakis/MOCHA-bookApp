module.exports = (fullName) => {
  if (fullName !== 'string') throw 'Error';
  const [firstName, lastName] = fullName.split(' ');
  if (!firstName && !lastName) {
    throw 'Error'
  } else {
    return (
      firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase()
    )
  }
}