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
            $('.filter').show(1000)
        }
    else
        {
            $('.filter').not('.' + value).hide(1000);
            $('.filter').filter('.' + value).show(1000);
        }
})