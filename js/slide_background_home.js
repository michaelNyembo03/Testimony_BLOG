
const pic = ['bible-g5cae28980_1920.jpg','man-g70e22fcf5_1920.jpg','jesus-christ-gd8b151c4d_1920.jpg']


$(function(){
    let i = 0;

    setInterval(function(){
    $('.header_container').css('background-image', 'url(CSS/'+pic[i]+')');
        i++;
        if(i == pic.length){
            i=0;
        }
    },10000)

    $('.header_container').fadeOut('slow', function(){
        $('.header_container').css('background-image', 'url(CSS/'+pic[i]+')');
        $('.header_container').fadeIn('slow')
    },5000)
})