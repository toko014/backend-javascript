const products=[
    {
        id:1,
        productName:"msi gf16",
        totalPrice:1500,
        quantity:"computer",
        status:true
    }
]
const pagination=(req,res)=>{
    let {page=1, take=3}=req.query
    const paginatedProducts=products.slice((page-1)*take,page*take)
    res.json({message:"success",data:paginatedProducts})
}
const deletion=(req,res)=>{
    let index=products.findIndex(el=>el.id===Number(req.params.id))

    res.json(products.splice(index,1))
}
const creation=(req,res)=>{
    let {productName,totalPrice,quantity,status}=req.body
    if(totalPrice>500||quantity>10){
        return res.status(400).json({message:"price must be less then 500 and quantity less than 10"})
    }
    let obj={
        id:products.length+1,
        productName,
        totalPrice,
        quantity,
        status
    }
    products.push(obj);
    res.json({message:"success",data:products})
}
const updating=(req,res)=>{
    const index=products.findIndex(el=>Number(el.id)===Number(req.params.id))
    if(index === -1){
        return res.status(404).json({message:"id is invalid"})
    }
    products[index]={
        id:req.params.id,
        productName:req.body.productName??products[index].productName,
        totalPrice:req.body.totalPrice??products[index].totalPrice,
        quantity:req.body.quantity??products[index].quantity,
        status:req.body.status??products[index].status

    }
    res.json({message:"success",data:products})
}

const find=(req,res)=>{
    const findObj=products.find(el=>el.id===Number(req.params.id))
    res.json({message:"success",data:findObj})
}
module.exports={pagination,deletion,creation,find,updating}