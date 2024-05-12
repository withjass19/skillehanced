const { mongoose } = require("mongoose");

export default async function connectDB(){
    // const URL = `mongodb+srv://`+`${process.env.MONGO_USER}`+`:`+`${process.env.MONGO_PSWD}`+`@cluster0.vyhirpv.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0`
    // const URL = `// mongodb+srv://jaspreetmehra185:UemOxakWxxNBx6Fd@cluster0.mg4stio.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    const URL = `mongodb+srv://`+`${process.env.MONGO_USER}`+`:`+`${process.env.MONGO_PSWD}`+`@cluster0.mg4stio.mongodb.net/skillenhanced?retryWrites=true&w=majority&appName=Cluster0`
    // const connect = await mongoose.connect(URL);
    const connect = await mongoose.connect(URL, { 
        useUnifiedTopology: true,
        useNewUrlParser: true,})
    if (!connect) {
        console.log("Not Connected DB")
    }
    else{
        console.log("Connected DB");
    }
}