~function(){var i=document.head||document.getElementsByTagName("head")[0];var d={};var k={};var b={};var f={};var h;var j=function(m,u,r,w){if(typeof(arguments[0])==="string"&&arguments[0]==="bingo"){var v=arguments[1];var s=arguments[2];var p=arguments[3];if(v){p.returns.push(v())}if(s){s()}return}if(b[m]){if(w){setTimeout(function(){j(m,u,r,w)},1);return}return}if(k[m]){if(w){w();return}return}b[m]=true;var q,x=u||m.toLowerCase().substring(m.lastIndexOf(".")+1);if(x==="js"){q=document.createElement("script");q.type="text/javascript";q.src=m;q.async="true";if(r){q.charset=r}}else{if(x==="css"){q=document.createElement("link");q.type="text/css";q.rel="stylesheet";q.href=m;k[m]=true;b[m]=false;i.appendChild(q);if(w){w()}return}}q.onload=q.onreadystatechange=function(){if(!this.readyState||this.readyState==="loaded"||this.readyState==="complete"){b[m]=false;k[m]=true;if(w){w()}q.onload=q.onreadystatechange=null}};i.appendChild(q)};function a(q){var n=[];for(var o=q.length-1;o>=0;o--){var p=q[o];if(typeof(p)==="string"){if(!d[p]){alert("Please check your model name:"+p);continue}var m=d[p].rely;n.push(p);if(m){n=n.concat(a(m))}}else{if(typeof(p)==="function"){n.push(p)}}}return n}function g(m){var n=this;this.stackline=m;this.current=this.stackline[0];this.returns=[];this.start=function(){if(typeof(n.current)!="function"&&d[n.current]){j(d[n.current].path,d[n.current].type,d[n.current].charset,n.next)}else{j("bingo",n.current,n.next,n)}};this.next=function(){if(n.stackline.length==1||n.stackline.length<1){return}n.stackline.shift();n.current=n.stackline[0];n.start()}}var l=function(n,m){if(!n||!m||!m.path){return}d[n]=m};var h=function(){var o=[].slice.call(arguments);if(f.core&&f.autoload&&!k[f]){l("__core",{path:f.core});o=["__core"].concat(o)}var n=a(o).reverse();var m=new g(n);m.start();return m.returns};function c(o,s){var n=false,r=true,u=o.document,t=u.documentElement,x=u.addEventListener?"addEventListener":"attachEvent",v=u.addEventListener?"removeEventListener":"detachEvent",m=u.addEventListener?"":"on",w=function(y){if(y.type=="readystatechange"&&u.readyState!="complete"){return}(y.type=="load"?o:u)[v](m+y.type,w,false);if(!n&&(n=true)){s.call(o,y.type||y)}},q=function(){try{t.doScroll("left")}catch(y){setTimeout(q,50);return}w("poll")};if(u.readyState=="complete"){s.call(o,"lazy")}else{if(u.createEventObject&&t.doScroll){try{r=!o.frameElement}catch(p){}if(r){q()}}u[x](m+"DOMContentLoaded",w,false);u[x](m+"readystatechange",w,false);o[x](m+"load",w,false)}}var e=function(){var m=arguments;c(window,function(){h.apply(this,m)})};~function(){var n=document.getElementsByTagName("script")[0];var o=n.getAttribute("autoload");var m=n.getAttribute("core");if(o==="true"&&m){f.autoload=o;f.core=m}if(f.autoload&&f.core){h()}}();h.exe=h;h.load=j;h.add=l;h.ready=e;this.In=h}();