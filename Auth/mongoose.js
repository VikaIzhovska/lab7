var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:admin1224@clusterfirst.zwt6i.mongodb.net/mydb',  { useNewUrlParser: true, useUnifiedTopology: true } );
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;