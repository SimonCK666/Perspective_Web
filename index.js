// 在HTML渲染完成之后执行
window.onload=function() {
    var excluder = this.document.getElementById("excluder");
    // The user moves the mouse over an HTML element
    this.document.body.onmousemove = function(ev) {
        var x = ev.layerX - 105;
        var y = ev.layerY - 105;

        excluder.style.cssText = "transform:translate(" + x + "px," + y +"px); background-position:"+((x > 0) ? "-" : "") + Math.abs(x) +"px   "+((y > 0) ? "-" : "") + Math.abs(y) +"px;"
    }
}