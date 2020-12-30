 // for date 
      // function myFunction() {
      //   var d = new Date();
      //   var n = d.toLocaleDateString();
      //   document.getElementById("currentDay").innerHTML = n;
      // }

      // for date and time W3Schools, moment

      moment().format("dddd, MMMM Do");
      let now = moment().format("dddd, MMMM Do");
      function myFunction() {
        var d = new Date();
        var n = d.toLocaleString();
        }

        myFunction();
        document.getElementById("currentDay").innerHTML = now;

        console.log (myFunction);


       

















        
    
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
        





