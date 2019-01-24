$('ol').draggable();
$('.grid-item').droppable({
  drop: function(e) {
   console.log('drop!');
   console.log(e);
   console.log(e.originalEvent.target);
   console.log(e.target);
  }
});