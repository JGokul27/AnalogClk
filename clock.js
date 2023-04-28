setInterval(()=>{
    let hr = document.querySelector('#hr');
    let sc = document.querySelector('#sc');
    let mn = document.querySelector('#mn');
    
    let day = new Date();
    console.log(day);

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSeconds() * 6;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;   
    sc.style.transform = `rotateZ(${ss}deg)`;
})