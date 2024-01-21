const User = require("../Models/subjectMarksModel");
const User2 = require("../Models/subjectMarksTwoModel");

const getStudentsController = async (req, res) => {
  try {
    const students = await User.find({});
    const students2 = await User2.find({});

    function calculatePercentage(marks) {
      if (!marks || marks.length !== 2 || marks[1] === 0) {
        return 0;
      }
      
      return (marks[0] / marks[1]) * 100;
    }

    const resultArray = [];

    students.forEach((student) => {
      const { name, age, gender, marks } = student;

      
      const physicsPercentage = calculatePercentage(marks.physics);
      const chemistryPercentage = calculatePercentage(marks.chemistry);
      const mathsPercentage = calculatePercentage(marks.maths);

      
      
      const overallPercentage =
        (marks.physics[0] + marks.chemistry[0] + marks.maths[0]) /(marks.physics[1] + marks.chemistry[1] + marks.maths[1])*100 ;

      
      const formattedObject = {
        name,
        age,
        gender,
        physics_percentage: physicsPercentage,
        chemistry_percentage: chemistryPercentage,
        maths_percentage: mathsPercentage,
        overall_percentage: overallPercentage,
      };

      
      resultArray.push(formattedObject);
    });

    // console.log(resultArray);

    const result2Array = [];

    function findSubjectPercentage(subjectPercentages, subject) {
      const foundSubject = subjectPercentages.find(
        (item) => item.subject === subject
      );
      return foundSubject ? foundSubject.percentage : 0;
    }

    students2.forEach((student) => {
      const { first_name, last_name, years_old, scores } = student;

      
      const subjectPercentages = scores.subjects.map((subject, index) => {
        const obtainedMarks = scores.marks_obtained[index];
        const totalMarks = scores.total_marks[index];
        return {
          subject,
          percentage: calculatePercentage2(obtainedMarks, totalMarks),
        };
      });
      
     

    const sumMarksObtained = scores.marks_obtained.reduce((sum, element) => {
      return sum + (element !== null ? element : 0);
  }, 0);
  
  const sumTotalMarks = scores.total_marks.reduce((sum, element) => {
      return sum + (element !== null ? element : 0);
  }, 0);
  
  const overallPercentage = (sumMarksObtained / sumTotalMarks) * 100;
    

      
      const formattedObject = {
        name: `${first_name} ${last_name}`,
        age: years_old,
        gender: "", 
        physics_percentage: findSubjectPercentage(
          subjectPercentages,
          "physics"
        ),
        chemistry_percentage: findSubjectPercentage(
          subjectPercentages,
          "chemistry"
        ),
        maths_percentage: findSubjectPercentage(subjectPercentages, "maths"),
        overall_percentage: overallPercentage,
      };

     
      result2Array.push(formattedObject);
    });

    

    function calculatePercentage2(obtainedMarks, totalMarks) {
      if (totalMarks === 0) {
        return 0;
      }
      return (obtainedMarks / totalMarks) * 100;
    }

    res.status(200).json({resultArray , result2Array});
  } catch (error) {
    res.json({ message: "bad request" });
  }
};

module.exports = { getStudentsController };
