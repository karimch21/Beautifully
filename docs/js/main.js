$(function () {
    //main
    document.querySelector('.burger__menu').onclick = function () {
        this.classList.toggle('active');
        document.querySelector('.main__list').classList.toggle('active');
        document.body.classList.toggle('lock')
    }

    let btnMainLink = document.querySelectorAll('.main__list-link');
    for (let i = 0; i < btnMainLink.length; i++) {
        console.log(this)
        btnMainLink[i].onclick = mainLinkFunc;
    }
    function mainLinkFunc() {
        document.querySelector('.main__list').classList.remove('active');
        document.body.classList.remove('lock')
        document.querySelector('.burger__menu').classList.remove('active')
    }
    //main

    //input placeholder
    let feedbackInput = document.querySelectorAll('.feedback__input');

    for (let i = 0; i < feedbackInput.length; i++) {
        feedbackInput[i].addEventListener('focus', feedbackFunc2);
        feedbackInput[i].addEventListener('blur', feedbackFunc3);
    }
    function feedbackFunc2() {
        this.placeholder = '';
    }
    function feedbackFunc3() {
        for (let i = 0; i < feedbackInput.length; i++) {
            feedbackInput[0].placeholder = 'Светлана Кириленко';
            feedbackInput[1].placeholder = 'id98764321';
            feedbackInput[2].placeholder = 'Текст';
        }
    }
    //input placeholder

    //textarea
    let symbols = document.querySelector('.symbols-num');
    let commentText = document.querySelector('.feedback__comment-text');
    commentText.oninput = function () {
        symbols.innerHTML = 150 - commentText.value.length
    }
    //textarea


    if (document.documentElement.clientWidth < 335) {
        document.querySelector('.feedback__symbols-text').innerHTML = 'Ост. симв.'
    }

    //tab
    $('.wrapper .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
        $('.wrapper .tabs').find('.tab').removeClass('tab__services--active');
        $(this).addClass('tab__services--active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });
    //tab

    //scroll to id
    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 10;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });
    //scroll to id


    //form send
    var example = $('form.example');
    // Успешная отправка формы

    example.on('success.sml', function () {
        // Закрыть окно через 5 сек.
        setTimeout(function () { $.fancybox.close() }, 2000);
        // Открыть динамический popup
        setTimeout(function () {
            $.fancybox.open($('.callback-modal__thanks'));
        }, 5005);

    });
    // Ошибка при отправке AJAX-запроса
    example.on('serverError.sml', function (e, instance, form, response) {
        $.fancybox.open('<p>Ошибка при отправке AJAX-запроса!</p>' + '<br>' + response);
        setTimeout(function () { $.fancybox.close() }, 5000);
    });
    // Ошибка на сервере при отправке формы
    example.on('ajaxError.sml', function (e, instance, form, response) {
        $.fancybox.open($('.modal__error'));
        setTimeout(function () { $.fancybox.close() }, 3000);
    });
    // Инициализация...
    example.sendMail();
    // $('form.example').sendMail();
    // form send

    // //inputmask
    let inputs = document.querySelectorAll('input[type="tel"]');
    let im = new Inputmask('+7 (999) 999-99-99');
    im.mask(inputs);
    let idFeedback = document.querySelector('#feedback__id');
    Inputmask("id99999999").mask(idFeedback);
    //inputmask
    // //validator
    // function addValidate(form, rules) {

    //     new window.JustValidate(form, {
    //         rules: rules,
    //         messages: {
    //             tel: {
    //                 required: 'Обязательное поле'
    //             },
    //             myField: {
    //                 required: 'Обязательное поле'
    //             },
    //             email: {
    //                 required: 'Обязательное поле',
    //                 email: 'Введите email'
    //             },
    //             text: {
    //                 required: 'Обязательное поле'
    //             }
    //         },
    //     });

    // }

    // addValidate('.form', {
    //     email: {
    //         required: false,
    //         email: true
    //     },
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    //     myField: {
    //         required: true
    //     },
    // });

    // addValidate('.services-form1', {
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    // });
    // addValidate('.services-form2', {
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    // });
    // addValidate('.services-form3', {
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    // });
    // addValidate('.services-form4', {
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    // });
    // addValidate('.stock__form', {
    //     tel: {
    //         required: true,
    //         tel: true
    //     },
    //     myField: {
    //         required: true
    //     },
    // });
    // addValidate('.feedback__form-block', {
    //     text: {
    //         required: true,
    //     },
    //     myField: {
    //         required: true
    //     },
    // });

    // addValidate('.contact__form-block', {
    //     email: {
    //         required: true,
    //         email: true
    //     },
    //     myField: {
    //         required: true
    //     },
    // });
    // //validator



    //swiper in fancybox
    $('.fancybox-trigger').click(function (e) {
        e.preventDefault();
        var thisTarget = $(this).data('index');
        $.fancybox.open({
            src: "#lightbox",
            type: 'inline',
            opts: {
                toolbar: false,
                defaultType: 'inline',
                autoFocus: true,
                touch: false,
                afterLoad: function () {
                    mySwiper1.init(),
                        mySwiper1.slideTo(thisTarget - 1),
                        mySwiper2.init(),
                        mySwiper2.slideTo(thisTarget - 1)
                }
            }
        })
    });
    //swiper in fancybox

    //timer
    var timer;

    var compareDate = new Date();
    compareDate.setDate(compareDate.getDate() + 3);

    timer = setInterval(function () {
        timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            $("#days").text('0' + days);
            $("#hours").text(hours);
            $("#minutes").text(minutes);
            $("#seconds").text(seconds);
        }
    }
    //timer

    //swiper
    const swipFeedback = document.querySelector('.slider__block'),
        swipAdvance = document.querySelector('.slider__block-advance'),
        swiperServicesModal1 = document.querySelector('.modal-services1'),
        swiperServicesModal2 = document.querySelector('.modal-services2')


    var mySwiper = new Swiper(swipFeedback, {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        breakpoints: {
            // when window width is >= 320px
            319: {
                slidesPerView: 1,
            },
            950: {
                slidesPerView: 2,
            }
        }

    });

    var mySwiper = new Swiper(swipAdvance, {
        loop: true,
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 0,
        speed: 230,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        breakpoints: {
            // when window width is >= 320px
            319: {
                slidesPerView: 1,
            },
            656: {
                slidesPerView: 2,
            }
        }

    });

    var mySwiper1 = new Swiper(swiperServicesModal1, {
        init: false,
        spaceBetween: 30,
        slidesPerView: 1,
        autoHeight: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            observer: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',

        },
    });
    var mySwiper2 = new Swiper(swiperServicesModal2, {
        init: false,
        spaceBetween: 30,
        slidesPerView: 1,

        //Инициализировать слайдер при каждом переключении таба
        observer: true,
        observeParents: true,
        //Инициализировать слайдер при каждом переключении таба

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            observer: true,
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    //swiper

    var mixer = mixitup('.portfolio__gallery');
});


function previewFile() {
    var preview = document.querySelector('.file-img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
        preview.classList.add('file-img__zindex')
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";

    }


}
