                                             // ------------------clock----------------
const clock=document.querySelector('.clock')
function runclock(){
    var t=new Date()
   
    var h=t.getHours()
    
    var m=t.getMinutes()
   
    var s=t .getSeconds()
    var txt="AM"
    if(h>12){
        h=h-12
        txt="PM"
    }else if(h==0){
         h=12
         txt="AM"
    }
    h=h<10?'0'+h:h
    m=m<10?'0'+m:m
    s=s<10?'0'+s:s
    clock.innerHTML=(`${h} : ${m} : ${s} ${txt}`)
}
runclock()
setInterval(runclock,1000)
 // ----------------Second---------------------
function sec(){
const sec=Number(document.getElementById("seconds").value)
 const min=sec/60
 const hr=sec/3600 
 const day=sec/86400 
 const mon=sec/2629743.83 
 const yr=sec/31556926
 const resultMin=document.getElementById("sec-min")
 const resultHr=document.getElementById("sec-hr")
 const resultDay=document.getElementById("sec-day")
 const resultMon=document.getElementById("sec-mon")
 const resultYr=document.getElementById("sec-yr")
 resultMin.innerHTML=min.toFixed(2)+" Minutes"
 resultHr.innerHTML=hr.toFixed(2)+" Hours"
 resultDay.innerHTML=day.toFixed(2)+" Days"
 resultMon.innerHTML=mon.toFixed(2)+" Months"
 resultYr.innerHTML=yr.toFixed(2)+" Years"
}
                                             // ----------------Minute---------------------
function min(){
    const min=Number(document.getElementById("minutes").value)
    const hr=min/60 
 const day=min/1440
 const mon=min/43829.0639 
 const yr=min/525948.766
 const resultHr=document.getElementById("min-hr")
 const resultDay=document.getElementById("min-day")
 const resultMon=document.getElementById("min-mon")
 const resultYr=document.getElementById("min-yr")
 resultHr.innerHTML=hr.toFixed(2)+" Hours"
 resultDay.innerHTML=day.toFixed(2)+" Days"
 resultMon.innerHTML=mon.toFixed(2)+" Months"
 resultYr.innerHTML=yr.toFixed(2)+" Years"
}
                                             // ----------------Hour---------------------
function hr(){
    const hr=Number(document.getElementById("hours").value)
    const day=hr/24
 const mon=hr/730.001
 const yr=hr/8765.81277
 const resultDay=document.getElementById("hr-day")
 const resultMon=document.getElementById("hr-mon")
 const resultYr=document.getElementById("hr-yr")
 resultDay.innerHTML=day.toFixed(2)+" Days"
 resultMon.innerHTML=mon.toFixed(2)+" Months"
 resultYr.innerHTML=yr.toFixed(2)+" Years"
}
                                             // ----------------Day---------------------
function day(){
    const day=Number(document.getElementById("days").value)
    const mon=day/30
 const yr=day/365
 const resultMon=document.getElementById("day-mon")
 const resultYr=document.getElementById("day-yr")
 resultMon.innerHTML=mon.toFixed(2)+" Months"
 resultYr.innerHTML=yr.toFixed(2)+" Years"
}
                                            // ----------------month---------------------
function mon(){
    const mon=Number(document.getElementById("months").value)
    const yr=mon/12
 const resultYr=document.getElementById("mon-yr")
 resultYr.innerHTML=yr.toFixed(2)+" Years"
}
                                            // -------------year-----------------------
function yr(){
    const year=Number(document.getElementById("years").value)
    if(year%400==0 || year%4==0 && year%100!=0){
        const resultYr=document.getElementById("yr-result")
 resultYr.innerHTML=year+" is a Leap Year"
    }
    else{
        const resultYr=document.getElementById("yr-result")
        resultYr.innerHTML=year+" is not a Leap Year"  
    }
}
