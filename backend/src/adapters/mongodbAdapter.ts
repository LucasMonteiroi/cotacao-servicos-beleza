import MongoClient from 'mongodb'

export default class MongoDbAdapter {
  async getCollection (collection: String): Promise<any> {
    const url = process.env.MONGO_URL
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })

    const db = client.db(process.env.MONGO_DATABASE)
    return db.collection(collection)
  }

  async post (data: any, collection: string): Promise<any> {
    const db = await this.getCollection(collection)
    const result = await db.insertOne({ data })
    data.id = result.id
    return data
  }

  async put (id: string, data: any, collection: string): Promise<any> {
    const db = await this.getCollection(collection)
    const newValues = { $set: { data } }
    const updated = await db.updateOne({ _id: MongoClient.ObjectId(id) }, newValues)
    return updated.result.ok
  }

  async get (collection: string, id: string = ''): Promise<any> {
    const db = await this.getCollection(collection)
    var result = []
    if (!id) {
      result = await db.find().toArray()
      return result
    } else {
      result = await db.find({ _id: MongoClient.ObjectId(id) }).toArray()
      return result.length ? result[0] : null
    }
  }

  async delete (id: string, collection: string): Promise<any> {
    const db = await this.getCollection(collection)
    const deleted = await db.findOneAndDelete({ _id: MongoClient.ObjectId(id) })
    return deleted.ok
  }
}
