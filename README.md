"npm install" to download dependencies
"npm start" to start backend
postman preferable to test api
testing endpoints:
 1) http://localhost:3500/subjectMarks ( post method )   preferable json format to enter into body(
     {
                "name":"Adi",
                "age":21,
                "gender":"Male",
                "marks": 
                {
                "physics": [100, 120],
                "chemistry": [70, 100],
                "maths": [50, 60]
                }
      }
)

2) http://localhost:3500/subjectTwoMarks ( post method )   preferable json format to enter into body(
     {
            "first_name":"Aduuitfffyap",
            "last_name":"Patil",
            "years_old":21,
            "scores": 
                {
                "subjects": ["physics","chemistry","maths"],
                "marks_obtained": [100, 100,60],
                "total_marks": [300, 100,90]
                }
      }
)

3) http://localhost:3500/getSudentDetails (get method) 
