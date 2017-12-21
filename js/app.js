$(document).ready(function () {

  $("#username").keyup(function(){
    var username = $("#username").val().length;
      if(username<=3){
      $("#user").show();
    }
      else if(username>3){
        $("#user").hide();
    }

  });

  $("#password").keyup(function(){
    var password = $("#password").val().length;
      if(password<=6){
      $("#pass").show();
    }
      else if(password>6){
        $("#pass").hide();
    }

  });

  $("#confirm_password").keyup(function(){
    var confirm = $("#confirm_password").val();
    var pass=$("#password").val();
          if(confirm==pass){
        $("#confirm").hide();
    }

  });

});
