const formatString = str =>
  str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

const isAnagram = (str1, str2) => formatString(str1) === formatString(str2);

module.exports = isAnagram;
