function beforeSubmit()
{
    let output=document.querySelector(".outputDate");
    let input=document.querySelector(".inputDate");
    let formatedDate=new Date(input.value).toLocaleDateString("en-IN");
    output.value=formatedDate;
    console.log(output);

}