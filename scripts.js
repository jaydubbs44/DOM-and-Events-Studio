window.addEventListener('load', function(){
    takeOff = document.getElementById('takeoff');
    takeOff.addEventListener('click', function(){
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffConfirmation === true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;

        }
    })
})
