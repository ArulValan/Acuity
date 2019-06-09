Acuity = function () {
    var target = document.getElementById("myTarget");
    var targetStyle = target.style;
    targetStyle.borderColor = "blue";
    targetStyle.borderStyle = "solid";
    this.createRectangle = function (target,rectposition) {
        var canvas=document.getElementById('myTarget').appendChild(document.createElement("canvas"));
        var ctx=canvas.getContext("2d");
        ctx.moveTo(rectposition.p1.x,rectposition.p1.y);
        ctx.lineTo(rectposition.p2.x,rectposition.p2.y);
        ctx.lineTo(rectposition.p3.x,rectposition.p3.y);
        ctx.lineTo(rectposition.p4.x,rectposition.p4.y);
        ctx.lineTo(rectposition.p1.x,rectposition.p1.y);
        ctx.fill();

    }
    this.createRectangle(target, rectposition = {
        p1: { x: 20, y: 20 },
        p2: { x: 40, y: 20 },
        p3: { x: 40, y: 25 },
        p4: { x: 20, y: 25 }
    })
}