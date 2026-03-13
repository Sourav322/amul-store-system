const db = require("../config/db")

exports.getProducts = async (req,res)=>{
 const result = await db.query("SELECT * FROM products")
 res.json(result.rows)
}

exports.addProduct = async (req,res)=>{
 const {name,barcode,selling_price} = req.body

 await db.query(
 "INSERT INTO products(name,barcode,selling_price) VALUES($1,$2,$3)",
 [name,barcode,selling_price]
 )

 res.json({message:"Product added"})
}
