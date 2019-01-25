//when load page check if there is a version of grid in localstorage
//and if yes grab it
if(window.localStorage.grids){
	var grids = JSON.parse(window.localStorage.getItem("grids"));
	for (let i =0 ; i<grids.length;i++) {
		//render new html for elements which has some image(based on grids array)
		if(grids[i]){
			$('#grid-container > div').eq(i).html('<img src="'+grids[i]+'" alt=""><div class="delete"> X </div>');
		}
	}
} else {
	//if there is nothing in localstorage -> create new array with 9 instances
	var grids = [];
	grids.length = 9;
}
//make all 'li' elements draggable(fire event)
$('li').draggable();
//make all divs inside grid-container id droppable(fire event)
$('#grid-container > div').droppable({
	drop: function(e) {
	var ev = e.originalEvent;
	//make sure this is a number
	var id = $(this).attr("data-id") * 1;
	
	//push image url to grids array
	//here check which element user grab image itself or parent and forced taking img src in both cases
	grids[id] = ev.target.src ? e.originalEvent.target.src : e.originalEvent.target.querySelector('img').src;
	//render new html on drop
	$(this).html('<img src="'+grids[id]+'" alt=""><div class="delete"> X </div>');

	//reset position of original image(put it back to list)
    if(e.originalEvent.target.localName == 'img') {
		e.originalEvent.originalEvent.target.parentElement.style.top = '0px';
		e.originalEvent.originalEvent.target.parentElement.style.left = '0px';
	} else {
		e.originalEvent.target.style.top = '0px';
	    e.originalEvent.target.style.left = '0px';
	}
	//delete image from grid
	$('.delete').on('click', function(e) {
		console.log(e);
		e.target.classList.add('hide');

		e.target.parentElement.querySelector('img').src = '';
		grids[e.target.parentElement.attributes['data-id'].value] = '';
	});
  }
});
//save to localstorage
$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
});
//delete image from grid
$('.delete').on('click', function(e) {
	console.log(e);
	e.target.classList.add('hide');
	e.target.parentElement.querySelector('img').src = '';
	grids[e.target.parentElement.attributes['data-id'].value] = '';

});