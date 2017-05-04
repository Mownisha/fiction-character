$(document).ready(function() {
  $("form#celebrity-date").submit(function(event) {
   var age = parseInt($("input#age").val());
   var pet = $("select#pet").val();

   if (age < 30 && pet ==="surya") {
     $('#surya').show();
     $('#vijay').hide();
     $('#vishal').hide();
     $('#simbu').hide();
   } else if (age === 30 && pet==="surya"){
     $('#surya').show();
     $('#vijay').hide();
     $('#vishal').hide();
     $('#simbu').hide();
   } else if (age > 30 && pet==="vijay"){
     $('#surya').hide();
     $('#vijay').show();
     $('#vishal').hide();
     $('#simbu').hide();
   } else if (age < 30 && pet==="vishal"){
     $('#vijay').hide();
     $('#surya').hide();
     $('#vishal').show();
     $('#simbu').hide();
   } else if (age === 30 && pet==="simbu"){
     $('#simbu').show();
     $('#surya').hide();
     $('#vijay').hide();
     $('#vishal').hide();
   } else if (age > 30 && pet==="simbu"){
     $('#simbu').show();
     $('#surya').hide();
     $('#vijay').hide();
     $('#vishal').hide();
   }

   event.preventDefault();
 });
});
