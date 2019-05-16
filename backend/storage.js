const { connect, getID, getDB } = require('./database')
const dbname = 'dimitriaatos'

connect(dbname).then(db => console.log(`${db.s.databaseName} database connected`)).catch(err => {throw err})

const save = delta => {
  Object.keys(delta).forEach(name => {
    const collection = getDB().collection(name)
    delta[name].map(element => {
      if (element.id) {
        collection.update(
          {_id: getID(element.id)},
          element
        )
      } else {
        
      }
    })
    
    
  })
}

const get = async path => {
  const a = path.split('/')
  const find = {...(a[1] ? {path: a[1]} : {}), public: { $all: ['website']}}
  return await getDB().collection(a[0]).find(find).sort({date: 1}).toArray()
}

module.exports = { save, get }