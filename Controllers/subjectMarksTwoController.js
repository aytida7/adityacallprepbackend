const User=require('../Models/subjectMarksTwoModel')


const handleNewUser=async(req,res)=>{
    const {first_name,last_name,years_old,scores}=req.body;
    
    if(!first_name || !last_name || !years_old || !scores ) return res.status(400).json({'message':'Enter Necessary Fields'});
    
    //checking duplicates if user have same values
    const duplicate=await User.findOne({first_name:first_name,last_name:last_name,years_old:years_old}).exec();
    if(duplicate) {
        res.status(409).json({"message":"first_name, last_name  and years_old matches to other candidate. Please give alternative field values "})
        return;
    }
    
    try {
        
        //store new user to our database
        
        if(!scores.subjects[1]){
            subName="chemistry"
        }else{
            subName=scores.subjects[1];
        }

        if(!scores.marks_obtained[1]){
            subMarks=0;
        }else{
            subMarks=scores.marks_obtained[1];
        }

        if(!scores.total_marks[1]){
            subTlMarks=0;
        }else{
            subTlMarks=scores.total_marks[1];
        }

        
        const result= await User.create({
                "first_name":first_name,
                "last_name":last_name,
                "years_old":years_old,
                "scores": 
                {
                "subjects": [scores.subjects[0], subName,scores.subjects[2]],
                "marks_obtained": [scores.marks_obtained[0],subMarks,scores.marks_obtained[2]],
                "total_marks": [scores.total_marks[0], subTlMarks,scores.total_marks[2]]
                }

            
        });
        // console.log(result);
        
        res.status(500).json({"message":`new user ${first_name} created` });
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