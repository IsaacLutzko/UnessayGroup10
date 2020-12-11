$(document).ready(function() {
  $(window).keydown((enter) => {
    if(enter.keyCode == 13) {
      enter.preventDefault();
      return false;
      }
    });

    $('#nameButton').attr('disabled', true);
    $('#name').keyup(function() {
        if ($(this).val().length !=0) {
          $('#nameButton').attr('disabled', false);  
        }          
        else {
          $('#nameButton').attr('disabled', true);
        }
    });

});

function xssExample() {
  const input = $("#name").val();
  document.getElementById('replaceThis').innerHTML = `Hi there ${input}!`;
  document.getElementById("name").value = "";
}

function xsssExample() {
  const oldContent = document.getElementsByTagName('html')[0].innerHTML;
  document.getElementsByTagName('html')[0].innerHTML = (`<img style='object-fit:cover;width:100%;height:100%' src='https://i1.lensdump.com/i/0pToR5.png'>`)
  setTimeout(function(){
    document.getElementsByTagName('html')[0].innerHTML = oldContent}, 4000);
}