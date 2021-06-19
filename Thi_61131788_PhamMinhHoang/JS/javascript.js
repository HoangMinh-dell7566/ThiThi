$(document).ready(function(){
    $('.btn-login').click(function(){
        var name = $('.name-login').val()
        var pass = $('.password-login').val();
        if(name == 'abc' && pass == 'xyz'){
            var str = `<p>Chào bạn ${name}</p>`
            $('.j').html(str)
        }    
    })
})

