if(window.localStorage.grids){
	alert('ss')
	window.onload = function() {
		var grids = JSON.parse(window.localStorage.getItem("grids"));
		console.log(grids);
		console.log(grids.length);
		for (let i =0 ; i<grids.length;i++) {
			$('#grid-container > div').eq(i).find("img").attr("src", grids[i]);
		}
	}
} else {
	var grids = [];
	grids.length = 9;
	console.log(grids);
console.log(grids.length);

}


$('ol').draggable();
$('#grid-container > div').droppable({
  drop: function(e) {
 /* console.log('drop!');
   console.log(e);
   console.log(e.originalEvent.target);
   console.log(e.target);*/


	var id = $(this).attr("data-id") * 1;
	grids[id] = e.originalEvent.target.src ? e.originalEvent.target.src : e.originalEvent.target.querySelector('img').src;
	$(this).html('<img src="'+grids[id]+'" alt="image:)">');
	$(e.originalEvent.target).css({
        top: "0px",
        left: "0px"
    });
    e.originalEvent.target.style.top = '0px';
    e.originalEvent.target.style.left = '0px';
  }
});



$('.save').on('click',function() {
	window.localStorage.setItem('grids', JSON.stringify(grids));
});