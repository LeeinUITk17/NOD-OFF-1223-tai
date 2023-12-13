class ItemController {
    additem=async(req,res,next)=>{
        res.send({
            message:'success',
            type:'additem',
            metadata:{}
        })
    }
    getall=async(req,res,next)=>{
        res.send({
            message:'success',
            type:'getall',
            metadata:{}
        })
    }
}
module.exports=new ItemController();