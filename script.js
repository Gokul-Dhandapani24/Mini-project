function beforeSubmit()
{
    let output=document.querySelector(".outputDate");
    let input=document.querySelector(".inputDate");
    let formatedDate=new Date(input.value).toLocaleDateString("en-IN");
    output.value=formatedDate;
    console.log(output);

}

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 