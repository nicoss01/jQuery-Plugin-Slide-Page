/**
* @name slidePage
* @fileOverview Plugin to display the page of link with ajax effects
* @version 0.1
* @author Nicolas Grillet <n.grillet01@gmail.com> 
* @class slidePage
* @memberOf jQuery.fn
*/
(function($) {
	$.fn.slidePage = function(params) {
		params = $.extend( {pageSpace:50,direction:"left",speed:2000}, params);
		this.each(function(){
				if($(this).attr("href")!=""){
				$(this).live("click",function(e){
					e.preventDefault();
					var url=$(this).attr("href");
					switch(params.direction){
						case "left"	: $("body").css("overflow","hidden").html("<div id='actualPage' style='margin:0;padding:0;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%'>"+$("body").html()+"</div><div id='nextPage' style='opacity:0;margin:0;padding:0;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%;margin-left:"+($("body").width()+params.pageSpace)+"px'></div>");
					$("#nextPage").load(url+" body",function(r,s,x){
						$("#actualPage").animate({"opacity":0,marginLeft:"-"+($("body").width()+params.pageSpace)},params.speed);
						$("#nextPage").html(r).animate({"opacity":1,marginLeft:0},params.speed,function(){
							window.location=url;
						});
						});
						break;
						case "right"	: $("body").css("overflow","hidden").html("<div id='actualPage' style='margin:0;padding:0;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%'>"+$("body").html()+"</div><div id='nextPage' style='opacity:0;margin:0;padding:0;overflow:hidden;position:fixed;top:0;left:0;width:100%;height:100%;margin-left:-"+($("body").width()+params.pageSpace)+"px'></div>");
					$("#nextPage").load(url+" body",function(r,s,x){
						$("#actualPage").animate({"opacity":0,marginLeft:($("body").width()+params.pageSpace)},params.speed);
						$("#nextPage").html(r).animate({"opacity":1,marginLeft:0},params.speed,function(){
							window.location=url;
						});
						});
						break;
						case "up"	: $("body").html("<div id='actualPage' style='margin:0;padding:0;'>"+$("body").html()+"</div><div id='nextPage' style='opacity:0;margin:0;padding:0;'></div>");
					$("#nextPage").load(url+" body",function(r,s,x){
						$("#actualPage").animate({"opacity":0,marginTop:"-"+($("body").height()+params.pageSpace)},params.speed);
						$("#nextPage").html(r).animate({"opacity":1,marginTop:params.pageSpace},params.speed,function(){
							window.location=url;
						});
						});
						break;
						case "down"	: $("body").html("<div id='nextPage' style='opacity:0;margin:0;padding:0;'></div><div id='actualPage' style='margin:0;padding:0;position:fixed;top:0'>"+$("body").html()+"</div>");
					$("#nextPage").load(url+" body",function(r,s,x){
						$("#nextPage").html(r).css("margin-top",-($("#nextPage").height()+params.pageSpace));
						$("#actualPage").animate({"opacity":0,top:($("#nextPage").height()+params.pageSpace)},params.speed);
						$("#nextPage").animate({"opacity":1,marginTop:0},params.speed,function(){
							window.location=url;
						});
						});
						break;
					}
					return false
					});
				}
		});
		return this;
	};
})(jQuery);
