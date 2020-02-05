
function calculateTax() {


    let salary = document.getElementById('salary').value;
    
    if (salary < 48535) {
        const amountOwed1 = document.getElementById('taxOwed').innerHTML = "Tax Owed:" + " " + "$" + salary * 0.15;
        const effectiveTax = amountOwed1 / salary;
        console.log(effectiveTax);
    }

    else if (salary > 48535 && salary < 97069) {
        const amountOwed2 = document.getElementById('taxOwed').innerHTML = "Tax Owed:" + " " + "$" + salary * 0.205;
        
    }

    else if (salary > 54404 && salary < 97069) {
        const amountOwed3 = document.getElementById('taxOwed').innerHTML = "Tax Owed:" + " " + "$" + salary * 0.26;
    }

    else if (salary > 63895 && salary < 150473) {
        const amountOwed4 = document.getElementById('taxOwed').innerHTML = "Tax Owed:" + " " + "$" + salary * 0.29;
    }

    else if (salary > 214368) {
        const amountOwed5 = document.getElementById('taxOwed').innerHTML = "Tax Owed:" + " " + "$" + salary * 0.33;
    }
}


//effective tax rate %= total tax/taxable income

//total retained earnings = taxable income - tax owed