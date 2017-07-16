$(document).ready(function(){
	var colors = ['ef5350','ec407a','ab47bc','7e57c2'
					,'5c6bc0','42a5f5','29b6f6','26c6da','26a69a','66bb6a'
					,'9ccc65','d4e157','ffee58','ffca28','ffa726','ff7043'
					,'8d6e63','bdbdbd','78909c'];

	$.ajax({
        type: "GET",
        url: "https://photopost.000webhostapp.com/api.gcalc/api.gcalc/"+
        		"src/public/api/v1/retrieve_grades/" + window.localStorage.getItem('username'),
        success : function(data){
            var data = JSON.parse(data);
			var container = $('.card-container');

			$('.name').text(window.localStorage.getItem('username'));

			for(var i = 0; i < Object.keys(data).length; i++){
				container.append("<div class='col s12 card' style='background-color:#"+colors[i]+";'><div class='card-content white-text'><span class='card-title'><code class='right'>"+ data[i]['letter_grade'] + " " + data[i]['number_grade'] + "</code><br/><small>" + data[i]['subject_code'] + "</small><br/><small>" + data[i]['subject_title'] + "</small></span><p id='desc'>" + data[i]['subject_description'] + "</p><br/>Note:<p id='note'>" + data[i]['note'] + "</p></div><div class='card-action'><p class='center white-text'>Proficiency: 10/10</p></div></div>");
			}

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