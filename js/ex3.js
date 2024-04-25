conversion = () =>
{
    const celsius = document.getElementById("temp_celsius").value;
    const farenheit = (celsius * (9 /5) + 32);
    document.getElementById("temp_fahr").innerHTML = farenheit;
}

calculate = () =>
{
    let text = "";
    let startYear = 2022;
    let endYear = 2050;
    for (let i = startYear; i <= endYear; i += 4)
    {
        console.log(i);
        text += "<br>" + i;
        document.getElementById("anos_copa").innerHTML = text;
    }
}
calculate();

grade = () =>
{
    let firstGrade = document.getElementById("grade1").value;
    let secondGrade = document.getElementById("grade2").value;
    let totalGrade = (parseFloat(firstGrade) + parseFloat(secondGrade)) / 2;
    let absence = document.getElementById("absences").value; 
    const classTotal = 20;
    let absCalc = classTotal - parseFloat(absence);

    if(absCalc < 14 && totalGrade < 6.5)
    {
        document.getElementById("result").innerHTML = "You are not approved because, you were only present for: " + absCalc + " days" + " ,you had insufficient grade too your current total grade is: " + totalGrade;
    }
    else if(absCalc >= 14 && totalGrade >= 6.5)
    {
        document.getElementById("result").innerHTML = "You are approved!";
    }
    else if(absCalc < 14)
    {
        document.getElementById("result").innerHTML = "You are not approved!, you had excessive absence, You were only present for: " + absCalc + " days";
    }
    else if(totalGrade < 6.5)
    {
        document.getElementById("result").innerHTML = "You are not approved!, you had insufficient grade, your current total grade is: " + totalGrade;
    }
    else
    {
        document.getElementById("result").innerHTML = "Enter your grade and number of time absent";
    }
}
grade()


var sales = [

    {
        'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    },

    {
        'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'
        
    },

    {
        'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null
        
    },

    {
        'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null
        
    }

];


students = () =>
{
    
    let table = document.getElementById("course_sales");
    let totalSold = 0;
    
    for (let i = 0; i < sales.length; i++)
    {
        if(sales[i].refundRequested === null)
        {

            const x = sales[i].student;
            const y = sales[i].date;
            const z = sales[i].amount;

            const newRow = document.createElement('tr')
            
            newRow.innerHTML = `
            <td>${x}</td>
            <td>${y}</td>
            <td>${z}</td>
            `;

            table.appendChild(newRow);

            totalSold = totalSold + sales[i].amount;

            document.getElementById("total_sold").innerHTML = totalSold;
        }
    }   
} 

students()

