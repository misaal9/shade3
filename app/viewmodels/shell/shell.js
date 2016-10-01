define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: '../viewmodels/home/home', title: 'Madhura & Rohit' },
            { route: 'kahani', moduleId: '../viewmodels/kahani/kahani', title: 'The Kahani' },
            { route: 'venue', moduleId: '../viewmodels/venue/venue', title: 'Venue' }
        ]).buildNavigationModel()
        
        return router.activate();
    };
    
    return shell;
});