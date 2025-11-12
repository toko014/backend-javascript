async function name(params) {
    
}
const { default: mongoose } =  require("mongoose")


 async function connectToDB() {
	try {
		await  mongoose.connect("mongodb+srv://admin:admin@cluster0.yudhff5.mongodb.net/?appName=Cluster0")
		console.log('connected successfully')
	} catch (error) {
		console.log(error, "cound not connect mongoDb")
	}
}

module.exports=connectToDB