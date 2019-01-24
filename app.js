
	var grids = [];
	grids.length = 9;
	console.log(grids);
console.log(grids.length);




$('ol').draggable();
$('.grid-item').droppable({
  drop: function(e) {
   console.log('drop!');
   console.log(e);
   console.log(e.originalEvent.target);
   console.log(e.target);
	grids[e.originalEvent.target.id] = e.originalEvent.target.src;


	console.log(grids);
console.log(grids.length);
  }
});

