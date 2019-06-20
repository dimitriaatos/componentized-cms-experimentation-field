const { connect, getID, getDB } = require('./database')
const util = require('util')

const dbname = 'dimitriaatos'

connect(dbname).then(db => console.log(`${db.s.databaseName} database connected`)).catch(err => {throw err})

const save = data => {
  console.log(data)
  Object.keys(data).forEach(path => {
    const [clctName, docPath] = path.split('/')
    const collection = getDB().collection(clctName)
    if (docPath) {
      const {_id, ...info} = data[path][0]
      const los = collection.updateOne(
        {_id: getID(_id)},
        {$set: info},
      )
    } else {
      data[path].changed.map(({_id, ...info}) => {
        if (_id) {
          collection.updateOne(
            {_id: getID(_id)},
            {$set: info},
          )
        } else {
          collection.insertOne(
            info
          )
        }
      })
      data[path].removed.map(_id => {
        collection.remove(
          {_id: getID(_id)}
        )
      })
    }
  })
}

// delta[name].map(element => {
//   if (element.id) {
//     collection.update(
//       {_id: getID(element.id)},
//       element
//     )
//   } else {
//   }
// })

const get = async path => {
  const a = path.split('/')
  // if (a[0] == 'personal' && a[1] == 'contact') {
  //   return
  // }
  const find = {...(a[1] ? {path: a[1]} : {}), /*public: { $all: ['website']}*/}
  return await getDB().collection(a[0]).find(find).sort({date: -1}).toArray()
}

module.exports = { save, get }