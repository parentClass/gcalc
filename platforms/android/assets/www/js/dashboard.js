$(document).ready(function(){
	if(window.localStorage.getItem('isLoggedIn') == 1){
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

				var proficiency = 0;

				for(var i = 0; i < Object.keys(data).length; i++){
					if(data[i]['number_grade'] >= 1.0 && data[i]['number_grade'] <= 1.25){
						proficiency = 10;
					}else if(data[i]['number_grade'] >= 1.25 && data[i]['number_grade'] <= 1.50){
						proficiency = 9;
					}else if(data[i]['number_grade'] >= 1.50 && data[i]['number_grade'] <= 1.75){
						proficiency = 8;
					}else if(data[i]['number_grade'] >= 1.75 && data[i]['number_grade'] <= 2.00){
						proficiency = 7;
					}else if(data[i]['number_grade'] >= 2.00 && data[i]['number_grade'] <= 2.25){
						proficiency = 6;
					}else if(data[i]['number_grade'] >= 2.25 && data[i]['number_grade'] <= 2.50){
						proficiency = 5;
					}else if(data[i]['number_grade'] >= 2.50 && data[i]['number_grade'] <= 2.75){
						proficiency = 4;
					}else if(data[i]['number_grade'] >= 2.75 && data[i]['number_grade'] <= 3.00){
						proficiency = 3;
					}else{
						proficiency = 1;
					}

					console.log(data[i]['number_grade']);

					container.append("<div class='card' style='background-color:#"+colors[Math.floor((Math.random()*19)+1)]+";'><div class='card-content white-text'><span class='card-title'><span class='right'>"+ data[i]['letter_grade'] + " " + data[i]['number_grade'] + "</span><br/><small>" + data[i]['subject_code'] + "</small><br/><small>" + data[i]['subject_title'] + "</small></span><p id='desc'>" + data[i]['subject_description'] + "</p><br/>Note:<p id='note'>" + data[i]['note'] + "</p></div><div class='card-action'><p class='center white-text'>Proficiency: " + proficiency + "/10</p></div></div>");
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

		$('.sign-out').on('click',function(){
			window.localStorage.removeItem('username');
			window.localStorage.removeItem('isLoggedIn');
			window.location='../index.html';
		});
	}else{
		window.location='../index.html';
	}
});