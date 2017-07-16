$(document).ready(function(){

	$.ajax({
        type: "GET",
        url: "https://photopost.000webhostapp.com/api.gcalc/api.gcalc/src/public/api/v1/retrieve_grades/daniels",
        success : function(data){
            var data = JSON.parse(data);
			console.log(data);
        },
        error : function(jqXHR, textStatus, errorThrown){
            alert(jqXHR + " " + textStatus + " " + errorThrown);
            alert(JSON.parse(jqXHR));
        }
    });

	$(".button-collapse").sideNav();
	$('.modal').modal();

	$('.calculate-semester').on('click',function(){
		$('.button-collapse').sideNav('hide');
	});

	$('.takedown').on('click',function(){
		$.ajax({
            type: "POST",
            url: "https://photopost.000webhostapp.com/api.gcalc/api.gcalc/src/public/api/v1/insertion",
            data: "username=" + window.localStorage.getItem('username') + 
            		"&subject_code=" + $('#subject_code').val() +
            		"&subject_title=" + $('#subject_title').val() + 
            		"&subject_description=" + $('#subject_description').val() +
            		"&subject_grade=" + $('#subject_grade').val() + 
            		"&subject_units=" + $('#subject_units').val() +
            		"&subject_note=" + $('#subject_note').val(),
            success : function(data){
                var data = JSON.parse(data);
  				Materialize.toast('Success!', 1500) // 4000 is the duration of the toast
                location.reload();
            },
            error : function(jqXHR, textStatus, errorThrown){
                alert(jqXHR + " " + textStatus + " " + errorThrown);
                alert(JSON.parse(jqXHR));
            }
        });
	});
});