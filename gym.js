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