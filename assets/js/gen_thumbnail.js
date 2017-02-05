$(function (){
    var movies = [];
    var movies_w = [];
    var movies_h = [];
    var images = [];

    $('.youtube iframe').each(function(index, element) {
        var movie_src = $(this).attr('src');
        var movie_width = $(this).attr('width');
        var movie_height = $(this).attr('height');

        movies[index] = movie_src;
        movies_w[index] = movie_width;
        movies_h[index] = movie_height;
        // get a thumbnail
        images[index] = 'http://i.ytimg.com/vi' + movie_src.substring(movie_src.lastIndexOf("/"),movie_src.lastIndexOf("?")) + '/0.jpg';
        // replace
        $(this).after('<div class="youtube_play"><img class="thumbnail" src="' + images[index] + '" width="' + movies_w[index] + '"height="' + movies_h[index] + '"><div class="youtube_btn"></div></div>').remove();
    });

    $('.youtube_play').each(function(index, element) {
        $(this).click(function(){
            // replace with clicking
            $(this).after('<iframe src="' + movies[index] + '&amp;autoplay=1" width="' + movies_w[index] + '" height="' + movies_h[index] + '" frameborder="0"></iframe>').remove();
        });

        $(this).hover(function(){
            // roll over
            $(".youtube_btn").eq([index]).css("background-image","url(assets/img/YouTube-icon-full_color.png)");
        },function(){
            $(".youtube_btn").eq([index]).css("background-image","");
        });
    });
});