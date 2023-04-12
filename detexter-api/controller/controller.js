

const testget = async(req, res)=>{
    res.status(200).send({
        message: 'Hola Mundo'
    })
}


module.exports = {
    testget,
}