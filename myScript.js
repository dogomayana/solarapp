document.addEventListener("keydown", function (event){
    if (event.ctrlKey){
        event.preventDefault();
    }
})

document.onkeydown = function (e) {
    // disable F12 key
    if(e.key == "F12") {
        e.preventDefault();
    }
}
function autoRefresh() {
    window.location = window.location.href;
}
setInterval('autoRefresh()', 720000);

    function myFunction(){

        const load = parseInt(document.getElementById("watts").value);
        const hrs = parseInt(document.getElementById("hour").value);

        const totalLoad = load * hrs;
        const solarPanel = Math.round(totalLoad / 5);
        const batteryBank = Math.round(totalLoad/ 12*2);
        const chargeController = Math.round(solarPanel /12);
        const inverterW = Math.round(load * 1.25 / 0.8);
        const inverterVa = Math.round((load/ 0.8)*1.5);
        const kv = (inverterVa/1000)
        const kva = kv.toFixed(1)

        if((load && hrs)){
    document.getElementById('sPanel').innerHTML="You will need "+solarPanel+"watts solar panel";
    document.getElementById('batbank').innerHTML="You will need "+batteryBank+"ah 12v battery";
    document.getElementById('chargecontrol').innerHTML="You will need "+chargeController+"amps charge controller";
    document.getElementById('inverter').innerHTML="You will need "+inverterW+"watts Inverter OR";
    document.getElementById('inverterVb').innerHTML="You will need "+kva+"Kva Inverter which is the same as "+inverterVa+"va inverter";
    document.getElementById('call').innerHTML="Requirements";
    document.getElementById('note').innerHTML="Pls note, if you added a refrigerator and AC as appliances to be used on the solar system, you will need x2 of the above recommended inverter(Kva) size due to their surge";
    document.getElementById("empty").style.display = "none";
        }else{
    document.getElementById('empty').innerHTML="The fields are empty!!!";
    };
    };

