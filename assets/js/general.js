$(document).ready(function() {
	$("#myModal").modal({
		backdrop: true
	});
        $("#formComp").modal({
		backdrop: true
	});
	$('#filter-box').keyup(function() {
		searchlistComp($(this).val());
	});
        $('#filter-box-students').keyup(function() {
		searchlist($(this).val());
	});
});

function searchlist(inputVal) {
	var list = $('#studentslist');
	list.find('div').each(function(index, row) {
		var allCells = $(row).find('div');
		if (allCells.length > 0) {
			var found = false;
			allCells.each(function(index, td) {
				var regExp = new RegExp(inputVal, 'i');
				if (regExp.test($(td).text())) {
					found = true;
					return false;
				}
			});
			if (found == true) $(row).show();
			else $(row).hide();
		}
	});
}

function searchlistComp(inputVal) {
	var list = $('#companieslist');
	list.find('div').each(function(index, row) {
		var allCells = $(row).find('div');
		if (allCells.length > 0) {
			var found = false;
			allCells.each(function(index, td) {
				var regExp = new RegExp(inputVal, 'i');
				if (regExp.test($(td).text())) {
					found = true;
					return false;
				}
			});
			if (found == true) $(row).show();
			else $(row).hide();
		}
	});
}
function openModal(id) {
	$("#modal-body").empty();
	var textShow = $("#" + id).text();
	$("#modal-body").append('<p>' + textShow + '</p>');
	$("#modal-body").append('<p>London, UK</p>');
	$("#myModal").modal('show');
}
function closeModal() {
	$("#myModal").modal('hide');
}
