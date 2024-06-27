const inputField = document.querySelector("#schooling");
const main = document.querySelector("#editor");
const secondPage = document.querySelector(".secondpage");
let isHidden = true;
const address = document.querySelector("#Address")
console.log(address.innerHTML);

function generate() {
    if (isHidden) {
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
    top: 600px;
    /* margin-top: 70px; */
    margin: 5px;
    text-align: center;
    /* border: 2px solid white; */
    font-size: 40px;
    
    

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
 .year1{
    margin-top: 5px;
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
 </style>
 <body>
    
        <div class="left">
            <img src="officialimg.jpg" alt="">
            <div class="text">
                CONTACT

            </div>
            <hr>
            <div class="contact" id="number">
                Phone
                <h6>**********</h6>

            </div>
            <div class="email" id="mail2">
                E-mail
                <h6>kbc2k24@gmail.com</h6>
            </div>

            <div class="adress">
                Address
                <h6></h6>
            </div>

            <div class="text2">
                EDUCATION
            </div>
            <div class="new">
                <hr>
            </div>
            <div class="year">
                Year
                <h6>Enter the year of your graduation </h6>
            </div>
            <div class="degree">
                Degree
                <h6>Enter your degree</h6>
            </div>
            <div class="univ">
                University
                <h6>Enter the name of your University</h6>
            </div>
            <br><br>
            <br><br><br>

            <div class="year1">
                Year
                <h6>Enter the year of your graduation </h6>
            </div>
            <div class="degree1">
                Degree
                <h6>Enter your degree</h6>
            </div>
            <div class="univ1">
                University
                <h6>Enter the name of your University</h6>
            </div>
            <div class="expertise">
                EXPERTIES
            </div>
            <div class="new2">
                <hr>
            </div>





        </div>

    


</body>`;
    } else {
        main.style.display = "block";
        secondPage.style.display = "none";
    }
    isHidden = !isHidden;
}