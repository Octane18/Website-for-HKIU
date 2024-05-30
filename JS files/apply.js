document.addEventListener("DOMContentLoaded", function () {

    var table_initial = document.querySelector("table").innerHTML;
    var heading_focus = "color: black; background-color: white; ";
    var heading_unfocus = "color: grey; background-color: lightblue;";
    var Arr_button = document.querySelectorAll("button");
    var Arr_ranks = new Array(10);
    var Arr_majors = new Array();
    var Rank_highest = 0;
    var number_of_majors= 0;
    var recentChangeTime;
    document.getElementById("Engineeringheading").addEventListener("click", function() {
        document.getElementById('Engineeringheading').setAttribute("style", heading_focus);
        document.getElementById('Sciencesheading').setAttribute("style", heading_unfocus);
        document.getElementById('InterDischeading').setAttribute("style", heading_unfocus);
        document.getElementById('Engineering').setAttribute("style", "display: inline-block;");
        document.getElementById('Sciences').setAttribute("style", "display: none;");
        document.getElementById('InterDisc').setAttribute("style", "display: none;");
    });
    document.getElementById("Sciencesheading").addEventListener("click", function() {
        document.getElementById('Engineeringheading').setAttribute("style", heading_unfocus);
        document.getElementById('Sciencesheading').setAttribute("style", heading_focus);
        document.getElementById('InterDischeading').setAttribute("style", heading_unfocus);
        document.getElementById('Engineering').setAttribute("style", "display: none;");
        document.getElementById('Sciences').setAttribute("style", "display: inline-block;");
        document.getElementById('InterDisc').setAttribute("style", "display: none;");    
    })
    document.getElementById("InterDischeading").addEventListener("click", function() {
        document.getElementById('Engineeringheading').setAttribute("style", heading_unfocus);
        document.getElementById('Sciencesheading').setAttribute("style", heading_unfocus);
        document.getElementById('InterDischeading').setAttribute("style", heading_focus);
        document.getElementById('Engineering').setAttribute("style", "display: none;");
        document.getElementById('Sciences').setAttribute("style", "display: none;");
        document.getElementById('InterDisc').setAttribute("style", "display: inline-block;");

    })

   




    for (var counter = 0; counter<Arr_button.length; counter++) {
        Arr_button[counter].addEventListener("click", ButtonVal);
    }

    function ButtonVal() {
        event.preventDefault();
    
        var chosen_major = this.previousElementSibling.previousElementSibling.innerHTML;
        var chosen_rank = this.previousElementSibling.value;

        
        var chosen_collegeid = this.parentNode.parentNode.id;
        var chosen_collegename;

        if (Arr_majors.indexOf(chosen_major)!=-1) {
            alert("You have already chosen this major");
            return;

        }
        if (Number(chosen_rank) === NaN || chosen_rank==""){
            alert("Please enter rank of chosen major");
            return;
        }
        if (Number(Math.floor(chosen_rank))!= Number(chosen_rank)){
            alert("Please enter rank of chosen major");
            return;
        }
        if (Number(chosen_rank)<1 || Number(chosen_rank) > 10 ){
            alert("Rank out of range. Please enter the rank of chosen major between 1 and 10");
            return;
        }
        if (Arr_ranks.indexOf(chosen_rank)!=-1){
            alert("You have already chosen this rank");
            return;
        }
        if (chosen_rank>Rank_highest) {
            Rank_highest = chosen_rank;
        }
        Arr_ranks[chosen_rank] = chosen_rank;
        Arr_majors.push(chosen_major);

        if (chosen_collegeid==="Engineering"){
            chosen_collegename = "College Of Engineering";
        }
        else if(chosen_collegeid === "Sciences"){
            chosen_collegename = "College Of Sciences";}

        else if (chosen_collegeid==="InterDisc") {
            chosen_collegename = "College Of Interdisciplinary Studies";
        }
      

        document.getElementById(chosen_rank).innerHTML = "<td>" +chosen_collegename+ "</td><td>" + chosen_major + "</td><td>" + chosen_rank + "</td>";
        table_append();
        var alertMessage;
        switch (chosen_rank) {
            case "1": alertMessage= "You have chosen " + chosen_major + " as your " + chosen_rank + "st" + " major in " + chosen_collegename + " successfully"; break;
            case "2": alertMessage = "You have chosen " + chosen_major + " as your " + chosen_rank + "nd" + " major in " + chosen_collegename + " successfully"; break;
            case "3": alertMessage = "You have chosen " + chosen_major + " as your " + chosen_rank + "rd" + " major in " + chosen_collegename + " successfully"; break;
            default: alertMessage= "You have chosen " + chosen_major + " as your " + chosen_rank + "th" + " major in " + chosen_collegename + " successfully"; break;
        }

        alert(alertMessage);
    }


    

 
    function CheckGaps(In_arr) {
        Arr_gaps = new Array();
        for (let counter = 1; counter < Rank_highest; counter++) {
            if (In_arr[counter]==undefined){
                Arr_gaps.push(counter);
            }
        }
        return Arr_gaps;
    }


    function CurrentTime() {
        var new_Date = new Date();
        var date, hours, minutes, seconds;
        date = new_Date.getFullYear() + "/" + (new_Date.getMonth()+1) + "/"+ (new_Date.getDate()); 
        hours = new_Date.getHours(); minutes = new_Date.getMinutes(); seconds = new_Date.getSeconds(); // getting all of the hours, minutes and seconds
        //inserting 0 at the end of less than 10 values for a general format
        if (hours<10) {hours = "0" + hours;}
        if (minutes<10) {minutes = "0" + minutes;}
        if (seconds<10) {seconds = "0" + seconds;}

        var time = hours + ":" + minutes + ":" + seconds;
        return (date + " " + time);
    }
    function table_append() {
        recentChangeTime = CurrentTime();
        document.getElementsByClassName("changeTime")[0].innerHTML = "Last change time: " + recentChangeTime;

        number_of_majors = Arr_majors.length;
    }
       
    document.getElementById("submit").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("TotalMajors").innerHTML = "Total Number of Majors Applied: " + number_of_majors;
        gap_check = CheckGaps(Arr_ranks);
        if (number_of_majors==0) {
            tableAlertmessage = "You have not chosen any major";
        }
        else if (gap_check.length !=0) {
            if (gap_check[0]==1) {
                tableAlertmessage = "You have not chosen your 1st chosen major, ";
            }
            else if (gap_check[0]==2) {
                tableAlertmessage = "You have not chosen your 2nd chosen major, ";
            }
            else if (gap_check[0]==3) {
                tableAlertmessage = "You have not chosen your 3rd chosen major, ";
            } 
            else {
                tableAlertmessage = "You have not chosen your " + gap_check[0] + "th chosen major, ";

            }
        

            for (var x = 1; x<gap_check.length; x++){
                switch (gap_check[x]) { // iterating in a loop through all the empty values
                    case 2: tableAlertmessage = tableAlertmessage + "and 2nd chosen major, "; break;
                    case 3: tableAlertmessage = tableAlertmessage + "and 3rd chosen major, "; break;
                    default: tableAlertmessage = tableAlertmessage + "and " + gap_check[x] + "th chosen major, "; break;

                }
            }
            tableAlertmessage = tableAlertmessage + "you can not leave any gap(s) between your majors";
        }
        else {
            tableAlertmessage = "You have successfully submitted your application at time " + CurrentTime();

        }
        document.getElementById("TableErrorMessage").innerHTML = tableAlertmessage;
    
    })

    document.getElementById("reset").addEventListener("click", function(){
        event.preventDefault();
        Rank_highest = 0;
        Arr_ranks = new Array(10);
        Arr_majors = new Array();
        number_of_majors = 0;
        document.getElementById("TableErrorMessage").innerHTML = "";
        document.querySelector("table").innerHTML = table_initial;
        document.getElementById("TotalMajors").innerHTML = "Total Number of Majors Applied: 0";
        document.getElementById("changeTime").innerHTML = "Last Change Time:" + recentChangeTime;
        
    })


})
