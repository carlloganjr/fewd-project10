$('document').ready(function() {

  $.ajax({
    url: 'https://randomuser.me/api/?results=12&inc=name,email,picture,location,dob,phone&noinfo&nat=us',
    dataType: 'json',
    success: function(data) {
      console.log(data);



      for(let i = 0; i < data.results.length; i += 1) {

        let employeeDiv = document.createElement('DIV');
        let firstName = data.results[i].name.first;
        let lastName = data.results[i].name.last;
        let photo = data.results[i].picture.medium;
        let email = data.results[i].email;
        let city = data.results[i].location.city;
        let dob = data.results[i].dob;
        let phone = data.results[i].phone;

        let divHTML = '<img class="smile" src="' + photo +
        '" alt="a picture of ' + firstName + '">';
        divHTML += '<div class="info">';
        divHTML += '<h2 class="name">' + firstName + " " + lastName + '</h2>';
        divHTML += '<a class="email" href="mailto:' + email + '">' +
        email + '</a>';
        divHTML += '<p class="city">' + city + '</p>';
        divHTML += '</div>';

        document.body.appendChild(employeeDiv);
        employeeDiv.classList.add('employeeDiv');
        employeeDiv.innerHTML = divHTML;
      }


    }
  });
});
