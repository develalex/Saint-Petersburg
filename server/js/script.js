$(function (){
    $(".contImg").click(show);
    $("#close").click(closeClick);
    $('#leftButton').click(left);
    $('#rightButton').click(right);
    $(document).keydown(butClick);
    
})
function closeClick(){
    $('#modal').fadeOut(1000,CloseModal); // Hide modal window
}
function CloseModal(){
    //$('#modal').addClass("nd");
    $("#modalImg").attr('src','');
    $('.view').removeClass('view');
    
}
function show(e){
    $('#modal').fadeIn(1000); // Animate show element
    imgClick(e);
}
function imgClick(e){
    var ImgSrc=e.target.getAttribute("src");
    setModalImg(ImgSrc);
    
    var p=e.target.parentElement;
    p.classList.add("view");
    $(p).attr('index',0);
}
function setModalImg(ImgSrc){
    //$('#modal').fadeIn(1000); // Animate show element
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    $("#modalImg").attr('src',ImgSrc);
    //$('#modal').removeClass("nd");
    var h=Math.round((winH - $('#modalDiv').outerHeight())/2);
    var w=Math.round((winW - $('#modalDiv').outerWidth())/2);
    $('#modalDiv').css('top',h);
    $('#modalDiv').css('left',w);
    
    
}
function left(e){
    var a=$('.view')[0];
    var arr = a.getElementsByTagName('IMG');
    var index = Number(a.getAttribute('index'));
    if(index==0) {
        index=arr.length-1;
    } else {
        index=index-1;
    }
    var src=arr[index].getAttribute('src');
    setModalImg(src);
    a.setAttribute('index',index);
}
function right(e){
    var a=$('.view')[0];
    var arr = a.getElementsByTagName('IMG');
    var index = Number(a.getAttribute('index'));
    if(index==(arr.length-1)) {
        index=0;
    } else {
        index=index+1;
    }
    var src=arr[index].getAttribute('src');
    setModalImg(src);
    a.setAttribute('index',index);
}
function butClick(e){
    var ident=$('.view');
    if (ident.length ==0) return;//Если модальное окно закрыто, то ident.length будет =0
    var code=e.keyCode;
    if (code == 37) left(); // Left button
    else 
    if (code ==39)right();  // Right button
    else closeClick();  // Закрываем окно при нажатии любой кнопки кроме стрелок вправо и влево !!!
}