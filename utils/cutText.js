module.exports = (content, maxLength) => {
  if (typeof content !== 'string') throw 'Error';
  if (typeof maxLength !== 'number' | maxLength <= 0 | maxLength == Infinity) throw 'Error';
  if (!content.length) throw 'Error';
  if (content.length <= maxLength) return content;
  return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...';
};
