document.addEventListener("DOMContentLoaded", () => {
    StartButton=document.getElementById("starter")
    ClickButton=document.getElementById("counter")
    Timetell=document.getElementById("Timeteller")
    Score=document.getElementById("Scoreteller")
    Final=document.getElementById("FinalScore")
    sttext=document.getElementById("intext")
    RefreshButton=document.getElementById("refresh")


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
        RefreshButton.classList.remove("hidden");
        Final.textContent=`Your Average was ${sc/10} clicks per second`;
    }
    RefreshButton.addEventListener("click", () => {
        sc=0;
        Score.textContent=`Number of Clicks:0`;
        Score.classList.add("hidden");
        Final.classList.add("hidden");
        RefreshButton.classList.add("hidden");
        sttext.classList.remove("hidden");
        StartButton.classList.remove("hidden");
    });
});