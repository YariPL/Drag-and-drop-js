if(window.localStorage.grids){
		var grids = JSON.parse(window.localStorage.getItem("grids"));
		
		for (let i =0 ; i<grids.length;i++) {
			$('#grid-container > div').eq(i).find("img").attr("src", grids[i]);
		}

	console.log(grids);
		console.log(grids.length);
} else {
	var grids = [];
	grids.length = 9;
	console.log(grids);
console.log(grids.length);

}


$('ol').draggable();
$('#grid-container > div').droppable({
  drop: function(e) {
  console.log('drop!');
   console.log(e);
   console.log(e.originalEvent.target);
   console.log(e.target);
   console.log('------------');
   console.log(grids);

   var ev = e.originalEvent;

	var id = $(this).attr("data-id") * 1;
	grids[id] = ev.target.src ? e.originalEvent.target.src : e.originalEvent.target.querySelector('img').src;
	$(this).html('<img src="'+grids[id]+'" alt="image">');
	
    console.log(e.originalEvent.target);
    console.log(e.originalEvent.originalEvent.target.parentElement);

    if(e.originalEvent.target.localName == 'img') {

	   e.originalEvent.originalEvent.target.parentElement.style.top = '0px';
	   e.originalEvent.originalEvent.target.parentElement.style.left = '0px';

	} else {
		e.originalEvent.target.style.top = '0px';
	    e.originalEvent.target.style.left = '0px';
	}
  }
});



$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
});
