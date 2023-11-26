@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    background: rgb(255, 218, 232);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}
.loading{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.loading .boxHeartImg{
    position: absolute;
    width: 100%;
    top: -40px;
    display: flex;
    justify-content: space-between;
}
.heartItem.item1{
    position: relative;
    left: -4%;
    transform: scale(0);
}
.heartItem.item2{
    position: relative;
    left: 4%;
    transform: scale(0);
}
.heartItem.item3{
    position: relative;
    right: -6%;
    transform: scale(0);
}
/* animation: love1 5s infinite ease-in 1s; */
/* @keyframes love1{
    0%{
        opacity: 0;
        transform: scale(0.2) rotate(0deg) translate3d(100px, 0, 0);
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
        transform: scale(0.8) rotate(-40deg) translate3d(-50px, -400px, 0);
    }
} */
@keyframes heartScale{
    0%{
        transform: scale(0);
    }
    30%{
        transform: scale(1.2);
    }
    50%,100%{
        transform: scale(1);
    }
}
.heartItem.item1 img{
    width: 40px;
}
.heartItem.item2 img{
    width: 50px;
    transform: translateY(-10px);
}
.heartItem.item3 img{
    width: 60px;
    transform: translateY(-20px);
}
.heartItem::before{
    position: absolute;
    content: '';
    width: 3px;
    height: 40px;
    background-color: rgb(91,81,84);
    left: 51%;
    top: 10px;
    transform: translateX(-50%);
    z-index: -1;
}
.progress-bar{
    position: relative;
    width: 400px;
    height: 45px;
    background: #fff;
    padding: 3px;
    border: 3px solid rgb(91,81,84);
    display: flex;
}
.progress{
    width: 0px;
    height: 100%;
    background-color: rgb(244,118,121);
    left: 0;
    transition: 0.1s;
}
.percent{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
.loading .textBox{
    transition: 0.5s;
    margin-top: 10px;
}
.loading .textLoad{
    font-family: 'Roboto', sans-serif;
    color: rgb(244,118,121);
    font-family: 500;
    font-size: 20px;
    text-transform: uppercase;
}
.loading h2 .cricle1, .cricle2, .cricle3{
    color: rgb(244,118,121);
    opacity: 0;
}
.cricle1{
    animation: 1s .25s cricle linear infinite;
}
.cricle2{
    animation: 1s .5s cricle linear infinite;
}
.cricle3{
    animation: 1s .75s cricle linear infinite;
}
@keyframes cricle{
    0%{
        opacity: 0;
    }
    50%{
        opacity: 1;
    }
    100%{
        opacity: 0;
    }
}
.button{
    position: relative;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    transition: 0.5s;
    transform: scale(0);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 1px;
}
.buttonCLick{
    position: relative;
    display: flex;
    height: 40px;
    align-items: center;
    margin-top: -20px;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 1.95px 1.95px 2.6px);
}
.buttonCLick img{
    opacity: 0;
    width: 25px;
    position: absolute;
    margin-left: -20px;
    transform: translateX(-20px) rotate(90deg);
    animation: 1s cursor infinite linear;
}
@keyframes cursor{
    0%{
        transform: translateX(-20px) rotate(90deg);
    }
    50%{
        transform: translateX(-10px) rotate(90deg);
    }
}
.heartBox{
    position: absolute;
    top: -40px;
    left: -3.2%;
    width: 40px;
    height: 30px;
    border-radius: 10px;
    background-color: rgb(244,118,121);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.1s;
}
.heartBox::before{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgb(244,118,121) transparent transparent transparent;
}
.heartBox .heart{
    position: relative;
    width: 10px;
    height: 10px;
    background-color: #fff;
    transform: rotate(45deg);
}
.heartBox .heart::before{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    right: 50%;
    border-radius: 50%;
}
.heartBox .heart::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: #fff;
    bottom: 50%;
    border-radius: 50%;
}