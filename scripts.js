window.addEventListener('load', function(){
    takeOff = document.getElementById('takeoff');
    takeOff.addEventListener('click', function(){
        let takeOffConfirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeOffConfirmation === true) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            let height = document.getElementById("spaceShuttleHeight").innerHTML;
            height = Number(height);
            height += 10000;
            height = String(height);
            document.getElementById("spaceShuttleHeight").innerHTML = height;
        }
    })
    land = document.getElementById("landing");
    land.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    })
    abort = document.getElementById("missionAbort");
    abort.addEventListener('click', function(){
        let abortConfirmed = window.confirm("Confirm that you want to abort the mission");
        if (abortConfirmed === true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    })
})
