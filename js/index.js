$(".slide-group").slick({           
    autoplay: true, // 자동재생
    autoplaySpeed: 4500, // 간격시간
    dots: true, // 동그라미버튼
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    arrows:false
    })

var aboutNear = $('#aboutme').offset().top
var webNear = $('#web').offset().top
var designNear = $('#design').offset().top
var contactNear = $('#contact').offset().top
$('#header .nav li').on('click', function(e){
    e.preventDefault()
        var num = $(this).index()
        switch(num) {
            case 0 : $('html').stop().animate({scrollTop:0}, 500); break;
            case 1 : $('html').stop().animate({scrollTop:aboutNear}, 500); break;
            case 2 : $('html').stop().animate({scrollTop:webNear}, 500); break;
            case 3 : $('html').stop().animate({scrollTop:designNear}, 500); break;
            case 4 : $('html').stop().animate({scrollTop:contactNear}, 500); break;
            
        }
    
})


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if ( sct < aboutNear ) {
        $('.depth1 > li').eq(0).addClass('on')
        .siblings().removeClass('on')
    } else if ( sct >= aboutNear && sct < webNear ){
        $('.depth1 > li').eq(1).addClass('on')
        .siblings().removeClass('on')
    } else if ( sct >= webNear && sct < designNear ){
        $('.depth1 > li').eq(2).addClass('on')
        .siblings().removeClass('on')
        $('.article4 .porfor').removeClass('on')
        // $('.skills').removeClass('on')
    } else if ( sct >= designNear && sct < contactNear ){
        $('.depth1 > li').eq(3).addClass('on')
        .siblings().removeClass('on')
        $('.article4 .porfor').addClass('on')
        // $('.skills').addClass('on')
    } else {
        $('.depth1 > li').eq(4).addClass('on')
        .siblings().removeClass('on')
        $('.article4 .porfor').removeClass('on')
        // $('.skills').removeClass('on')

    }
})


// $('#section > article').on('mousewheel', function(e, delta){
//     // 0보다 크면 위로, 0보다 작으면 아래로
//     if (delta>0) {
//         var prev = $(this).prev().offset().top
//         $('html').stop().animate({
//             scrollTop:prev
//         }, 500, 'linear')
//     } else if (delta<0) {
//         var next = $(this).next().offset().top
//         $('html').stop().animate({
//             scrollTop:next
//         }, 500, 'linear')
//     }
// })

//por1
$('.article2 .rightbox .txt').on('click', function(){
    $(this).next().addClass('on')
    $('.skills').addClass('on').css({opacity:1})
    $(this).remove()
})

$('.article3 > div > img').hover(
    function(){
        $(this).prev('.subbox').addClass('on')    
    },
    function(){
        $(this).prev('.subbox').removeClass('on') 
    }
)
$('.article3 > div > .subbox').hover(
    function(){
        $(this).addClass('on')   
    },
    function(){
        $(this).removeClass('on')
    }
)


//por2
var linum;
$('.article4 .porfor li').on('click', function(e){
    e.preventDefault()
    linum = $(this).index()
    var href = $(this).find('a').attr('href')
    var src = $(this).find('img').attr('src')
    var alt = $(this).find('img').attr('alt')
    $('body').append('<div class="outbox"><div class="back"><div class="inbox"></div></div></div>')
    $('.outbox').css({
        position:'fixed', top:0, left:0, right:0, bottom:0,
        zIndex:'999999', background:'rgba(0,0,0,0.8)'
    })
    $('.back').css({
        position:'absolute', top:'50%', left:'50%',
        transform:'translate(-50%,-50%)',
        width:'800px', height:'500px',
        background:'#000', border:'1px solid #ddd'
    })
    $('.inbox').css({
        lineHeight:'500px', margin:'0 30px'
    })
    .append(`<a href="${href}" target="_blank"><img src="${src}" alt="${alt}"></a>`)
    .append('<button class="close"><i class="fas fa-times-circle"></i></button>')
    .append('<button class="arrow prev"><i class="fas fa-angle-left"></i></button><button class="arrow next"><i class="fas fa-angle-right"></i></button>')
    $('.inbox .close').css({
        position:'absolute', top:'-20px', right:'-20px',
        background:'none', border:'none', fontSize:'40px', color:'#fff'
    })
    $('.inbox .prev').css({
        position:'absolute', top:'50%', left:'50%', marginLeft:'-550px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'60px', color:'#fff'
    })
    $('.inbox .next').css({
        position:'absolute', top:'50%', right:'50%', marginRight:'-550px', marginTop:'-20px',
        background:'none', border:'none', fontSize:'60px', color:'#fff'
    })
})


$('body').on('click', '.inbox .close, .outbox', function(){
    $('.outbox').remove()
})
$('body').on('click', '.inbox', function(e){
    e.stopPropagation()
})

function porfor (indexnum){
    var href = $('.article4 .porfor li').eq(indexnum).find('a').attr('href')
    var src = $('.article4 .porfor li').eq(indexnum).find('img').attr('src')
    var alt = $('.article4 .porfor li').eq(indexnum).find('img').attr('alt')
    $('.inbox').find('a').attr({href:href})
    $('.inbox').find('img').attr({
        src:src,
        alt:alt
    })
}

$('body').on('click', '.inbox .next', function(){
    linum++
    if (linum === $('.article4 .porfor li').length) {
        linum = 0
    }
    porfor(linum)
})

$('body').on('click', '.inbox .prev', function(){
    linum--
    if (linum<0) {
        linum = 7
    }
    porfor(linum)
})