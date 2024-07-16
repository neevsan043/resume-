const inputField = document.querySelector("#schooling");
const main = document.querySelector("#editor");
const secondPage = document.querySelector(".secondpage");
const generateBtn = document.querySelector("#generate-btn");
let isHidden = true;
const address = document.querySelector("#Address");
document
    .getElementById("professional-qualification-btn")
    .addEventListener("click", function () {
        const sectionContainer = document.getElementById("section-container");
        const newSection = document.createElement("div");
        newSection.classList.add("professional-qualification-section");
        newSection.innerHTML = `
        <div class="form-group">
            <label for="additional-qualification">Additional Qualification:</label>
            <input type="text" id="additional-qualification" name="additional-qualification" required>
        </div>
        <button type="button" class="delete-section-btn">Delete Section</button>
    `;
        sectionContainer.appendChild(newSection);
        addDeleteSectionFunctionality();
    });

document
    .getElementById("experience-btn")
    .addEventListener("click", function () {
        const jobProfileSection = document.querySelector(".JobProfile");
        const newExperienceSection = document.createElement("div");
        newExperienceSection.classList.add("experience-section");
        newExperienceSection.innerHTML = `
        <div class="jb">
            <div class="jt">
                <label for="job-title">Job Title</label><br>
                <input type="text" name="job-title" placeholder="Enter Job Title"><br>
            </div>
            <div class="cmname">
                <label for="company">Company</label><br>
                <input type="text" name="company" placeholder="Enter Company Name"><br>
            </div>
        </div>
        <div class="jc">
            <div class="loc">
                <label for="location">Location</label><br>
                <input type="text" name="location" placeholder="Enter Location"><br>
            </div>
            <div class="tmd">
                <label for="timeperiod">Time Duration</label><br>
                <input type="text" name="timeperiod" placeholder="Enter Time Duration "><br>
            </div>
        </div>
        <button type="button" class="delete-section-btn">Delete Section</button>
    `;
        jobProfileSection.appendChild(newExperienceSection);
        addDeleteSectionFunctionality();
    });

function addDeleteSectionFunctionality() {
    const deleteButtons = document.querySelectorAll(".delete-section-btn");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
        });
    });
}

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//             document.getElementById('imageInput').src = e.target.result;
//         }


