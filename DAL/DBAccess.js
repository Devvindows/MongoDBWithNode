const { MongoClient } = require("mongodb");
const dbURI = "mongodb://localhost:27017";
const dbName = "exerciseDB"
const collectionName = "personCollection"


function DBUtis() {

    function insertRecords(data) {
        const prom = new Promise(async (resolve, reject) => {

            const dbClient = new MongoClient(dbURI);

            try { 
                await dbClient.connect();
                const results = await dbClient.db(dbName).collection(collectionName).insertMany(data);
                resolve(results);
                await dbClient.close();
            }
            catch (error)
            {
                reject(error);                
            }
        })

        return prom;
    }

    function getAllRecords(){
        return new Promise(async (resolve, reject) => {

            const dbClient = new MongoClient(dbURI);
            try {
                await dbClient.connect();

                const results = dbClient.db(dbName).collection(collectionName).find();

                resolve(await results.toArray());

                db.close();
            } catch (error) {
                reject(error);
            }
        })
    }


    return { insertRecords, getAllRecords };

}

module.exports = DBUtis();