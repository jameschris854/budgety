var incomeValue = document.querySelector('.income-value');
var expenseValue = document.querySelector('.expense-value');
var budgetValue = document.querySelector('.budget-value');
var submit = document.querySelector('.tick');
var description =document.querySelector('.text-area');
var signd = document.querySelector('.sign-changer');
var Inputvalue = document.querySelector('.value');
var incomeTable = document.getElementById("table-income");
var expenseTable = document.getElementById("table-expense");
var expensePer = document.querySelector('.expense-percent');
var rows = document.querySelector('tr');
var deleteRow = document.querySelector('.deleteButton');
var menu = document.querySelector('.menu');

var income=0;
var expense=0;
var budget =0;
var expensePercent = 0;
/*budgetValue.textContent = '+' + '0.00';*/
console.log(budgetValue)
function clear(){
    description.value = "";
    Inputvalue.value = "";
    signd.value = '+';

}
function updateUI(type,_sign,value)
{
    value = parseInt(value);
    console.log(typeof(expense),typeof(income),expensePercent)

    if(type == 'income')
    {
        income+=value;
        budget =budget+value ;
        incomeValue.textContent = '+' + income;
        console.log(income) 
        console.log(budget) 
        budgetValue.textContent = '+' + budget;
        expensePercent = Math.round((expense/(income))*100);
        expensePer.textContent = expensePercent + '%';  
    }
    else if(type == 'expense')
    {
        expense+=value;
        expenseValue.textContent = '-' + expense;
        console.log(expense) 
        budget =budget-value ;
        console.log(budget) 
        budgetValue.textContent = '+' + budget;
        expensePercent = Math.round((expense/(income))*100);
        //console.log(expensePercent = Math.round(((exPercent)*100)/100));
        console.log(expensePercent) 
        expensePer.textContent = expensePercent + '%';
    }
    clear();
}
function deletebudget(value,sign)
{   
    if(sign == '+' )
    {
        value = parseInt(value);
    budget =budget+value ;
    budgetValue.textContent = '+' + budget; 
    income+=value;
    incomeValue.textContent = '+' + income;
    console.log(parseInt(income))
    expensePercent = Math.round((expense/(income))*100);
    expensePer.textContent = expensePercent + '%';

    }else
    {
        value = parseInt(value);
        budget =budget+value ;
        budgetValue.textContent = '+' + budget;
        expense-=value; 
        expenseValue.textContent = '-' + expense;
        expensePercent = Math.round((expense/(income))*100);
        expensePer.textContent = expensePercent + '%';
    }
}
var addRow = function(sign,value,descrip,e)
{
    if(sign == '+'){
    row = incomeTable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = descrip;
    cell2.innerHTML = '<div class="container hover"><div><img class="delete hover deleteButton" src="delete.png" onclick="deleteTableRowI(this.parentNode.parentNode.parentNode.parentNode.rowIndex)" ></div><div id="delvalue" class="delete move in">+ '+value+'</div></div>';
    console.log('incometable'+incomeTable.tBodies[0].rows.length)
    }else{
    row = expenseTable.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = descrip;
    cell2.innerHTML = '<div class="container hover"><div><img class="delete hover deleteButton" src="delete.png" onclick="deleteTableRowE(this.parentNode.parentNode.parentNode.parentNode.rowIndex)" ></div><div class="delete move ex">- '+value+'</div></div>';
    console.log('expensetable'+expenseTable.tBodies[0].rows.length)
    }

}
var getInputs = function()
{
    if( Inputvalue.value =="" || description.value ==""){
        alert('fill all inputs')
        console.log('hi')

    }else{  
        sign = signd.value;
         value = Inputvalue.value;   
         descrip= description.value;
         addRow(sign,value,descrip);
         console.log(typeof(Inputvalue.value))
         type = finder(sign);
         updateUI(type,sign,value);

    }
     
}
var finder = function(sign)
{
    console.log('type:'+sign)
    if(sign == '+')
    {
        type = 'income';
    }
    else
    {
        type = 'expense';
    }
    console.log(type)
    return(type)
}

function deleteTableRowI(i){
    
    console.log(i)
    descrip = document.getElementById("table-income").rows[i].cells[0].innerHTML;
    value = parseInt(document.getElementById("table-income").rows[i].cells[1].textContent)
    deletebudget(-value,'+')
    document.getElementById("table-income").deleteRow(i);
}


function deleteTableRowE(i){
    console.log(i)
    descrip = document.getElementById("table-expense").rows[i].cells[0].innerHTML;
    value = parseInt(document.getElementById("table-expense").rows[i].cells[1].textContent)
    deletebudget(+value,'-')
    document.getElementById("table-expense").deleteRow(i);
}
submit.addEventListener('click',getInputs);
/*menu.addEventListener('')
/*

var signChanger = document.querySelector('.sign-changer');
var getInputs = function(){
    console.log(typeof(signChanger.value))
}

submit.addEventListener('click',getInputs);*/
