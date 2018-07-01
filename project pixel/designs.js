
$("#sizePicker").submit(function makeGrid(event) {
    $('table tr').remove(); 

    var rows = $("#inputHeight").val();
    var cols = $("#inputWeight").val();

    for (var i = 1; i <= rows; i++){
        $("table").append("<tr></tr>");
        for (var j = 1; j <= cols; j++){
            $("tr:last").append("<td></td>");
            $("td").attr("class","pixel");
        };
    }   
event.preventDefault();
});


var designCanvas = $("#pixelCanvas");

designCanvas.on("click",".pixel",function(){
    var colorInput = $("#colorPicker").val();
    $(this).css("background-color", colorInput);
});