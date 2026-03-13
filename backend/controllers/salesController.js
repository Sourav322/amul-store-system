const db = require("../config/db")

exports.createSale = async (req,res)=>{

 const {items,total} = req.body

 const sale = await db.query(
 "INSERT INTO sales(total) VALUES($1) RETURNING id",
 [total]
 )

 const saleId = sale.rows[0].id

 for(let item of items){

  await db.query(
  "INSERT INTO sale_items(sale_id,product_id,quantity,price) VALUES($1,$2,$3,$4)",
  [saleId,item.productId,item.qty,item.price]
  )

  await db.query(
  "UPDATE products SET stock = stock - $1 WHERE id=$2",
  [item.qty,item.productId]
  )
 }

 res.json({success:true})
}
