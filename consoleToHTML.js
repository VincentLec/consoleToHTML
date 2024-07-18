/* from https://stackoverflow.com/questions/7042611/override-console-log-for-production */
var console=(function(oldCons){ // define a new console
    var eTarget = null;
    var write = (function(f,args){
        for (let arg of args){
            f(arg);  
            if(eTarget !== null){
                if (typeof arg == 'object') {arg = (JSON && JSON.stringify ? JSON.stringify(arg, undefined, 2) : arg);}
                eTarget.innerHTML += '<span class="'+f.name+'">'+arg + '</span><br />';
            }
        }
    });
    return {
        target: function(e){eTarget = e;}
        ,log  : function(...args){write(oldCons.log ,args);}
        ,info : function(...args){write(oldCons.info,args);}
        ,warn : function(...args){write(oldCons.warn,args);}
        ,error: function(...args){write(oldCons.error,args);}
    };
}(window.console));
window.console = console; //Then redefine the old console
