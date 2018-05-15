const addFacCodeReturnID = require('./addFacCodeReturnID');
const getFacCodeID = require('./getFacCodeID');
const updateMemberDetails = require('./updateMemberDetails');
const makeFacCodeName = require('../../lib/makeFacCodeName');

const saveProfileData = (dataObj, githubID) => {
  const objClone = JSON.parse(JSON.stringify(dataObj));
  const codeName = makeFacCodeName(objClone.fac_campus, objClone.fac_number);
  return getFacCodeID(codeName)
    .then((resObj) => {
      if (!resObj) {
        return addFacCodeReturnID(codeName);
      }
      return resObj;
    })
    .then(facCodeID => updateMemberDetails(objClone, facCodeID.id, githubID));
};

module.exports = saveProfileData;
