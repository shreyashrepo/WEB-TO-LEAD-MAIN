console.log("script loaded");
let captchachecked = false;
function beforesubmit(event) {
    if (captchachecked) {
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log("check date:", inputdate.value);
        // Convert input date to a formatted date (en-IN locale)
        let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
        outputdate.value = formateddate;
        console.log("output date:", outputdate.value);
    } else {
        alert("Please check the captcha box to generate the lead");
        event.preventDefault();
    }
}
function timestamp() {
    var response = document.getElementById("g-recaptcha-response");
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
    }
}
setInterval(timestamp, 500);
function recaptchaSuccess() {
    console.log("reCAPTCHA verified");
    captchachecked = true;
}
