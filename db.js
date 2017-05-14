
function getTopics(connection) {
  return connection('topics').select()
}

module.exports = {
  getTopics: getTopics
}
