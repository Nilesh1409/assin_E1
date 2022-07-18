const express = require('express');
let fs = require('fs');
const getIp = require('./handler/getIP');
const main = require('./model');
const product = require('./model/product');

const app = express();

app.use(express.json());


//create an empty file named mynewfile2.txt:
// fs.open(' products.json', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

  async function handlePost(req,res){

    console.log('adding product')

    let data = req.body.product;
       await product.insertMany(data)
       try {
        res.send('Product added')
       } catch (error) {
        res.send('Something went wrong')
       }
    
 }

 async function getAllProduct(req,res){

 

    console.log('getting product')

       let products = await product.find()
       try {
        res.send({
            data : products
        })
       } catch (error) {
        res.send('Something went wrong')
       }
    
 }
 async function deleteProduct(req,res){
      const {id} = req.param

       let products = await product.findByIdAndRemove(id)
       try {
        res.send({
            message : 'Product deleted'
        })
       } catch (error) {
        res.send('Something went wrong')
       }
    
 }

 async function updateProduct(req,res){
    const {id} = req.param;
    const data = req.body

     await product.findByIdAndUpdate(id,data)
     try {
      res.send({
          message : 'Product updated',
      })
     } catch (error) {
      res.send('Something went wrong')
     }
  
}


  





  app.post('/products/create',handlePost)
  app.get('/products',getAllProduct)
  app.get('/products/:id',deleteProduct)
  app.put('/products/:id',updateProduct)





app.use(getIp);
main().then(() => {
    app.listen(8080,() => console.log('Port started listing at http://localhost:8080'))
})