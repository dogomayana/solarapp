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

    function myFunction(){

        const load = parseInt(document.getElementById("watts").value);
        const hrs = parseInt(document.getElementById("hour").value);

        const totalLoad = load * hrs;
        const solarPanel = Math.round(totalLoad / 5);
        const batteryBank = Math.round(totalLoad/ 12*2);
        const chargeController = Math.round(solarPanel /12);
        const inverterW = Math.round(load * 1.25 / 0.8);
        const inverterVa = (totalLoad/ 0.8);
        const kv = (inverterVa/1000)
        const ka = kv.toFixed(1)

    document.getElementById('sPanel').innerHTML="You will need"+" "+solarPanel+"w"+" "+"solar panel";
    document.getElementById('batbank').innerHTML="You will need"+" "+batteryBank+"ah"+" "+"12v"+" "+"battery";
    document.getElementById('chargecontrol').innerHTML="You will need"+" "+chargeController+"amps"+" "+"charge controller";
    document.getElementById('inverter').innerHTML="You will need"+" "+inverterW+"watts"+" "+"Inverter" + " " + "OR";
    // document.getElementById('inverterV').innerHTML="You will need"+" "+kva+"KVA"+" "+"Inverter";
    document.getElementById('inverterVb').innerHTML="You will need"+" "+ka+"KVA"+" "+"Inverter";
    document.getElementById('call').innerHTML="Requirements";
    document.getElementById('note').innerHTML="Pls note, if you added a refrigerator and a pressing iron as appliances to be use with the solar, you will need x2 of the above inverter(Kva) size due to surge";
    document.getElementById('inquire').innerHTML="For more enquiries on specific products to buy, pls chat 08106264634 on whatsapp.";
    };

