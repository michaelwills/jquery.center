/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.1.1
*
* Requires: jQuery 1.2.6+
*/
;( function( $, window ){
  $.fn.center = function( options ){
    var $w, scrollTop;
    
    $w        = $( window ); // cache gobal
    scrollTop = $w.scrollTop();

    return this.each( function(){
      var $this, configs, centerize;
      
      $this = $( this ); // cache $( this )
      // merge user options with default configs
      configs = $.extend({
        against : 'window',
        top : false,
        topPercentage : 0.5,
				updateOnResize: true
      }, options );
    
      centerize = function(){
        var $against, x, y;
      
        if( configs.against === 'window' ){
          $against = $w;
        }else if( configs.against === 'parent' ){
          $against = $this.parent();
          scrollTop = 0;
        }else{
          $against = $this.parents( against );
          scrollTop = 0;
        }
      
        x = (( $against.width()) - ( $this.outerWidth())) * 0.5;
        y = (( $against.height()) - ( $this.outerHeight())) * configs.topPercentage + scrollTop;

        if( configs.top ) y = configs.top + scrollTop;

        $this.css({
          'left' : x,
          'top' : y
        });
      };
    
      // apply centerization
      centerize();
			if (configs.updateOnResize) {
				$w.resize( centerize );
			}
    });
  };
})( jQuery, window );
