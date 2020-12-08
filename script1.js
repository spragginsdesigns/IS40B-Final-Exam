function parseUserData() {
    var userData = document.getElementById("main-input").value;
    var res = `Your Estimated Cost Per Month Is: $${userData * 4}`;
    document.getElementById("res1").innerHTML = res;
}

function parseUserData2() {
    var radio1 = document.getElementById("radio1").value;
    var radio2 = document.getElementById("radio2").value;
    var radio3 = document.getElementById("radio3").value;
    var radio4 = document.getElementById("radio4").value;
    var gallonsOfMilk = document.getElementById("gallon-bottles").value;
    var checkbox1 = document.getElementById("main-checkbox").value;
    var radio = '';
        if (document.getElementById("radio1").checked) {
            radio = document.getElementById("radio1").value;
        } else if (document.getElementById("radio2").checked) {
                radio = document.getElementById("radio2").value;
        } else {
            radio = document.getElementById("radio3").value;
        }
         if (document.getElementById("radio4").checked) {
            radio = document.getElementById("radio4").value;
        }
        if (document.getElementById("main-checkbox").checked) {
            checkbox1 = document.getElementById("main-checkbox").value;
        }
        else {
            checkbox1 = document.getElementById("main-checkbox").checked = false;
        }
                document.getElementById("res2").innerHTML = `${`Your Order Summary: <br>Your Milk Preference: ${radio}<br>Number Of Gallons: ${gallonsOfMilk}<br>Requires Ice: ${checkbox1}<br>`}`;
        }


function parseUserData3() {
    $("#messageBox").hide();
    var messageBox1 = document.getElementById("messageBox").value;
    var res3 = "Thank You For Sending Us Your Message";
    document.getElementById("res3").innerHTML = res3;
}


