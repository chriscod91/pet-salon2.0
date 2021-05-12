$('#register-link').on('click',function(){
    $('#div-container').load("register.html",function(){
    if(init) init();
    });
});

$('#about-link').on('click',function(){
    $('#div-container').load("about.html",function(){
        if(init) init();
        });
    });
    
$('#services-link').on('click',function(){
    $('#div-container').load("services.html",function(){
         if(initService) initService();
    });
});

$('#home-link').on('click',function(){
    $('#div-container').load("map.html",function(){
        if(initMap) initMap();
    });
});