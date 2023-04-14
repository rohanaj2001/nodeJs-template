module.exports={
    health: async function (req, res, next) {
        res.json({
            "statusCode" : 200,
            "message" : "ok"
        });
    }
}