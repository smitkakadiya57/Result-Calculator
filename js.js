console.log("hello");

const calcy = () => {
    
    let marks = new Array();

    marks[0] = document.getElementById("M").value;
    marks[1] = document.getElementById("P").value;
    marks[2] = document.getElementById("C").value;
    marks[3] = document.getElementById("E").value;
    marks[4] = document.getElementById("CO").value;


    marks.forEach(check);

    function check(marks){
        if(marks >100 || marks == ""){
            alert(" Error... Refresh page and try Again");
document.getElementById("result").style.display="none";
document.getElementById("greet").style.display="none";

        }
        
    }
// console.log(marks[0]);
let total=0;
for(let c=0 ;c < marks.length ; c++ )
{
    total=total + parseFloat( marks[c] );
}

console.log("total"+total);

  let pr = (total / (marks.length * 100)) * 100;
    console.log("perrcentage"+ pr);

let grade = "";
    if (pr <= 100 && pr >= 80) {
        grade = 'A';
    } else if (pr <= 79 && pr >= 60) {
        grade = 'B';
    } else if (pr <= 59 && pr >= 40) {
        grade = 'C';
    } else {
        grade = 'F';
    }

    let status="PASS";
    for(let c=0 ;c < marks.length ; c++ )
    {
        if( marks[c] <= 30){
            status='FAIL';
            grade='BACKLOG';
            break;
        }
    }

    console.log("grade"+ grade);
    console.log("status" + status);

    if(grade=="BACKLOG"){
        document.getElementById('greet').innerHTML=`
        <h2 style="color: red;">Sorry..... <br>You fail in Exam</h2>
    
    `
    }else {
        document.getElementById('greet').innerHTML=`
        <h2 style="color: green;">Congratulation..... <br>You pass in Exam</h2>
    `
    }

    document.getElementById('result').innerHTML=`
    <style>
    .result-table {
        border-collapse: collapse;
        width: 100%;
    }

    .result-table td,
    .result-table th {
        border: 0.1rem solid green;
        padding: 0.2rem;
    }

    .result-table tr:nth-child(even) {
        background-color: rgb(241, 235, 235)
    }

    .result-table th {
        padding: 0.2rem;
        text-align: center;
        background-color: green;
        color: white;
    }
</style>
    <table class="result-table">
    <tr>
        <th>Subject</th>
        <th>Marks</th>
    </tr>
    <tr>
        <td>Mathamatics</td>
        <td>${marks[0]}</td>
    </tr>
    <tr>
        <td>Physics</td>
        <td>${marks[1]}</td>
    </tr>
    <tr>
        <td>Chemistry</td>
        <td>${marks[2]}</td>
    </tr>
    <tr>
        <td>English</td>
        <td>${marks[3]}</td>
    </tr>
    <tr>
        <td>Computer</td>
        <td>${marks[4]}</td>
    </tr>
</table>
<br>
<table class="result-table">
    <tr>
        <td>Total</td>
        <td>${total}</td>
    </tr>
    <tr>
        <td>Percentage</td>
        <td>${pr.toFixed(2)}</td>
    </tr>
    <tr>
        <td>Grade</td>
        <td>${grade}</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>${status}</td>
    </tr>
</table>
    `

    // let M = document.getElementById("M").value;
    // let P = document.getElementById("P").value;
    // let C = document.getElementById("C").value;
    // let E = document.getElementById("E").value;
    // let CO = document.getElementById("CO").value;

    // console.log(M);

    // let total = parseFloat(M) + parseFloat(P) + parseFloat(C) + parseFloat(E) + parseFloat(CO);
    // console.log(total);

    // let pr = (total / 500) * 100;
    // console.log(pr);
    // let grade = "";
    // if (pr <= 100 && pr >= 80) {
    //     grade = 'A';
    // } else if (pr <= 79 && pr >= 60) {
    //     grade = 'B';
    // } else if (pr <= 59 && pr >= 40) {
    //     grade = 'C';
    // } else {
    //     grade = 'F';
    // }

    // document.getElementById('result').innerHTML=`
    // out of 500 your total is ${total} and percentage is ${pr}%. your grade is ${grade}.
    // `
}


