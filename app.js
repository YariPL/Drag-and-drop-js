$('ol').draggable();
$('.grid-item').droppable({
  drop: function(e) {
   console.log('drop!');
   console.log(e.target);
  }
});