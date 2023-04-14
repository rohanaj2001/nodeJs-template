const DB_CLUSTER = process.env.DB_CLUSTER 
const DB_USER = process.env.DB_USER 
const DB_PASS = process.env.DB_PASS 

module.exports = function () {
    var uri = "mongodb+srv://" + DB_USER + ":" + encodeURIComponent(DB_PASS) + "@" + DB_CLUSTER ;
    console.log(uri);
    return uri;
}