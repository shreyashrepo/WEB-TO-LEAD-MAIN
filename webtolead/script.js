console.log("script inputed");

function beforesubmit(){
    let outputdate=document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log("check date:",inputdate.value); //string ---> date(en_IN)(locale);

    let formateddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formateddate;

    console.log("output date:",outputdate.value );
}