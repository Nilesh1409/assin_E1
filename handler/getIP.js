const express = require('express');
const dns = require('dns');

let getIp = express.Router();

function getIP(req,res){
    console.log('getting ip')
    let body;
    const {website_name} = req.body;
    dns.resolve4(`${website_name}`, (err,
        address) =>{
            body = ('address: %j', address)
    return res.send({
        Response : body,
    })  

        })  
        

    return res.send(body)  
        

}





getIp.post('/getmeip',getIP)

module.exports = getIp;