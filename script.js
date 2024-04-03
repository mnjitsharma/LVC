function homepagefun()
{
    alert("Welcome to Homepage.")
}
function contactfun()
{
    alert("Welcome to Contact Page.")
}
function indexfun()
{
    alert("Welcome to Landing/Index Page.")
}
function galleryfun()
{
    alert("Welcome to Gallery Page")
}
function registrationfun()
{
    alert("Welcome to Registration.")
}

function validate()
{
    var name = document.getElementById("nameid").value;
    // var name = form1.name.value;
    if (name == "")
    {
        alert("Please! enter your Name.");
        form1.name.focus();
    }
    else
    {
        alert("Welcome "+ name)
    }
}


function calculateMark()
{
    var mark1 = parseInt(document.getElementById("mark1").value);
    var mark2 = parseInt(document.getElementById("mark2").value);
    var mark3 = parseInt(document.getElementById("mark3").value);

    let totalMark = mark1 + mark2 + mark3;
    let percent = (totalMark/3).toFixed(2);
    let result;

    if (mark1 && mark2 && mark3){
        if (percent >= 80)
        {
            result = "1st Division";
        }
        
        else if(percent >= 60 & percent < 80){
        result = "2nd Division";
        }
    
        else if(percent >=40 & percent < 60)
        {
            result = "3rd Division";
        }

        else
        {
            result = "Fail";
        }
        document.getElementById("showResult").innerHTML= "Total Mark: "+totalMark +" out of 300.<br>Percentage: " + percent + " % <br>Result: " + result;
    }

    else{
        alert("Please, Enter the value.");
    }
    
}

function empsalary()
{
    var salary = parseInt(document.getElementById("salaryid").value);
    var perform = document.getElementById("selectid").value;
    var name1 = document.getElementById("nameid").value;
    var bonus
    var totalSalary
    if (name1 && salary)
    {
        if (perform =="A")
        {
            bonus = 0.3 * salary;
        }
    
        else if(perform == "B")
        {
            bonus = 0.1 * salary;
        }
        
        else if(perform == "C")
        {
            bonus = 0
        }
        
        else
        {
            alert("Please select performance");
        }
        totalSalary = salary + bonus;
        document.getElementById("showResult").innerHTML= "Bonus: "+bonus +"  Total Salary: " + totalSalary;
    }
    
    else if(salary)
    {
        alert("Please, Enter the name first!!!")
    }
    else if(name1)
    {
        alert("Please, Enter the salary first!!!")
    }

    else
    {
        alert("Please, Enter the both values first!!!")
    }   
}

function onlineTest()
{
    // var q2 = documnet.getElementsByName("q2");
    question =["q1", "q2"]
    var totalScore = 0;
    question.forEach(e => {
        var test = document.getElementsByName(e);
        
        test.forEach(element => {
            if (element.checked)
            {
                if(element.value == "true")
                {
                    totalScore += 2;
                }
            }
        });
    })
    document.getElementById("showResult").innerHTML= "Total Score: " + totalScore + " out of 4.";
}

function instruction()
{
    window.open("instruction.html", "", "width=600 height=400");
}