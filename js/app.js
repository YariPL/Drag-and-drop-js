if(window.localStorage.grids){
	var grids = JSON.parse(window.localStorage.getItem("grids"));
	for (let i =0 ; i<grids.length;i++) {
		$('#grid-container > div').eq(i).find("img").attr("src", grids[i]);
	}
} else {
	var grids = [];
	grids.length = 9;
}

$('ol').draggable();
$('#grid-container > div').droppable({
	drop: function(e) {
	var ev = e.originalEvent;

	var id = $(this).attr("data-id") * 1;
	grids[id] = ev.target.src ? e.originalEvent.target.src : e.originalEvent.target.querySelector('img').src;
	$(this).html('<img src="'+grids[id]+'" alt="image"><div class="delete"> X </div>');

    if(e.originalEvent.target.localName == 'img') {
		e.originalEvent.originalEvent.target.parentElement.style.top = '0px';
		e.originalEvent.originalEvent.target.parentElement.style.left = '0px';
	} else {
		e.originalEvent.target.style.top = '0px';
	    e.originalEvent.target.style.left = '0px';
	}
	$('.delete').on('click', function(e) {
		e.target.parentElement.querySelector('img').src = '';
		grids[e.target.parentElement.attributes['data-id'].value] = '';
	});
  }
});

$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
});

$('.delete').on('click', function(e) {
	e.target.parentElement.querySelector('img').src = '';
	grids[e.target.parentElement.attributes['data-id'].value] = '';
});