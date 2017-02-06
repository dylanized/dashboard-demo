/* Answers Dev Homepage JS */

// build sites list
			
	// get the template
	var template = $('#row-template').html();
	
	// compile the template
	var templateScript = Handlebars.compile(template);
	
	// inject the data
	var html = templateScript(context);
	
	// insert the html
	$("#sites-table").append(html);		

// datetime section

	var $dt = $('.datetime');

	function updateDatetime() {

		// update the datetime
		$dt.text(moment().format('dddd MMM Do YYYY, h:mm a'));
	
		// wait 10 seconds and then do it again
		setTimeout(updateDatetime, 10000);	
		
	}
	
	updateDatetime();