//         reader.readAsDataURL(input.files[0]);
//     }
// }

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
    const lin = document.querySelector("#linkedin").value;
    const anchor = document.createElement("a");
    anchor.textContent = "click here";
    anchor.href = lin;
    const userinlink = document.getElementById('linkedin').value;
    const git = document.querySelector('#github').value;
    const anchor1 = document.createElement("a");
    anchor1.textContent = "click here";
    anchor1.href = git;
    const userid = document.getElementById('github').value;
    const instag = document.querySelector("#insta");
    const anchor2 = document.createElement("a");
    anchor2.textContent = "click here";
    anchor2.href = instag;
    const instaid = document.getElementById('insta').value;
    const phoneNumberRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberMatch = phoneNumberRegex.test(phoneNumber);
    const emailMatch = emailRegex.test(email);
    // const fileInput = document.getElementById("imageInput");
    // const file = fileInput.files[0];
    // const reader = new FileReader();
    // reader.onload = function (e) {
    //     const img = new Image();
    //     img.src = e.target.result;

    //     if (secondPage) {
    //         const newImage = document.createElement("img");
    //         newImage.src = img.src;

    //         secondPage.appendChild(newImage);
    //     } else {
    //         console.error('Element with ID "secondPage" not found.');
    //     }
    // };

    // reader.readAsDataURL(file);
    let profilePic = document.getElementById("profile-pic");
    let inputfile = document.getElementById("imageInput");
    inputfile.onchange = function(){
        profilePic.src = URL.createObjectURL(inputfile.files[0])
    };
    if (isHidden && phoneNumberMatch && emailMatch) {
        main.style.display = "none";
        secondPage.style.display = "block";
        generateBtn.style.display = "none";
        secondPage.innerHTML = `
        
    <style>.left {
    
    position: absolute;
    display: inline-block;
    width: 33%;
    height: 1800px;
    
    color: white;
}
.left img{
    width: 250px;
    position: relative ;
    left: 120px;
    top: 5px;
    border-radius: 100%;
    padding:20px;
    
}
body{
    
    background: linear-gradient(
      to right,
      black 0%,
      black 35%,
      gray 35%,
      gray 100%
      
    );
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
    top: 635px;
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
   left:550px;
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
 .new10 hr{
   position: relative;
    top: 240px;
    width: 67%;
    left: 32%;
    margin-top: 10px;
    display: inline-block
 }
   .imp-links{
   position: relative;
    left:-25px;
    top: 250px;
    /* margin-top: 70px; */
    margin: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
   
 }
 .linkedin {
   margin: 5px;
   font-size: 25px;
   text-align: left;
   position: relative;
   top: 350px;
   left: 155px;
   display: block;
   width: 60%
}

.fa-linkedin {
   background-color: black;
}

#inicon {
   position: relative;
   top: 250px;
   left: 160px;
}

#giticon {
   position: relative;
   top: 250px;
   left: 200px;
}

#iniicon {
   position: relative;
   top: 250px;
   left: 250px;
}
 
 
 </style>
 <head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 </head>
 
 <body>

 
      <div class="Complete">
        <div class="left">
            <img src="officialimg.jpg" id="profile-pic" alt="">
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
                <h6>${batch || "Batchelors"}</h6>
            </div>
            <div class="degree">
                Degree
                <h6>${bname || "CourseName"}</h6>
            </div>
            <div class="univ">
                University
                <h6>${uname || "University"}</h6>
            </div>
            <div class="time">
                Time Duration
                <h6>${btime || "Time_Duration"}</h6>
            </div>
            <br><br>
            <br><br><br>

            <div class="year1">
                Year
                <h6>${masters || "Year"}</h6>
            </div>
            <div class="degree1">
                Degree
                <h6>${mname || "GraduationYear"}</h6>
            </div>
            <div class="univ1">
                University
                <h6>${muname || "UniversityName"}</h6>
            </div>
            <div class="time1">
                Time Duration
                <h6>${mtime || "Time_Duration"}</h6>
            </div>
            <div class="imp-links">
                LINKS

                
            </div>
            <div class="new10">
                <hr>
            </div>
            
            <a href="${userinlink}" class="linkedin-show">
                <i class="fa-brands fa-linkedin" id="inicon" style="font-size: 50px; color: #0091ff"></i>
            </a>
            <a href="${userid}" class="Github-show">
                <i class="fa-brands fa-square-github"  id="giticon" style="font-size: 50px; color: #8096ac;"></i>
            </a>
             <a href="${instaid}" class="Insta-show">
                <i class="fa-brands fa-instagram"  id="iniicon" style="font-size: 50px;color: #ed0c84;"></i>
            </a>
            
            


        </div>
        <div class="right">
            <div class="fname">
            <h3>${fname || "First_Name"}</h3>
            </div>
         <div class = "content">
            <h1>Professional Resume</h1>
            <h3>${pqalify || "Content"}</h3>
         </div>
         <div class="work">
            <h1>Work Experience</h1>
            
            <h3>Job Type: ${work || "expt"}</h3>
         </div>
         <div class="comname">
            <h3>Company Name: ${wname || "Company_Name"}</h3>
         </div>
         <div class="location">
            <h3>Location: ${location || "Area"}</h3>
         </div>
         <div class="tmp">
            <h3>Time Duration: ${tmp || "timeperiod"}</h3>
         </div>
        </div>
      </div>
        
         

      



    </body>`;
    } else {
        main.style.display = "block";
        generateBtn.style.display = "block";
        secondPage.style.display = "none";
        alert("Please enter correct details");
    }
    isHidden = !isHidden;
}