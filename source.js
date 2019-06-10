Acuity = function () {
    var target = document.getElementById("myTarget");
    var targetStyle = target.style;
    targetStyle.borderColor = "blue";
    targetStyle.borderStyle = "solid";
    var canvas = document.getElementById('myTarget').appendChild(document.createElement("canvas"));
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    var ctx = canvas.getContext("2d");

    this.createRectangle = function (target, rectposition) {
        ctx.fillRect(...rectposition);
    }.bind(ctx);

    this.inputData = function (arg) {
        if (arg != undefined) {
            inputData = arg;
        }
        else {
            return inputData;
        }
    }
    //TEST BLOCK STARTS
    this.inputData([52, 100, 43, 22, 60, 11]);
    // swappositions


    //TEST BLOCK ENDS
    var no_of_bars = inputData.length;
    var no_of_spaces = no_of_bars + 1;
    var barXHeight = Math.floor((target.clientHeight / no_of_bars) * 0.9);
    var barXSpace = Math.floor((target.clientHeight - no_of_bars * barXHeight) / no_of_spaces);
    var XOffset = 10, YOffset = 0;
    for (var i = 0; i < no_of_bars; i++) {
        YOffset += barXSpace;
        this.createRectangle(target, [XOffset, YOffset, inputData[i], barXHeight]);
        YOffset += barXHeight;
    }
}