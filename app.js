if(window.localStorage.grids){
	alert('ss')
	window.onload = function() {
		var grids = JSON.parse(window.localStorage.getItem("grids"));
		console.log(grids);
console.log(grids.length);

	}
} else {
	var grids = [];
	grids.length = 9;
	console.log(grids);
console.log(grids.length);

}


$('ol').draggable();
$('.grid-item').droppable({
  drop: function(e) {
   console.log('drop!');
   console.log(e);
   console.log(e.originalEvent.target);
   console.log(e.target);
	grids[e.target.id] = e.originalEvent.target.src;


	console.log(grids);
console.log(grids.length);
  }
});



$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
	console.log(localStorage);
});