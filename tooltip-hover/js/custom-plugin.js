/* developed by : Unmesh Dusane
*  version : 1.0
* */

/*
// Basic syntax for creating jqeury plugin
//We need an anonymous function to wrap around your function to avoid conflict
(function($){
    //Attach this new method to jQuery
    $.fn.extend({

         //Set the default values, use comma to separate the settings, example:
         var defaults = {

         }
        //This is where we have to write our plugin's name
        pluginname: function() {
            //Iterate over the current set of matched elements
            return this.each(function() {

                //code to be inserted here

            });
        }
    });

//pass jQuery to the function,
//So that we will able to use any valid Javascript variable name
//to replace "$" SIGN. But, we'll stick to $ (I like dollar sign: ) )
})(jQuery);*/

(function($){
    jQuery.fn.extend({
        popUpTooltip : function() {
            var defaults = {
                animatePadding: 60,
                defaultPadding: 10,
                evenColor: '#ccc',
                oddColor: '#eee'
            }
            var options = $.extend(defaults, options);
            var currentEle = $(this);
            var wrapper = "<div class='toolTipWrapper'></div>";
           /* var height = $(this).outerHeight()+5;
            var placeholder = $(this).attr("placeholder");
            var wrapper = "<div class='toolTipWrapper'></div>";
            currentEle.wrap(wrapper).after("<div class='placeholderTooltip' style='top:-"+height+"px; display:none'><span>"+placeholder+"</span></div>");
            $(currentEle).focusin(function(){
                $(".placeholderTooltip").fadeIn(1000);
            });
            $(currentEle).focusout(function(){
                $(".placeholderTooltip").fadeOut(300);
            });*/
            currentEle.each(function(i) {
                var myform = currentEle.eq(i);
                var myfields = $("input", myform);
                myfields.each(function(i) {
                    var myfield = myfields.eq(i);
                    var placeholder = myfield.attr("placeholder");
                    var height = myfield.outerHeight()+5;
                    myfield.wrap(wrapper).after("<div class='placeholderTooltip' style='top:-"+height+"px; display:none'><span>"+placeholder+"</span></div>");
                });
            });

            $(currentEle).focusin(function(){
                var currentText =$(this).find("input[type='text']:focus");
                console.log(currentText+"======>"+currentText.attr("value").length);
                if(currentText.attr("value").length > 0 ){
                    currentText.siblings(".placeholderTooltip").fadeIn(500);
                }
                currentText.keyup(function(){
                    if($(this).attr("value").length >= 0 ){
                        $(currentText).siblings(".placeholderTooltip").fadeIn(500);
                    }
                });
            });
                $(currentEle).focusout(function(){
                    $(this).find("input[type='text']").siblings(".placeholderTooltip").fadeOut(500);

                 });


               //$(this).find("input[type='text']:focus").siblings(".placeholderTooltip").fadeIn(1000);

        }
    });
})(jQuery);
