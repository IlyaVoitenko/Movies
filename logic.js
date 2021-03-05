
$(function() {
    (function(name) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=c4de5cdcdbbf6ef28d8e1cce52659a92&language=en-US&page=1&include_adult=false&query=query`)
        .then( data => data.json())
        .then(data=>{
                var container = $('#pagination-' + name);
                 let imgBase = `https://image.tmdb.org/t/p/w500/`
                 container.pagination({
                dataSource: data,
                locator: 'results',
                totalNumber: 50,
                pageSize: 5,
                showPageNumbers: true,
                showPrevious: true,
                showNext: true,
                showNavigator: true,
                showFirstOnEllipsisShow: true,
                showLastOnEllipsisShow: true,
                ajax: {
                    beforeSend: function() {
                        container.prev().html('Loading data from flickr.com ...');
                    }
                },
                callback: function(response, pagination) {
                    var dataHtml = '<ul>';
                    $.each(response, function (index, item) {
                        dataHtml += '<div class ="divMovies">'
                        dataHtml += '<li>'+`<img src=${imgBase+item.poster_path}>`+ '</li>';
                        dataHtml += '<li class ="liInfo">' + item.original_title + '</li>';
                        dataHtml += '<li class ="liInfo">' + item.overview + '</li>';
                        dataHtml += '</div>'
                    });
                    dataHtml += '</ul>';
                    container.prev().html(dataHtml);
                }
            })
        })
    })('demo2');
});
