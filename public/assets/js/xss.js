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