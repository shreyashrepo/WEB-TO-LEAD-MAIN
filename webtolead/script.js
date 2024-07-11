console.log("script inputed");
let captchachecked=false;


function beforesubmit(event){
if(captchachecked){
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("check date:",inputdate.value); //string ---> date(en_IN)(locale);

    let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formateddate;

    console.log("output date:",outputdate.value );

}
else{
    alert("please check the captcha box to generate the lead");
    event.preventDefault();

}

    
}

 function timestamp() 
 { var response = document.getElementById("g-recaptcha-response");
     if (response == null || response.value.trim() == "") 
        {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } }
     
     setInterval(timestamp, 500); 

     
     function captchasuccess(){
        captchachecked=true;

     }