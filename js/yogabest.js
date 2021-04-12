$(document).ready(function(){
    'use strict'
    /*when click on this btn show the hidden menu list*/
    $('.menu-btn').click(function() {
        $('.menu-holder').toggleClass('open');
    })
    /*when scroll the window more than 100*/
    $(window).scroll(function(){
        /*transfor the link active class on the (a) the window stop of his section*/
		$('.block').each(function(){
			var sro = $(window).scrollTop();
			var off= $(this).offset().top -=50;		
			if(sro > off){
				var blockId = '.' + $(this).attr('id');
				$('.main-menu li a, .navbar-menu ul li a').removeClass('link-active');
                $('.main-menu li a[data-scroll="'+blockId+'"],.navbar-menu ul li a[data-scroll="'+blockId+'"], .contact .li-block li a[data-scroll="'+blockId+'"]').addClass('link-active');
			}
		})
        /*The qualities of the navbar when scrolling */
        if($(window).scrollTop()>100){ 
            $('.navbar-head').css({
                'position' :'fixed',
                'top' : '0',
                'background-color' : '#fff',
            }) 
            $('.navbar-menu ul li a, .navbar-head .nav-bar .logo, .navbar-head .nav-bar .menu-btn').css({
                'color' : '#000'
            })
		}
		else{
            $('.navbar-head').css({
                'background-color' : 'transparent',
                'top' : '50px'
            }) 
            $('.navbar-menu ul li a, .navbar-head .nav-bar .logo, .navbar-head .nav-bar .menu-btn').css({
                'color' : '#fff'
            })  
        }
        var windowSize = $(window).width(); 
        if(windowSize < 992){
            $('.navbar-head').css({
                'top' : '0px',
            })
        } 
	})
    /*The qualities of the navbar when scrolling */
    $(window).on('resize', function(event){
        var windowSize = $(window).width(); 
        if(windowSize > 992){
            $('.navbar-head').css({
                'top' : '50px'
            })
        } 
        else{
            $('.navbar-head').css({
                'top' : '0'
            })
        }
     });
    /*scroll animation when clik on links*/
    $('.main-menu li a, .navbar-menu ul li a, .contact .li-block li a').click(function(){
        $('.menu-holder').removeClass('open');
        $('html, body').animate({
            scrollTop: $($(this).data('scroll')).offset().top
        }, 1000)
    })
    /*hide menu list when clikc in close botton*/
    $('.close-btn').click(function(){
        $('.menu-holder').removeClass('open');
    })
    /*owl carousel in testimonial section*/
    $('.testimonial .owl-carousel').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        autoplay : true,
        slideTransition: 'linear',
        duration: 1500,
        responsive:{
            0:{
                items:1
            }
        }
    })
    AOS.init({
        duration: 1500,
        once: true,
    });
})