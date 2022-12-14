$(function () {
    $('.mainVisual .inner').slick({
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    var Name = ['잠실 롯데월드 타워', '송파 롯데캐슬 시그니처', '산달도 연륙교', '현대케미칼 HPC']
    var Name02 = ['123층,555M 거대한 수직도시 롯데월드타워의 모든 것을 만나보세요.', '롯데건설은 주거문화공간의 새로운 패러다임을 창조해 나가고 있습니다.', '롯데건설은 탁월한 기술력으로 각종 고속도로 건설사업과 교량, 지하철, 철도, 단지, 항만건설 등을 성공적으로 수행,완공하였습니다.', '롯데건설의 플랜트사업은 고도의 기술력과 축적된 경험을 바탕으로 다음세대를 위한 보다 나은 삶을 창조해 나가고 있습니다.']

    $('.mainVisual .inner').on('init reInit afterChange', function (e, s, c) {
        $('.main_slick .inner figure').eq(c + 5).addClass('on').siblings().removeClass('on')
        $('.Name').text(Name[c]);
        $('.Name02').text(Name02[c]);
    })

    $('.scroll-down i').on('click', function () {
        var sct = $('.projects').offset().top
        $('html,body').animate({ scrollTop: sct }, 600)
    });
})