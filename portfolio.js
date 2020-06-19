// document.querySelector("#development").onclick = function changeContent(){
    
//     this.style = "Color: red";}

// $ ("#development").click.toggle(function(){
//     $("#developmentwork" ).css("display","block");
// }, function(){
//     $("#designwork").css("display","none");
// }
// )

$("#development").click(function(){
    $("#designwork").hide();
    $("#developmentwork").show()
    $("#design").removeClass("active");
    $("#development").addClass("active");
  });

$("#design").click(function(){
    $("#developmentwork").hide();
    $("#designwork").show()
    $("#design").addClass("active");
    $("#development").removeClass("active");
  });