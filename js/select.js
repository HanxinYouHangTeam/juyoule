// 节目时间选择
(function($){
    jQuery.fn.select = function(options){  
        return this.each(function(){  
            var $this = $(this);  
            var $shows = $this.find(".shows");  
            // var $selectOption = $this.find(".time-select-value");  
            var $el = $this.find("ul > li");  
                                    
            $this.click(function(e){  
                $(this).toggleClass("zIndex");  
                $(this).children("ul").toggleClass("dis");  
                e.stopPropagation();  
            });  
            
            $el.bind("click",function(){  
                var $this_ = $(this);  
                // $this.find("span").removeClass("gray");  
                $this_.parent().parent().find(".time-select-value").text($this_.text());  
                $('#time-select').val($this_.text())
            });  
            
            $("body").bind("click",function(){  
                $this.removeClass("zIndex");  
                $this.find("ul").removeClass("dis");      
            })  
        //eahc End    
        });  
        
    }  
})(jQuery);  
$(document).ready(function() {
    $(".show-select").select(); 
})

// 节目类型选择
jQuery.fn.select2 = function(options){  
        return this.each(function(){  
            var $this = $(this);  
            var $shows = $this.find(".types");  
            // var $selectOption = $this.find(".type-select-value");  
            var $el = $this.find("ul > li");  
                                    
            $this.click(function(e){  
                $(this).toggleClass("zIndex");  
                $(this).children("ul").toggleClass("dis");  
                e.stopPropagation();  
            });  
            
            $el.bind("click",function(){  
                var $this_ = $(this);  
                
                // $this.find("span").removeClass("gray");  
                $this_.parent().parent().find(".type-select-value").text($this_.text());  
                $('#type-select').val($this_.text())
            });  
            
            $("body").bind("click",function(){  
                $this.removeClass("zIndex");  
                $this.find("ul").removeClass("dis");      
            })  
            
        //eahc End    
        });  
        
    }  

$(document).ready(function() {
    $(".type-select").select2(); 
})