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


    function enter () {
        $("#container").html ("");
        for (let i = 0; i < workday.length; i++) {
            // made into ID
            let row = $('<#div>');
            let textarea = $('<textarea>');
            let label = $('<label>');
            let button = $('<button>');
            let icon = $('<i>');
            icon.attr ('class', 'fas fa-save');
            button.attr ('class', 'saveBtn');
            button.attr ('id', 'save');
            button.append ('icon');
            row.attr ('class', 'row');
            label.text (workday [i], time);
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
        // added render
        // render (workday);
        init ();
        function init() {
            JSON.parse (localStorage.getItem('input'));
            // render ();
        }

        let currentHour = moment ().get('hour');

        $('button').on('click'), function () {
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

        }

        console.log(currentHour);


        


















    
    // https://date-fns.org/docs/Getting-Started
    // import { format, compareAsc } from 'date-fns'
    // format(new Date(2014, 1, 11), 'MM/dd/yyyy')
    // //=> '02/11/2014'
    // const dates = [
    //   new Date(1995, 6, 2), 
    //   new Date(1987, 1, 11), 
    //   new Date(1989, 6, 10)
    // ]
    // dates.sort(compareAsc)
    
    // import addDays from 'date-fns/addDays'
    // import { formatDistance, subDays } from 'date-fns'
    
    // formatDistance(subDays(new Date(), 3), new Date())
    
    
// declared buttonSave
    // const buttonSave= $(".saveBtn")
    // localStorage.setItem('9am', buttonSave);

    // localStorage.setItem('9am', buttonSave;

    // var cardBody;

    // cardBody.innerHTML = '<p class="text"> ${localStorage.getItem("9am")}  </p>'

    //                     const buttonSubmit = document.getElementById('9am');
    //                                 buttonSubmit.addEventListener('click', function(event) {
    //                                     event.preventDefault();
    //                                         const name = nameEl.value.trim();
    //                                      localStorage.setItem('9am', text);
    //                     })

    


    
//     const buttonSubmit = document.getElementById('form-submit');
//             buttonSubmit.addEventListener('click', function(event) {
//                 event.preventDefault();
//                 if(buttonSubmit.value === 'next') {
//                     const name = nameEl.value.trim();
//                     const email = emailEl.value.trim();
    
//                     localStorage.setItem('9am', name);
//                     localStorage.setItem('email', email);
// //
    
//                     buttonSubmit.value = 'submit';
//                     buttonSubmit.textContent = 'Submit';
//                     pageOne.classList.add('d-none');
//                     pageTwo.classList.remove('d-none');
//                     formProgress.setAttribute('style', 'width:50%');
//                     formProgress.setAttribute('aria-valuenow', '50');
//                 } else if(buttonSubmit.value === 'submit') {
//                     const favoriteAnimal = document.querySelector("[name=animal]:checked");
//                     localStorage.setItem('favoriteAnimal', favoriteAnimal.value);
//                     const cardBody = document.querySelector('.card-body');
//                     cardBody.innerHTML = `
//                         <h2>Thank you, ${localStorage.getItem('name')}</h2>
//                         <p class="lead">
//                             We will email you at ${localStorage.getItem('email')} pictures of
//                             your favorite animal, the ${localStorage.getItem('favoriteAnimal')}
//                         </p>
//                     `;
    
    
    //     checkUpdateColors = function() {
    //  var d = newDate();
    //  var hourCompare = d.getHours();
    // if (hourCompare >= 8 && hourCompare <= 22) {
    // 		//day time
    //     $('#10am').css("background-color", "yellow");
    //     $('#10am').css("background-color", "blue");
    // } else {
    // 		//night time
    //     $('#9am').css("background-color", "blue");
    //     $('#9am').css("background-color", "red");
    // }
    // }();
    
    // setInterval(function() {
    //    checkUpdateColors();  
    // }, 3000);
        




    
