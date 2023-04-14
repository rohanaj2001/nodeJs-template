const { MongoClient } = require("mongodb");
const generateMongoString=require("../helper/generateMongoString");
const mongoConfig = require("./../configs/mongoConfig.json")["db"]["mongodb"];
const mongoURL = generateMongoString();
const client=new MongoClient(mongoURL);
var db={};
module.exports={
    connect:async function(){    
        try{
            await client.connect();
            for(var i in mongoConfig["db"]){
                db[i] = client.db(mongoConfig["db"][i]);
            }
            db["client"]=client;
            console.log("Database Connected Successfully");
        }catch(e){
            console.error(e);
        }finally{
            return db;
        }
    }
}