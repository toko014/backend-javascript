const products=[
    {
        id:1,
        name:"msi gf16",
        price:1500,
        category:"computer",
        isexpire:true
    }
]
const updateProduct=(req,res)=>{
    const productId=req.params.id
    const foundIndex=products.findIndex(el=>Number(el.id)===Number(productId))
    if(foundIndex === -1){
        return res.status(404).json({message:"id is invalid"})
    }
    products[foundIndex]={
        id:productId,
        name:req.body.name??products[foundIndex].name,
        price:req.body.price??products[foundIndex].price,
        category:req.body.category??products[foundIndex].category,
        isexpire:req.body.isexpire??products[foundIndex].isexpire
    }
    res.json({message:"success",data:products})
}
const findProduct=(req,res)=>{
    const productId=req.params.id
    const foundProduct=products.find(el=>el.id===Number(productId))
    if (foundProduct.price>200){
        res.status(400).json({message:"product price must be less then 200"})
    }
    if(!foundProduct){
        return res.status(400).json({message:"product not found", data:null})
    }
    res.json({message:"product found",data:foundProduct})
}

const createProduct=(req,res)=>{
    const {name,price,category,isexpire}=req.body
    const lastID=products[products.length-1].id||0
    checkRequiredFields(res,name,price,category,isexpire)
    const newObj={
        id:Number(lastID)+1,
        name,
        price,
        category,
        isexpire
    }
    products.push(newObj)
    res.json({message:"success",data:products})
}

const deleteProduct=(req,res)=>{
    const productId=req.params.id
    const index=products.findIndex(el=>el.id!==Number(productId))
    if(index===-1){
         return res.status(404).json({message:"id is invalid"})
    }
    const deletedProducts=products.splice(index,1)
    res.json({message:"success",data:deletedProducts})

}

const pagination=(req,res)=>{
    let {page=1,take=3}=req.query
    const paginatedProducts=products.slice((page-1)*take,take*page)
    res.json({message:"success",data:paginatedProducts})
}


function checkRequiredFields(res,name,price,category,isexpire){
    if(name==null||name==undefined){
        return res.status(400).json({message:`price is mandatory`,data:null})
    }
    if(price==null||price==undefined){
        return res.status(400).json({message:`price is mandatory`,data:null})
    }
    if(category==null||category==undefined){
        return res.status(400).json({message:`category is mandatory`,data:null})
    }
    if(isexpire==null||isexpire==undefined){
        return res.status(400).json({message:`isexpire is mandatory`,data:null})
    }
}

module.exports={createProduct,findProduct,deleteProduct,updateProduct,pagination}