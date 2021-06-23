const players = [
    {
        id:1,
        image: "./Img/Milos-Teodosic.jpg",
        name: "Milos Teodosic",
        position: "Point Guard",
        birthday: "19.03.1987.",
        height: "195 cm",
        club: "Virtus Bologna (ITA)"
    },
    {
        id:2,
        image: "./Img/Aleksa-Avramovic.jpg",
        name: "Aleksa Avramovic",
        position: "Point Guard",
        birthday: "25.10.1994.",
        height: "192 cm",
        club: "Estudiantes (ESP)"
    },
    {
        id:3,
        image: "./Img/Dejan-Todorovic.jpg",
        name: "Dejan Todorovic",
        position: "Shooting Guard",
        birthday: "29.05.1994.",
        height: "196 cm",
        club: "Andorra (ESP)"
    },
    {
        id:4,
        image: "./Img/Marko-Simonovic.jpg",
        name: "Marko Simonovic",
        position: "Power Foward",
        birthday: "30.05.1986.",
        height: "203 cm",
        club: "Cedevita Olimpija (SLO)"
    },
    {
        id:5,
        image: "./Img/Miroslav-Raduljica.jpg",
        name: "Mirosalv Raduljica",
        position: "Center",
        birthday: "05.01.1988.",
        height: "213 cm",
        club: "Jiangsu Dragons (CHN)"
    },
    {
        id:6,
        image: "./Img/Dejan-Kravic.jpg",
        name: "Dejan Kravic",
        position: "Center",
        birthday: "09.09.1990.",
        height: "213 cm",
        club: "Obradoiro (ESP)"
    },
    {
        id:7,
        image: "./Img/Nikola-Rebic.jpg",
        name: "Nikola Rebic",
        position: "Point Guard",
        birthday: "22.01.1995.",
        height: "188 cm",
        club: "Enisey (RUS)"
    },
    {
        id:8,
        image: "./Img/Dalibor-Ilic.jpg",
        name: "Dalibor Ilic",
        position: "Power Foward",
        birthday: "04.03.2000.",
        height: "202 cm",
        club: "Igokea (ROS/BIH)"
    },
    {
        id:9,
        image: "./Img/Ognjen-Jaramaz.jpg",
        name: "Ognjen Jaramaz",
        position: "Point Guard",
        birthday: "01.09.1995.",
        height: "193 cm",
        club: "Partizan Nis (SRB)"
    },
    {
        id:10,
        image: "./Img/Uros-Trifunovic.jpg",
        name: "Uros Trifunovic",
        position: "Shooting Guard",
        birthday: "05.12.2000.",
        height: "199 cm",
        club: "Partizan Nis (SRB)"
    },
    {
        id:11,
        image: "./Img/Novica-Velickovic.jpg",
        name: "Novica Velickovic",
        position: "Power Forward",
        birthday: "05.10.1986.",
        height: "205 cm",
        club: "Partizan Nis (SRB)"
    },
    {
        id:12,
        image: "./Img/Rade-Zagorac.jpg",
        name: "Rade Zagorac",
        position: "Small Forward",
        birthday: "12.08.1995.",
        height: "205 cm",
        club: "Partizan Nis (SRB)"
    },
    {
        id:13,
        image: "./Img/Aleksa-Radanov.jpg",
        name: "Aleksa Radanov",
        position: "Small Forward",
        birthday: "01.02.1998.",
        height: "201 cm",
        club: "FMP (SRB)"
    }
]

// select items

const img = document.getElementById("image");
const playerName = document.getElementById("name");
const position = document.getElementById("position");
const birthday = document.getElementById("birthday");
const height = document.getElementById("height");
const club = document.getElementById("club");

const prevBtn = document.getElementById("btnLeft");
const nextBtn = document.getElementById("btnRight");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPlayer(currentItem);
});
// show player based on item
function showPlayer(player){
    const item = players[player];
    image.src = item.image;
    playerName.textContent = item.name;
    position.textContent = item.position;
    birthday.textContent = item.birthday;
    height.textContent = item.height;
    club.textContent = item.club;
}
//show next player
nextBtn.addEventListener("click", function(){
    currentItem++;
        if(currentItem>players.length - 1){
            currentItem = 0;
        }
    showPlayer(currentItem);

})
prevBtn.addEventListener("click", function(){
    currentItem--;
        if(currentItem < 0){
            currentItem = players.length - 1;
        }

    showPlayer(currentItem);
})




