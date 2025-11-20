const  dotenv  =  require('dotenv')
dotenv.config()
const { default: mongoose } =  require("mongoose")



module.exports  =  async () => {
	try {
		await  mongoose.connect(process.env.MONGO_URL)
		console.log('connected successfully')
	} catch (error) {
		console.log(error, "cound not connect mongoDb")
	}
}