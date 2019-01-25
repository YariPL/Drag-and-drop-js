if(window.localStorage.grids){
	var grids = JSON.parse(window.localStorage.getItem("grids"));
	for (let i =0 ; i<grids.length;i++) {
		if(grids[i]){
			console.log($('#grid-container'));
			$('#grid-container > div').eq(i).html('<img src="'+grids[i]+'" alt=""><div class="delete"> X </div>');
		}
	}
} else {
	var grids = [];
	grids.length = 9;
}

$('li').draggable();
$('#grid-container > div').droppable({
	drop: function(e) {
	var ev = e.originalEvent;

	var id = $(this).attr("data-id") * 1;
	grids[id] = ev.target.src ? e.originalEvent.target.src : e.originalEvent.target.querySelector('img').src;
	$(this).html('<img src="'+grids[id]+'" alt=""><div class="delete"> X </div>');

    if(e.originalEvent.target.localName == 'img') {
		e.originalEvent.originalEvent.target.parentElement.style.top = '0px';
		e.originalEvent.originalEvent.target.parentElement.style.left = '0px';
	} else {
		e.originalEvent.target.style.top = '0px';
	    e.originalEvent.target.style.left = '0px';
	}
	$('.delete').on('click', function(e) {
		console.log(e);
		e.target.classList.add('hide');

		e.target.parentElement.querySelector('img').src = '';
		grids[e.target.parentElement.attributes['data-id'].value] = '';
	});
  }
});

$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
});

$('.delete').on('click', function(e) {
	console.log(e);
	e.target.classList.add('hide');
	e.target.parentElement.querySelector('img').src = '';
	grids[e.target.parentElement.attributes['data-id'].value] = '';

});