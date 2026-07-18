document.addEventListener("DOMContentLoaded", () => {
    StartButton=document.getElementById("starter")
    ClickButton=document.getElementById("counter")
    Timetell=document.getElementById("Timeteller")
    Score=document.getElementById("Scoreteller")
    Final=document.getElementById("FinalScore")
    sttext=document.getElementById("intext")


    StartButton.addEventListener("click", () =>{
        StartButton.classList.add("hidden");
        timerf();
    })
    var sc=0;
    ClickButton.addEventListener("click",()=>{
        sc++;
        Score.textContent=`Number of Clicks: ${sc}`;
    })
    function timerf(){
        ClickButton.classList.remove("hidden");
        Timetell.classList.remove("hidden");
        Score.classList.remove("hidden");
        let sec=10000;
        var time = setInterval(function(){
        Timetell.textContent="Time remaining: " + (sec/1000).toFixed(2) +"s";
        sec=sec-10;
        if (sec < 0) {
            clearInterval(time);
            timeover()
        } 
    }, 10)}; 
    
    function timeover(){
        sttext.classList.add("hidden");
        ClickButton.classList.add("hidden");
        Timetell.classList.add("hidden");
        Final.classList.remove("hidden");
        Final.textContent=`Your Average was ${sc/10} clicks per second`;
    } 
});