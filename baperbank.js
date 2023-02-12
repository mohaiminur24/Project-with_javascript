document.getElementById("depositbutton").addEventListener("click",function(){

    let deposit = document.getElementById("depositAmount");
    let depositamout = parseFloat(deposit.value);
    
    if(isNaN(depositamout) !== true && typeof depositamout == "number" && depositamout>0){

        let dopositstirng = document.getElementById("depositMoney");
        let depositMoney = parseFloat(dopositstirng.innerText)
        dopositstirng.innerText =  depositamout+depositMoney;

        let totalBlanceS = document.getElementById("totalBM");
        let totalBlance = parseFloat(totalBlanceS.innerText);
        
        totalBlanceS.innerText = depositamout+totalBlance;

        let tbody = document.getElementById("tbody");
        let createTr = document.createElement("tr");
        createTr.innerHTML = `
                <tr>
                    <td>$ <span>${depositamout}</span></td>
                    <td>$ <span>00</span></td>
                    <td>${new Date()}</td>
                </tr>
        `;
        tbody.appendChild(createTr);
    }else{
        alert("invalid input !");
        return;
    }

    deposit.value = "";
});

    



document.getElementById("withdrowButton").addEventListener("click",function(){

    let withdrowS = document.getElementById("withdrowAmoutn");
    let withdorwM = parseFloat(withdrowS.value);
    
    if( isNaN(withdorwM) !== true && typeof withdorwM == "number" && withdorwM>0 ){

        let totalBlanceS = document.getElementById("totalBM");
        let totalBlance = parseFloat(totalBlanceS.innerText);

        if(totalBlance>=withdorwM){

            let withdowMoneyS = document.getElementById("withdrowMoney");
            let withdowMoney = parseFloat(withdowMoneyS.innerText);
            withdowMoneyS.innerText = withdowMoney+withdorwM;

            totalBlanceS.innerText = totalBlance-withdorwM;


            let tbody = document.getElementById("tbody");
            let createTr = document.createElement("tr");
            createTr.innerHTML = `
                <tr>
                    <td>$ <span>00</span></td>
                    <td>$ <span>${withdorwM}</span></td>
                    <td>${new Date()}</td>
                </tr>
        `;
        tbody.appendChild(createTr);

            




        }else{
            alert("Unsafience Blacnce!")
        };
        
    }else{
        alert("Invalid value !")
    };



    withdrowS.value = "";

});
