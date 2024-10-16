const mogoose=require("mogoose");
const booSchema=new mogoose.Shema({
    title:{type:String, required:true},
    price:{type:Number, default=0},
});