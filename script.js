 // for date . had to move to html script bc date was NOT displaying. 
      // function myFunction() {
      //   var d = new Date();
      //   var n = d.toLocaleDateString();
      //   document.getElementById("currentDay").innerHTML = n;
      // }
      // for date and time W3Schools, moment
    //   moment().format("dddd, MMMM Do");
    //   let now = moment().format("dddd, MMMM Do");
    //   function myFunction() {
    //     var d = new Date();
    //     var n = d.toLocaleString();
    //     }
    //     myFunction();
    //     document.getElementById("currentDay").innerHTML = now;
    //     console.log (myFunction);

    var workday= [
            { time: "9AM",
            input: "",
            },
            { time: "10M",
            input: "",
            },
            { time: "11AM",
            input: "",
            },
            { time: "12PM",
            input: "",
            },
            { time: "1PM",
            input: "",
            },
            { time: "2PM",
            input: "",
            },
            { time: "3PM",
            input: "",
            },
            { time: "4PM",
            input: "",
            },
            { time: "5PM",
            input: "",
            },
    ]

    // adding textarea to local storage 
    document.getElementById("save1").addEventListener("click", function ()
    {
        var time9 = document.getElementById("9am").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("9am", time9) ;
        console.log(localStorage);
    } );

    document.getElementById("save2").addEventListener("click", function ()
    {
        var time10 = document.getElementById("10am").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("10am", time10) ;
        console.log(localStorage);
    } );

    document.getElementById("save3").addEventListener("click", function ()
    {
        var time11 = document.getElementById("11am").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("11am", time11) ;
        console.log(localStorage);
    } );

    document.getElementById("save4").addEventListener("click", function ()
    {
        var time12 = document.getElementById("12pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("12pm", time12) ;
        console.log(localStorage);
    } );

    document.getElementById("save5").addEventListener("click", function ()
    {
        var time1 = document.getElementById("1pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("1pm", time1) ;
        console.log(localStorage);
    } );

    document.getElementById("save6").addEventListener("click", function ()
    {
        var time2 = document.getElementById("2pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("2pm", time2) ;
        console.log(localStorage);
    } );

    document.getElementById("save7").addEventListener("click", function ()
    {
        var time3 = document.getElementById("3pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("3pm", time3) ;
        console.log(localStorage);
    } );

    document.getElementById("save8").addEventListener("click", function ()
    {
        var time4 = document.getElementById("4pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("4pm", time4) ;
        console.log(localStorage);
    } );

    document.getElementById("save9").addEventListener("click", function ()
    {
        var time5 = document.getElementById("5pm").value ;
        //localStorage["user"] = user ;
        localStorage.setItem("5pm", time5) ;
        console.log(localStorage);
    } );

    // trying to get local storage to stay after refresh 
    // "time9 " needs to match 9am. removed JSON.parse bc can not work on strings
    // $jQuery selecting the whole element. .val is setting the value of 9am. that is being set equal to local storage of 9am
    $('#9am').val((localStorage.getItem('9am')));
    $('#10am').val((localStorage.getItem('10am')));
    $('#11am').val((localStorage.getItem('11am')));
    $('#12pm').val((localStorage.getItem('12pm')));
    $('#1pm').val((localStorage.getItem('1pm')));
    $('#2pm').val((localStorage.getItem('2pm')));
    $('#3pm').val((localStorage.getItem('3pm')));
    $('#4pm').val((localStorage.getItem('4pm')));
    $('#5pm').val((localStorage.getItem('5pm')));

    function enter () {
        $("#container").html ("");
        for (let i = 0; i < workday.length; i++) {
            let row = $('<div>');
            let textarea = $('<textarea>');
            let label = $('<label>');
            let button = $('<button>');
            let icon = $('<i>');
            icon.attr ('class', 'fas fa-save');
            button.attr ('class', 'saveBtn');
            button.attr ('id', 'save');
            button.append ('icon');
            row.attr ('class', 'row');
            label.text (workday[i].time);
            let realNum = parseInt(workday [i].time);
            let input = workday [i].input;
            label.attr('id', 'time');
            row.append(label);
            textarea.attr ('id', realNum);
            textarea.text (input);
            row.append (textarea);
            row.append (button);
            $('.container').append(row);
        }
        console.log(workday);

        workday= JSON.parse (localStorage.getItem ("input))"));
    }
      
        init ();
        function init() {
            JSON.parse (localStorage.getItem('time1'));
        }

        enter();

        let currentHour = moment ().get('hour');

        $('button').on('click'), function (e) {
            e.preventDefault();
            if ($ (this). hasclass ('saveBtn')) {
                let textVal = $(this).parent('row').find('textarea');
                let indexVal = textVal.attr ('value');
                let indexId = textVal.attr ('id');
                let obj = workday.find (
                    (o) => o.time === indexId + 'AM' || o
                );
                Obj.input = textVal.val ();
                console.log(workday);

                $('textarea').each(function () {
                    x += this.value.length;
                });

                if (x=== 0) {
                    alert('error');
                    location.reload ();
                } else {
                    localStorage.setItem('input', JSON.stringify(workday));
                    console.log(workday);

                }
            }
        }

        switch (currentHour) {
            case 9:
            $("#9am").addClass("present");
            $("textarea").addClass("future");
            if ($("#9am").hasClass("future")) {
              $("#9am").removeClass("future");
            }
            break;
            case 10:
            $("#9am").addClass("past");
            $("#10am").addClass("present");
            $("textarea").addClass("future");
            if ($("#10am").hasClass("future")) {
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");

            }
            break;
            case 11:
            $("#9am").addClass("past");
            $("#10am").addClass("past");
            $("#11am").addClass("present");
            $("textarea").addClass("future");
            if ($("#11am").hasClass("future")) {
              $("11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            case 12:
                $("#9am").addClass("past");
                $("#10am").addClass("past"); 
                $("#11am").addClass("past"); 
            $("#12pm").addClass("present");
            $("textarea").addClass("future");
            if ($("#12pm").hasClass("future")) {
              $("#12pm").removeClass("future");
              $("11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            case 13:
                $("#9am").addClass("past");
                $("#10am").addClass("past"); 
                $("#11am").addClass("past"); 
                $("#12pm").addClass("past"); 
            $("#1pm").addClass("present");
            $("textarea").addClass("future");
            if ($("#1pm").hasClass("future")) {
              $("#12pm").removeClass("future");
              $("11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            case 14:
                $("#9am").addClass("past");
                $("#10am").addClass("past"); 
                $("#11am").addClass("past"); 
                $("#12pm").addClass("past"); 
                $("#1pm").addClass("past"); 
                $("#2pm").addClass("present");
                $("textarea").addClass("future");
            if ($("#2pm").hasClass("future")) {
              $("#2pm").removeClass("future");
              $("#1pm").removeClass("future");
              $("#12pm").removeClass("future");
              $("11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            case 15:
                $("#9am").addClass("past");
                $("#10am").addClass("past"); 
                $("#11am").addClass("past"); 
                $("#12pm").addClass("past"); 
                $("#1pm").addClass("past"); 
                $("#2pm").addClass("past"); 
                $("#3pm").addClass("present");
                $("textarea").addClass("future");
            if ($("#3pm").hasClass("future")) {
              $("#3pm").removeClass("future");
              $("#2pm").removeClass("future");
              $("#1pm").removeClass("future");
              $("#12pm").removeClass("future");
              $("11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            case 16:
                // adding case 16 with these times to add the past class
                $("#9am").addClass("past");
                $("#10am").addClass("past");
                $("#11am").addClass("past");
                $("#12pm").addClass("past");
                $("#1pm").addClass("past");
                $("#2pm").addClass("past");
                $("#3pm").addClass("past");
                $("#4pm").addClass("present");
                $("textarea").addClass("future");
                if ($("#4pm").hasClass("future")) {
                  $("#9am").removeClass("future");
                  $("#10am").removeClass("future");
                  $("#11am").removeClass("future");
                  $("#12pm").removeClass("future");
                  $("#1pm").removeClass("future");
                  $("#2pm").removeClass("future");
                  $("#3pm").removeClass("future");
                  $("#4pm").removeClass("future");
                }
                break;
            case 17:
                // have to add the past timing for all the previous times
                $("#9am").addClass("past");
                $("#10am").addClass("past");
                $("#11am").addClass("past");
                $("#12pm").addClass("past");
                $("#1pm").addClass("past");
                $("#2pm").addClass("past");
                $("#3pm").addClass("past");
                $("#4pm").addClass("past");
            $("#5pm").addClass("present");
            $("textarea").addClass("future");
            if ($("#5pm").hasClass("future")) {
                // adding remove class for past time
              $("#5pm").removeClass("future");
              $("#4pm").removeClass("future");
              $("#3pm").removeClass("future");
              $("#2pm").removeClass("future");
              $("#1pm").removeClass("future");
              $("#12pm").removeClass("future");
              $("#11am").removeClass("future");
              $("#10am").removeClass("future");
              $("#9am").removeClass("future");
            }
            break;
            

            default:
                $("textarea").addClass(".past");


        }

        console.log(currentHour);




    
