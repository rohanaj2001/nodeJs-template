var crypto=require("crypto");

function generateKey(size=100){
    var key=crypto.randomBytes(size).toString("base64").replace(/\//g,'x').replace(/\+/g,'q');
    return key.slice(0,size)
}

module.exports=generateKey;