const MongoClient  = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const dbName = "vivoxa_weTalk";
const url = "mongodb+srv://hiranSandman:admin@wetalk-hehrq.mongodb.net/test?retryWrites=true";
const mongoOptions = {useNewUrlParser : true};

const state = {
    db : null
};

const connect = (cb)=>{
    if(state.db){
        cb();
    }else{
        MongoClient.connect(url,mongoOptions,(err,client)=>{
            if(err){
                cb(err);
            }else{
                state.db = client.db(dbName);
                cb();
            }
        });
    }
}

const getPrimaryKey = (_id)=>{
    return ObjectID(_id);
}

const getDB = ()=>{
    return state.db;
}

module.exports = {getDB,getPrimaryKey,connect};