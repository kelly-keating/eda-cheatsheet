
function getTopics(connection) {
  return connection('topics').select()
}

function getTopicById(id, connection) {
  return connection('topics').select()
    .where('topics.id', id)
    .first()
}

module.exports = {
  getTopics,
  getTopicById
}
