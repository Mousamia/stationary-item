const ul = document.getElementById('stationary');

ul.addEventListener('click', function(){
    const stationaryList = document.getElementById("stationary-list");
    
    stationaryList.classList.toggle("mystyle");
})