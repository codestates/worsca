
const validateBody = (body, ...requireKey) => {
  const numOfKeys = Object.keys(body).length;

  if(numOfKeys !== requireKey.length) {
    return false;
  }

  for(let i = 0; i < requireKey.length; i++) {
    if(body[requireKey[i]] === undefined) {
      return false;
    }
  }


  return true;
};

module.exports = {
  validateBody
}