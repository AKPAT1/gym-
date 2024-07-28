$(document).ready(function()
{
    $('.navbtn').click(function()
    {
        $('.navbtn').toggleClass('change')
    })
})

$(window).scroll(function()
{
    let pos = $(this).scrollTop();
    console.log(pos)
    if(pos >= 100 )
        {
            $('.nav-menu').addClass('cu-navbar')
        }
        else
        {
            $('.nav-menu').removeClass('cu-navbar')
        }
})

$(window).scroll(function()
{
    let pos = $(this).scrollTop();
    console.log(pos)
    if(pos >= 700 )
        {
            $('.honors-text').addClass('fromleft')
            $('.honors-img').addClass('fromright')
        }
        else
        {
            $('.honors-text').removeClass('fromleft')
            $('.honors-img').removeClass('fromright')
        }
})

$('.gallery-list').click(function()
{
    let value = $(this).attr('data-filter')
    $(this).addClass('item-active').siblings().removeClass('item-active')
    if(value==='all')
        {
            $('div.filter').show(1000)
        }
    else
        {
            $('div.filter').not('.' + value).hide(1000);
            $('div.filter').filter('.' + value).show(1000);
        }
})

$(window).scroll(function()
{
    let pos = $(this).scrollTop();
    console.log(pos)
    if(pos >= 4300 )
        {
            $('.card-1').addClass('movel')
            $('.card-2').addClass('movec')
            $('.card-3').addClass('mover')
        }
        else
        {
            $('.card-1').removeClass('movel')
            $('.card-2').removeClass('movec')
            $('.card-3').removeClass('mover')
        }
})