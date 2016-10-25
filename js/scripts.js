$(document).ready(function(){
  $("#blanks form").submit(function(event){
    var textInput = $("input#text").val();
    var splitText = (textInput).split("");

    for(var index = 0; index < splitText.length; index +=1) {
      // alert(splitText[index]);
      if(splitText[index] === 'a'|| splitText[index] === 'e'||splitText[index] === 'i'||splitText[index] === 'o'||splitText[index] === 'u')
      splitText[index] = '-'
        // splitText.replace(splitText[index], "-")
    }
    alert(splitText);

    $("p").text(splitText);
    $("#output").show();
    event.preventDefault();
  });

});
