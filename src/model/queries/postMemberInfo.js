const db = require('../database/db_connection');

const postMemberInfo = (githubJson) => {
  const values = Object.values(githubJson);
  return db.query(
    'INSERT INTO members (github_id, github_handle, first_name, last_name, github_avatar_url) VALUES ($1, $2, $3, $4, $5)',
    values,
  ).then(() => console.log(`${githubJson.github_handle}member info posted to DB`))
    .catch((error) => {
      throw new Error(error.message);
    });
};

module.exports = postMemberInfo;