var request=require('request');
module.exports = function (container) {

    var tasks = [];


    tasks.push({
        name: "httpreq",
        def: function (instacne) {
            
            var args=arguments;
            var options={};
            
            
            if (typeof args[1] === 'string'){
                options.url=args[1];    
            }
            if (typeof args[1]==='object'){
                options=args[1];
            }
            
            return {
                options:options,
            }
        },
        exec: function (scope, next) {
            
            if (scope.options.url==null){
                scope.options.url=scope.$$input;
            }            
            
            request(scope.options,function(err,resp,body){
                if (err){
                     throw err;
                }
                
                next(body);
            })
            
            
        }
    });

    return tasks;
}
