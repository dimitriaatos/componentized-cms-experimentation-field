const {MongoClient, ObjectID} = require('mongodb')

const state = { db: null }

const connect = async (dbname, url = 'mongodb://localhost:27017', options = { useNewUrlParser: true }) => {
  const client = await MongoClient.connect(url, options)
  const db = client.db(dbname)
  state.db = db
  return db
}

const getDB = () => state.db
const getID = _id => ObjectID(_id)

module.exports = { connect, getDB, getID }