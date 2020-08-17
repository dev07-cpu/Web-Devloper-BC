var moviesObj=[
{
    movie:"Transformers" ,
    rating:7 ,
    viewedOrnot: "Watched"
},
{
    movie:"Beauty and The Beast" ,
    rating:9 ,
    viewedOrnot: "Not Watched"
},
{
    movie:"Titanic" ,
    rating: 9.5 ,
    viewedOrnot: "Watched"
},
{
    movie:"Pokemon" ,
    rating: 6 ,
    viewedOrnot: "Watched"
},
{
    movie:"La La Land" ,
    rating: 10 ,
    viewedOrnot: "Not Watched"
}
];

moviesObj.forEach(function (movie)
{
    console.log("You have "+movie.viewedOrnot+" "+movie.movie+"-"+movie.rating+" stars");
}
);