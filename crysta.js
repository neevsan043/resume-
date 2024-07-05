const inputField = document.querySelector("#schooling");
const main = document.querySelector("#editor");
const secondPage = document.querySelector(".secondpage");
let isHidden = true;
const address = document.querySelector("#Address");
console.log(address.innerHTML);
document.getElementById('professional-qualification').addEventListener('click', function () {
   const experienceList = document.getElementById('experience-list');
   const newExperienceItem = document.createElement('div');
   newExperienceItem.classList.add('experience-item');
   newExperienceItem.innerHTML = `
       <div class="form-group">
           <label for="job-title">Job Title*</label>
           <input type="text" id="job-title" name="job-title" required>
       </div>
                  <div class="button-group">
           <button type="button" class="delete-experience">Delete</button>
       </div>
   `;
   experienceList.appendChild(newExperienceItem);
});

function generate() {
   const phoneNumber = document.querySelector("#phone-number").value;
   const email = document.querySelector("#email-address").value;
   const address = document.querySelector("#address").value;
   const batch = document.querySelector("#bachelors-year").value;
   const bname = document.querySelector("#bachelors-degree").value;
   const uname = document.querySelector("#bachelors-university").value;
   const btime = document.querySelector("#bachelors-duration").value;
   const mtime = document.querySelector("#masters-duration").value;
   const muname = document.querySelector("#masters-university").value;
   const masters = document.querySelector("#masters-year").value;
   const mname = document.querySelector("#masters-degree").value;
   const fname = document.querySelector("#first-name1").value;
   const pqalify = document.querySelector("#summary-box").value;
   const work = document.querySelector("#job-title").value;
   const wname = document.querySelector("#company").value;
   const location = document.querySelector("#location").value;
   const tmp = document.querySelector("#timeperiod").value;
   const phoneNumberRegex = /^\d{10}$/;
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const phoneNumberMatch = phoneNumberRegex.test(phoneNumber);
   const emailMatch = emailRegex.test(email);
   if (isHidden && phoneNumberMatch && emailMatch) {
      main.style.display = "none";
      secondPage.style.display = "block";
      secondPage.innerHTML = `
        
    <style>.left {
    border: 2px solid black;
    position: absolute;
    display: inline-block;
    width: 33%;
    height: 1800px;
    background-color:black;
    color: white;
}
.left img{
    width: 250px;
    position: relative ;
    left: 120px;
    top: 5px;
    border-radius: 100%;
    
}
body{
    background-color:grey;
    overflow-x: hidden;
}
/* .left text{
    position: absolute;
    top: 100px;
    left: 1000px;
} */
 .text{
    position: absolute;
    left: 150px;
    margin-top: 50px;
    margin-right: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
    
 }
 .left hr{
    position: relative;
    top: 85px;
    width: 68%;
    left: 31%;
    margin-top: 10px;
    display: inline-block;
    
 }
 .new hr{
    position: relative;
    top: 170px;
    width: 68%;
    left: 31%;
    margin-top: 10px;
    display: inline-block;
 }
 .contact{
    margin-top: 35px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 75px;
    left: 155px;
    display: inline-block;
    width: 40%
 }
 
 h6{
    margin: -1px;
    color: rgb(177, 174, 174);
 }
 h1{
    color: rgb(5, 4, 4);
 }
 .email{
    /* margin-top: 20px;
    margin-bottom: 50px; */
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 75px;
    left: 155px;
    display: block;
    width: 40%
    
 }
 .adress{
    /* margin-top: 20px;
    margin-bottom: 50px; */
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 80px;
    left: 155px;
    display: block;
    width: 40%
    
 }
 .text2{
    position: absolute;
    left: 150px;
    top: 600px;
    /* margin-top: 70px; */
    margin: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
 }
 .fname{
   position:relative;
   margin: 5px;
   padding:5px;
   top: 0px;
   left:500px;
   font-size:100px;
}


 .year{
    margin-top: 35px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 75px;
    left: 155px;
    display: inline-block;
    width: 50%;
    top: 150px;
    
 }
 .degree{
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 160px;
    left: 155px;
    display: block;
    width: 50% 
 }
 .univ{
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 175px;
    left: 155px;
    display: block;
    width: 60% 
 }
 .time1{
 margin: 5px;
   font-size: 25px;
   text-align: left;
   position: relative;
   top: 185px;
   left: 155px;
   display: block;
   width: 60% 
 }
 .time{
   
   margin: 5px;
   font-size: 25px;
   text-align: left;
   position: relative;
   top: 185px;
   left: 155px;
   display: block;
   width: 60% 
 
 }
 .year1{
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    
    left: 155px;
    display: inline-block;
    width: 50%;
    top: 150px;
    
 }
 .degree1{
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 160px;
    left: 155px;
    display: block;
    width: 50% 
 }
 .univ1{
    margin: 5px;
    font-size: 25px;
    text-align: left;
    position: relative;
    top: 175px;
    left: 155px;
    display: block;
    width: 60% 
 }
 .expertise{
    position: absolute;
    left: 150px;
    margin-top: 50px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
    top: 1140px;
 }
 .new2 hr{
    position: relative;
    top: 280px;
    width: 68%;
    left: 31%;
    margin-top: 10px;
    display: inline-block;
 }
 
 .expt li{
    position: relative;
    top: 275px;
    left: 120px;
    font-size: 20px;
    margin: 20px;
    
    
 }
 .langu{
    position: absolute;
    left: 150px;
    margin-top: 50px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
    top: 1440px;
 }
 .content{
   position:relative;
   margin: 5px;
   padding:5px;
   top: 10px;
   left:500px;
   background-color: grey;
 }
 .new3 hr{
    position: absolute;
    top: 40px;
    width: 150%;
    left: -4%;
    margin-top: 10px;
    display: inline-block;
 }
 .desc li{
    font-size: 20px;
    position: relative;
    text-align: left;
    left: -38px;
    margin: 20px;
 }
 .contact input{
   background-color: blueviolet;
 }
 .email input{
   background-color: blueviolet;
 }
 .adress input{
   background-color: blueviolet;
 }
 .content{
   position:relative;
   margin: 5px;
   padding:5px;
   top:-50px;
   left:500px;
   color: rgb(192, 168, 168);
 }
 .work{
   position:relative;
   margin: 5px;
   padding:5px;
   top:-50px;
   left:500px;
   color: rgb(192, 168, 168);
 }
 .comname{
   position:relative;
   margin: 5px;
   padding:5px;
   top:-80px;
   left:500px;
   color: rgb(192, 168, 168);
 }
 .location{
   position:relative;
   margin: 5px;
   padding:5px;
   top:-110px;
   left:500px;
   color: rgb(192, 168, 168);
 }
 .tmp{
   position:relative;
   margin: 5px;
   padding:5px;
   top:-140px;
   left:500px;
   color: rgb(192, 168, 168);
 }
 </style>
 <body>
      <div class="Complete">
        <div class="left">
            <img src="officialimg.jpg" alt="">
            <div class="text">
                CONTACT

            </div>
            <hr>
            <div class="contact" id="number">
                Phone
                <h6>${phoneNumber || "**********"}</h6>
            </div>
            <div class="email" id="mail2">
                E-mail
                <h6>${email || "kbc2k24@gmail.com"}</h6>
            </div>
            <div class="adress">
                Address
                <h6>${address || "Somewhere in the north"}</h6>
            </div>

            <div class="text2">
                EDUCATION
            </div>
            <div class="new">
                <hr>
            </div>
            <div class="year">
                Year
                <h6>${batch || Batchelors}</h6>
            </div>
            <div class="degree">
                Degree
                <h6>${bname || CourseName}</h6>
            </div>
            <div class="univ">
                University
                <h6>${uname || University}</h6>
            </div>
            <div class="time">
                Time Duration
                <h6>${btime || Time_Duration}</h6>
            </div>
            <br><br>
            <br><br><br>

            <div class="year1">
                Year
                <h6>${masters || Year}</h6>
            </div>
            <div class="degree1">
                Degree
                <h6>${mname || GraduationYear}</h6>
            </div>
            <div class="univ1">
                University
                <h6>${muname || UniversityName}</h6>
            </div>
            <div class="time1">
                Time Duration
                <h6>${mtime || Time_Duration}</h6>
            </div>
            
            

        </div>
        <div class="right">
            <div class="fname">
            <h3>${fname || First_Name}</h3>
            </div>
         <div class = "content">
            <h1>Professional Resume</h1>
            <h3>${pqalify || Content}</h3>
         </div>
         <div class="work">
            <h1>Work Experience</h1>
            
            <h3>Job Type: ${work || expt}</h3>
         </div>
         <div class="comname">
            <h3>Company Name: ${wname || Company_Name}</h3>
         </div>
         <div class="location">
            <h3>Location: ${location || Area}</h3>
         </div>
         <div class="tmp">
            <h3>Time Duration: ${tmp || timeperiod}</h3>
         </div>
        </div>
      </div>
        
         

      



    </body>`;
   } else {
      main.style.display = "block";
      secondPage.style.display = "none";
      alert("Please enter correct details");
   }
   isHidden = !isHidden;
}