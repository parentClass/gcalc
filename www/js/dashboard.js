$(document).ready(function(){
	if(window.localStorage.getItem('isLoggedIn') == 1){
		var colors = ['ef5350','ec407a','ab47bc','7e57c2'
					,'5c6bc0','42a5f5','29b6f6','26c6da','26a69a','66bb6a'
					,'9ccc65','d4e157','ffca28','ffa726','ff7043'
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
						suggestion = "What more can I say? You know the basics, the fundamentals as well as the advance topics. Why not try to share it with other people? Use your mastery to " +
										"do good things. Remember \'with great knowledge comes great responsibility\'";
					}else if(data[i]['number_grade'] >= 1.25 && data[i]['number_grade'] <= 1.50){
						proficiency = 9;
						suggestion = "Have you tried doing some challenges online or take some online exams to assess everything you've learned about this subject? Can't wait to see you apply this in real life. " +
										"Ever taught about applying it in real life? It's every effective.";
					}else if(data[i]['number_grade'] >= 1.50 && data[i]['number_grade'] <= 1.75){
						proficiency = 8;
						suggestion = "Bronze knowledge about " + data[i]['subject_title'] + " so proud of you! Challenges are always open online. You might wanna test your skills about this topic. Good luck!";
					}else if(data[i]['number_grade'] >= 1.75 && data[i]['number_grade'] <= 2.00){
						proficiency = 7;
						suggestion = "Mastery is almost there. What possibly could be the topics that you're lacking at? You have to browse the more advance topics. Almost there!";
					}else if(data[i]['number_grade'] >= 2.00 && data[i]['number_grade'] <= 2.25){
						proficiency = 6;
						suggestion = "Keep going your 4 steps away from being so much proficient about this subject. No one can stop you from learning, continue your eagerness to learn more " +
										"about this subject. Don't forget to smile and aim more.";
					}else if(data[i]['number_grade'] >= 2.25 && data[i]['number_grade'] <= 2.50){
						proficiency = 5;
						suggestion = "Proficiency in this subject is half met time for you to step up your understanding about this subject. This might help you " +
										"<a href='https://www.google.com.ph/search?q="+ data[i]['subject_title']+"+Advance'>"+ data[i]['subject_title'] +"</a>. Good luck!";
					}else if(data[i]['number_grade'] >= 2.50 && data[i]['number_grade'] <= 2.75){
						proficiency = 4;
						suggestion = "Not bad! You can always make your grade high. Basic understanding about " + data[i]['subject_title'] + " is a good thing! Heads up, focus on to the top and feet " +
										"on the ground. Suggest you take a nap and think about the fundamentals about this subject.";
					}else if(data[i]['number_grade'] >= 2.75 && data[i]['number_grade'] <= 3.00){
						proficiency = 3;
						suggestion = "Almost failed in this subject. Doing extra activities peratining to the subject matter will help you increase your grade. There's online exams about this subject " +
									 	"and tons of tutorials on the internet from basic up to mastery you just have to stand-up and break the laziness but never forget to clear your mind.";
					}else{
						proficiency = 1;
						suggestion = "You really have to start focusing on this subject. Do some extra research about " + 
										data[i]['subject_title'] + " <a href='https://google.com'>Googling/a> it is a really big help also <a href='https://wikipedia.com'>Wikipedia</a> to have some " +
										"basic information about the topic. You tired or lazy? Take a break momentarily and get back on to this subject, Never get use to the break!";
					}

					console.log(data[i]['number_grade']);

					container.append("<div class='card' style='background-color:#"+colors[Math.floor((Math.random()*18)+1)]+";'><div class='card-content white-text'><span class='card-title'><span class='right'>"+ data[i]['letter_grade'] + " " + data[i]['number_grade'] + "</span><br/><div class='title center'><span class='code'>" + data[i]['subject_code'] + "</span><br/>" + toTitleCase(data[i]['subject_title']) + "</div></span><div class='center'><p id='desc'>" + data[i]['subject_description'] + "</div><br/>Note:<p id='note'>" + data[i]['note'] + "</p><p>Suggestion: <br/><div class='suggest'>" + suggestion + "</div></p></div><div class='card-action'><p class='center white-text'>Proficiency: " + proficiency + "/10</p></div></div>");
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

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}
});