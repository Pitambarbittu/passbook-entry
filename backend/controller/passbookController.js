const Passbook = require("../model/passbook")



const addEntry = async(req, res)=>{
    try{
        console.log(req.body)

        const  {ttype, amount, date, description} = req.body;
        if (amount <= 0){
            return res.status(400).json({
                error:"amount must be greater than zero"
            })
        }

        const newEntry = await Passbook.create({ttype,amount, date, description});
        res.status(201).json({
            success: true,
            data: newEntry
        })

    }catch(error){
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

const getEntries = async (req,res)=>{
try{
    const entries = await Passbook.find();
    res.status(200).json({
        success:true,
        data:entries
    })
}catch(error){
    res.status(500).json({
        success:false,
        error:error.message
    })
}
}

module.exports={addEntry,getEntries}