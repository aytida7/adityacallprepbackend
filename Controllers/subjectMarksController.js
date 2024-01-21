const User=require('../Models/subjectMarksModel')


const handleNewUser=async(req,res)=>{
    const {name,age,gender,marks}=req.body;
    
    if(!name || !age || !gender || !marks ) return res.status(400).json({'message':'Enter Necessary Fields'});
    
    //checking duplicates if with same values
    const duplicate=await User.findOne({name:name,age:age}).exec();
    if(duplicate) {
        res.status(409).json({"message":"name and age matches to other candidate. Please give alternative name "})
        return;
    }
    
    try {
        
        //store new user to our db
        
        if(!marks.chemistry){
            chem1=0;
            chem2=0;
        }else{
            chem1=marks.chemistry[0];
            chem2=marks.chemistry[1];
        }
        
        const result= await User.create({
                "name":name,
                "age":age,
                "gender":gender,
                "marks": 
                {
                "physics": [marks.physics[0], marks.physics[1]],
                "chemistry": [chem1, chem2],
                "maths": [marks.maths[0], marks.maths[1]]
                }

            
        });
        // console.log(result);
        
        res.status(500).json({"message":`new user ${name} created` });
    } catch (error) {
        
        res.status(500).json({"message":error.message})
    }
    
}

const giveStudentInfo=async(req,res)=>{
    try {
        const students=await User.find({});
        res.status(200).json(students);
    } catch (error) {
        res.json({"message":"bad request"})
    }
    
}

module.exports={handleNewUser,giveStudentInfo};