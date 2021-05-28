function compute()
{
    // getting all input values
    var principal = document.getElementById("principal");
    var amount = principal.value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = amount * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Invalid principal amount
    if(amount <= 0){
        alert("Enter a positive number");

        // focus in the principal input again
        principal.focus();
    } else {
        // if inputs are valid, set innerHTML of result
        document.getElementById("result").innerHTML="If you deposit <mark>"+amount+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"
    }
}

function updateRate() 
{
    // getting rate value
    var rateval = document.getElementById("rate").value;

    // changing the value on the webpage
    document.getElementById("rate_val").innerText=rateval+"%";
}
