(()=>{var a={971:()=>{$((function(){fetch("https://api.themoviedb.org/3/search/movie?api_key=c4de5cdcdbbf6ef28d8e1cce52659a92&language=en-US&page=1&include_adult=false&query=query").then((a=>a.json())).then((a=>{var e=$("#pagination-demo2");e.pagination({dataSource:a,locator:"results",totalNumber:50,pageSize:5,showPageNumbers:!0,showPrevious:!0,showNext:!0,showNavigator:!0,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,ajax:{beforeSend:function(){e.prev().html("Loading data from flickr.com ...")}},callback:function(a,t){var i="<ul>";$.each(a,(function(a,e){i+='<div class ="divMovies">',i+=`<li><img src=${"https://image.tmdb.org/t/p/w500/"+e.poster_path}></li>`,i+='<li class ="liInfo">'+e.original_title+"</li>",i+='<li class ="liInfo">'+e.overview+"</li>",i+="</div>"})),i+="</ul>",e.prev().html(i)}})}))}))},778:function(a,e,t){var i;!function(o,n){function r(a){throw new Error("Pagination: "+a)}function s(a){a.dataSource||r('"dataSource" is required.'),"string"==typeof a.dataSource?void 0===a.totalNumberLocator?void 0===a.totalNumber?r('"totalNumber" is required.'):n.isNumeric(a.totalNumber)||r('"totalNumber" is incorrect. (Number)'):n.isFunction(a.totalNumberLocator)||r('"totalNumberLocator" should be a Function.'):g.isObject(a.dataSource)&&(void 0===a.locator?r('"dataSource" is an Object, please specify "locator".'):"string"==typeof a.locator||n.isFunction(a.locator)||r(a.locator+" is incorrect. (String | Function)")),void 0===a.formatResult||n.isFunction(a.formatResult)||r('"formatResult" should be a Function.')}function l(a){n.each(["go","previous","next","disable","enable","refresh","show","hide","destroy"],(function(e,t){a.off(c+t)})),a.data("pagination",{}),n(".paginationjs",a).remove()}void 0===n&&r("Pagination requires jQuery.");var u="pagination",c="__pagination-";n.fn.pagination&&(u="pagination2"),n.fn[u]=function(a){if(void 0===a)return this;var e=n(this),t=n.extend({},n.fn[u].defaults,a),i={initialize:function(){var a=this;if(e.data("pagination")||e.data("pagination",{}),!1!==a.callHook("beforeInit")){e.data("pagination").initialized&&n(".paginationjs",e).remove(),a.disabled=!!t.disabled;var i=a.model={pageRange:t.pageRange,pageSize:t.pageSize};a.parseDataSource(t.dataSource,(function(o){a.isAsync=g.isString(o),g.isArray(o)&&(i.totalNumber=t.totalNumber=o.length),a.isDynamicTotalNumber=a.isAsync&&t.totalNumberLocator;var n=a.render(!0);t.className&&n.addClass(t.className),i.el=n,e["bottom"===t.position?"append":"prepend"](n),a.observer(),e.data("pagination").initialized=!0,a.callHook("afterInit",n)}))}},render:function(a){var e=this,i=e.model,o=i.el||n('<div class="paginationjs"></div>'),r=!0!==a;e.callHook("beforeRender",r);var s=i.pageNumber||t.pageNumber,l=t.pageRange||0,u=e.getTotalPage(),c=s-l,g=s+l;return g>u&&(g=u,c=(c=u-2*l)<1?1:c),c<=1&&(c=1,g=Math.min(2*l+1,u)),o.html(e.generateHTML({currentPage:s,pageRange:l,rangeStart:c,rangeEnd:g})),t.hideWhenLessThanOnePage&&o[u<=1?"hide":"show"](),e.callHook("afterRender",r),o},generatePageNumbersHTML:function(a){var e,i=a.currentPage,o=this.getTotalPage(),n=a.rangeStart,r=a.rangeEnd,s="",l=t.pageLink,u=t.ellipsisText,c=t.classPrefix,g=t.activeClassName,p=t.disableClassName;if(null===t.pageRange){for(e=1;e<=o;e++)s+=e==i?'<li class="'+c+"-page J-paginationjs-page "+g+'" data-num="'+e+'"><a>'+e+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+e+'"><a href="'+l+'">'+e+"</a></li>";return s}if(n<=3)for(e=1;e<n;e++)s+=e==i?'<li class="'+c+"-page J-paginationjs-page "+g+'" data-num="'+e+'"><a>'+e+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+e+'"><a href="'+l+'">'+e+"</a></li>";else t.showFirstOnEllipsisShow&&(s+='<li class="'+c+"-page "+c+'-first J-paginationjs-page" data-num="1"><a href="'+l+'">1</a></li>'),s+='<li class="'+c+"-ellipsis "+p+'"><a>'+u+"</a></li>";for(e=n;e<=r;e++)s+=e==i?'<li class="'+c+"-page J-paginationjs-page "+g+'" data-num="'+e+'"><a>'+e+"</a></li>":'<li class="'+c+'-page J-paginationjs-page" data-num="'+e+'"><a href="'+l+'">'+e+"</a></li>";if(r>=o-2)for(e=r+1;e<=o;e++)s+='<li class="'+c+'-page J-paginationjs-page" data-num="'+e+'"><a href="'+l+'">'+e+"</a></li>";else s+='<li class="'+c+"-ellipsis "+p+'"><a>'+u+"</a></li>",t.showLastOnEllipsisShow&&(s+='<li class="'+c+"-page "+c+'-last J-paginationjs-page" data-num="'+o+'"><a href="'+l+'">'+o+"</a></li>");return s},generateHTML:function(a){var e=this,i=a.currentPage,o=e.getTotalPage(),r=e.getTotalNumber(),s=t.showPrevious,l=t.showNext,u=t.showPageNumbers,c=t.showNavigator,g=t.showGoInput,p=t.showGoButton,d=t.pageLink,f=t.prevText,m=t.nextText,b=t.goButtonText,h=t.classPrefix,v=t.disableClassName,N=t.ulClassName,y="",k='<input type="text" class="J-paginationjs-go-pagenumber">',P='<input type="button" class="J-paginationjs-go-button" value="'+b+'">',x=n.isFunction(t.formatNavigator)?t.formatNavigator(i,o,r):t.formatNavigator,w=n.isFunction(t.formatGoInput)?t.formatGoInput(k,i,o,r):t.formatGoInput,j=n.isFunction(t.formatGoButton)?t.formatGoButton(P,i,o,r):t.formatGoButton,S=n.isFunction(t.autoHidePrevious)?t.autoHidePrevious():t.autoHidePrevious,T=n.isFunction(t.autoHideNext)?t.autoHideNext():t.autoHideNext,H=n.isFunction(t.header)?t.header(i,o,r):t.header,F=n.isFunction(t.footer)?t.footer(i,o,r):t.footer;return H&&(y+=e.replaceVariables(H,{currentPage:i,totalPage:o,totalNumber:r})),(s||u||l)&&(y+='<div class="paginationjs-pages">',y+=N?'<ul class="'+N+'">':"<ul>",s&&(i<=1?S||(y+='<li class="'+h+"-prev "+v+'"><a>'+f+"</a></li>"):y+='<li class="'+h+'-prev J-paginationjs-previous" data-num="'+(i-1)+'" title="Previous page"><a href="'+d+'">'+f+"</a></li>"),u&&(y+=e.generatePageNumbersHTML(a)),l&&(i>=o?T||(y+='<li class="'+h+"-next "+v+'"><a>'+m+"</a></li>"):y+='<li class="'+h+'-next J-paginationjs-next" data-num="'+(i+1)+'" title="Next page"><a href="'+d+'">'+m+"</a></li>"),y+="</ul></div>"),c&&x&&(y+='<div class="'+h+'-nav J-paginationjs-nav">'+e.replaceVariables(x,{currentPage:i,totalPage:o,totalNumber:r})+"</div>"),g&&w&&(y+='<div class="'+h+'-go-input">'+e.replaceVariables(w,{currentPage:i,totalPage:o,totalNumber:r,input:k})+"</div>"),p&&j&&(y+='<div class="'+h+'-go-button">'+e.replaceVariables(j,{currentPage:i,totalPage:o,totalNumber:r,button:P})+"</div>"),F&&(y+=e.replaceVariables(F,{currentPage:i,totalPage:o,totalNumber:r})),y},findTotalNumberFromRemoteResponse:function(a){this.model.totalNumber=t.totalNumberLocator(a)},go:function(a,i){function o(a){if(!1===r.callHook("beforePaging",l))return!1;if(s.direction=void 0===s.pageNumber?0:l>s.pageNumber?1:-1,s.pageNumber=l,r.render(),r.disabled&&r.isAsync&&r.enable(),e.data("pagination").model=s,t.formatResult){var o=n.extend(!0,[],a);g.isArray(a=t.formatResult(o))||(a=o)}e.data("pagination").currentPageData=a,r.doCallback(a,i),r.callHook("afterPaging",l),1==l&&r.callHook("afterIsFirstPage"),l==r.getTotalPage()&&r.callHook("afterIsLastPage")}var r=this,s=r.model;if(!r.disabled){var l=a;if((l=parseInt(l))&&!(l<1)){var u=t.pageSize,c=r.getTotalNumber(),p=r.getTotalPage();if(!(c>0&&l>p)){if(!r.isAsync)return void o(r.getDataFragment(l));var d={},f=t.alias||{};d[f.pageSize?f.pageSize:"pageSize"]=u,d[f.pageNumber?f.pageNumber:"pageNumber"]=l;var m=n.isFunction(t.ajax)?t.ajax():t.ajax,b={type:"get",cache:!1,data:{},contentType:"application/x-www-form-urlencoded; charset=UTF-8",dataType:"json",async:!0};n.extend(!0,b,m),n.extend(b.data,d),b.url=t.dataSource,b.success=function(a){r.isDynamicTotalNumber?r.findTotalNumberFromRemoteResponse(a):r.model.totalNumber=t.totalNumber,o(r.filterDataByLocator(a))},b.error=function(a,e,i){t.formatAjaxError&&t.formatAjaxError(a,e,i),r.enable()},r.disable(),n.ajax(b)}}}},doCallback:function(a,e){var i=this.model;n.isFunction(e)?e(a,i):n.isFunction(t.callback)&&t.callback(a,i)},destroy:function(){!1!==this.callHook("beforeDestroy")&&(this.model.el.remove(),e.off(),n("#paginationjs-style").remove(),this.callHook("afterDestroy"))},previous:function(a){this.go(this.model.pageNumber-1,a)},next:function(a){this.go(this.model.pageNumber+1,a)},disable:function(){var a=this,e=a.isAsync?"async":"sync";!1!==a.callHook("beforeDisable",e)&&(a.disabled=!0,a.model.disabled=!0,a.callHook("afterDisable",e))},enable:function(){var a=this,e=a.isAsync?"async":"sync";!1!==a.callHook("beforeEnable",e)&&(a.disabled=!1,a.model.disabled=!1,a.callHook("afterEnable",e))},refresh:function(a){this.go(this.model.pageNumber,a)},show:function(){this.model.el.is(":visible")||this.model.el.show()},hide:function(){this.model.el.is(":visible")&&this.model.el.hide()},replaceVariables:function(a,e){var t;for(var i in e){var o=e[i],n=new RegExp("<%=\\s*"+i+"\\s*%>","img");t=(t||a).replace(n,o)}return t},getDataFragment:function(a){var e=t.pageSize,i=t.dataSource,o=this.getTotalNumber(),n=e*(a-1)+1,r=Math.min(a*e,o);return i.slice(n-1,r)},getTotalNumber:function(){return this.model.totalNumber||t.totalNumber||0},getTotalPage:function(){return Math.ceil(this.getTotalNumber()/t.pageSize)},getLocator:function(a){var e;return"string"==typeof a?e=a:n.isFunction(a)?e=a():r('"locator" is incorrect. (String | Function)'),e},filterDataByLocator:function(a){var e,i=this.getLocator(t.locator);if(g.isObject(a)){try{n.each(i.split("."),(function(t,i){e=(e||a)[i]}))}catch(a){}e?g.isArray(e)||r("dataSource."+i+" must be an Array."):r("dataSource."+i+" is undefined.")}return e||a},parseDataSource:function(a,e){var i=this;g.isObject(a)?e(t.dataSource=i.filterDataByLocator(a)):g.isArray(a)?e(t.dataSource=a):n.isFunction(a)?t.dataSource((function(a){g.isArray(a)||r('The parameter of "done" Function should be an Array.'),i.parseDataSource.call(i,a,e)})):"string"==typeof a?(/^https?|file:/.test(a)&&(t.ajaxDataType="jsonp"),e(a)):r('Unexpected type of "dataSource".')},callHook:function(a){var i,r=e.data("pagination"),s=Array.prototype.slice.apply(arguments);return s.shift(),t[a]&&n.isFunction(t[a])&&!1===t[a].apply(o,s)&&(i=!1),r.hooks&&r.hooks[a]&&n.each(r.hooks[a],(function(a,e){!1===e.apply(o,s)&&(i=!1)})),!1!==i},observer:function(){var a=this,i=a.model.el;e.on(c+"go",(function(e,t,i){(t=parseInt(n.trim(t)))&&(n.isNumeric(t)||r('"pageNumber" is incorrect. (Number)'),a.go(t,i))})),i.delegate(".J-paginationjs-page","click",(function(e){var i=n(e.currentTarget),o=n.trim(i.attr("data-num"));if(o&&!i.hasClass(t.disableClassName)&&!i.hasClass(t.activeClassName))return!1!==a.callHook("beforePageOnClick",e,o)&&(a.go(o),a.callHook("afterPageOnClick",e,o),!!t.pageLink&&void 0)})),i.delegate(".J-paginationjs-previous","click",(function(e){var i=n(e.currentTarget),o=n.trim(i.attr("data-num"));if(o&&!i.hasClass(t.disableClassName))return!1!==a.callHook("beforePreviousOnClick",e,o)&&(a.go(o),a.callHook("afterPreviousOnClick",e,o),!!t.pageLink&&void 0)})),i.delegate(".J-paginationjs-next","click",(function(e){var i=n(e.currentTarget),o=n.trim(i.attr("data-num"));if(o&&!i.hasClass(t.disableClassName))return!1!==a.callHook("beforeNextOnClick",e,o)&&(a.go(o),a.callHook("afterNextOnClick",e,o),!!t.pageLink&&void 0)})),i.delegate(".J-paginationjs-go-button","click",(function(t){var o=n(".J-paginationjs-go-pagenumber",i).val();if(!1===a.callHook("beforeGoButtonOnClick",t,o))return!1;e.trigger(c+"go",o),a.callHook("afterGoButtonOnClick",t,o)})),i.delegate(".J-paginationjs-go-pagenumber","keyup",(function(t){if(13===t.which){var o=n(t.currentTarget).val();if(!1===a.callHook("beforeGoInputOnEnter",t,o))return!1;e.trigger(c+"go",o),n(".J-paginationjs-go-pagenumber",i).focus(),a.callHook("afterGoInputOnEnter",t,o)}})),e.on(c+"previous",(function(e,t){a.previous(t)})),e.on(c+"next",(function(e,t){a.next(t)})),e.on(c+"disable",(function(){a.disable()})),e.on(c+"enable",(function(){a.enable()})),e.on(c+"refresh",(function(e,t){a.refresh(t)})),e.on(c+"show",(function(){a.show()})),e.on(c+"hide",(function(){a.hide()})),e.on(c+"destroy",(function(){a.destroy()}));var o=Math.max(a.getTotalPage(),1),s=t.pageNumber;a.isDynamicTotalNumber&&(s=1),t.triggerPagingOnInit&&e.trigger(c+"go",Math.min(s,o))}};if(e.data("pagination")&&!0===e.data("pagination").initialized){if(n.isNumeric(a))return e.trigger.call(this,c+"go",a,arguments[1]),this;if("string"==typeof a){var p=Array.prototype.slice.apply(arguments);switch(p[0]=c+p[0],a){case"previous":case"next":case"go":case"disable":case"enable":case"refresh":case"show":case"hide":case"destroy":e.trigger.apply(this,p);break;case"getSelectedPageNum":return e.data("pagination").model?e.data("pagination").model.pageNumber:e.data("pagination").attributes.pageNumber;case"getTotalPage":return Math.ceil(e.data("pagination").model.totalNumber/e.data("pagination").model.pageSize);case"getSelectedPageData":return e.data("pagination").currentPageData;case"isDisabled":return!0===e.data("pagination").model.disabled;default:r("Unknown action: "+a)}return this}l(e)}else g.isObject(a)||r("Illegal options");return s(t),i.initialize(),this},n.fn[u].defaults={totalNumber:0,pageNumber:1,pageSize:10,pageRange:2,showPrevious:!0,showNext:!0,showPageNumbers:!0,showNavigator:!1,showGoInput:!1,showGoButton:!1,pageLink:"",prevText:"&laquo;",nextText:"&raquo;",ellipsisText:"...",goButtonText:"Go",classPrefix:"paginationjs",activeClassName:"active",disableClassName:"disabled",inlineStyle:!0,formatNavigator:"<%= currentPage %> / <%= totalPage %>",formatGoInput:"<%= input %>",formatGoButton:"<%= button %>",position:"bottom",autoHidePrevious:!1,autoHideNext:!1,triggerPagingOnInit:!0,hideWhenLessThanOnePage:!1,showFirstOnEllipsisShow:!0,showLastOnEllipsisShow:!0,callback:function(){}},n.fn.addHook=function(a,e){arguments.length<2&&r("Missing argument."),n.isFunction(e)||r("callback must be a function.");var t=n(this),i=t.data("pagination");i||(t.data("pagination",{}),i=t.data("pagination")),!i.hooks&&(i.hooks={}),i.hooks[a]=i.hooks[a]||[],i.hooks[a].push(e)},n[u]=function(a,e){var t;if(arguments.length<2&&r("Requires two parameters."),(t="string"!=typeof a&&a instanceof jQuery?a:n(a)).length)return t.pagination(e),t};var g={};n.each(["Object","Array","String"],(function(a,e){g["is"+e]=function(a){return function(a,e){return("object"==(e=typeof a)?null==a?"null":Object.prototype.toString.call(a).slice(8,-1):e).toLowerCase()}(a)===e.toLowerCase()}})),void 0===(i=function(){return n}.call(e,t,e,a))||(a.exports=i)}(this,window.jQuery)}},e={};function t(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={exports:{}};return a[i].call(n.exports,n,n.exports,t),n.exports}t.n=a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},t.d=(a,e)=>{for(var i in e)t.o(e,i)&&!t.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:e[i]})},t.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),(()=>{"use strict";t(971),t(778)})()})();