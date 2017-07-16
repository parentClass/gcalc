$(document).ready(function(){

   window.localStorage.removeItem("isLoggedIn");

   $(".sign-btn").on("click",function(){

        var options = { dimBackground: true };

        SpinnerPlugin.activityStart("Patience please ...", options);

        var username = $("#username").val();
        var password = $("#passkey").val();

        $.ajax({
            type: "POST",
            url: "https://photopost.000webhostapp.com/api.gcalc/api.gcalc/src/public/api/v1/validate_user",
            data: "username=" + username + "&passkey=" + password,
            success : function(data){
                var data = JSON.parse(data);

                SpinnerPlugin.activityStop();

                if(data[0]['is_valid']){
                    window.localStorage.setItem("username", "");

                    window.localStorage.setItem("isLoggedIn", 1);
                    window.localStorage.setItem("username", username);
                    window.location="pages/dashboard.html"
                }else{
                    navigator.notification.alert(
                        'Sorry, You\'ve entered a wrong credentials',  // message
                        '',
                        'Notification',            // title
                        'Close'                  // buttonName
                    );
                }
                
            },
            error : function(jqXHR, textStatus, errorThrown){
                alert(jqXHR + " " + textStatus + " " + errorThrown);
                alert(JSON.parse(jqXHR));
            }
        });
   });
});