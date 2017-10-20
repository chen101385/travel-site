import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offset) {
        this.itemsToReveal = els;
        this.offsetPercentage = offset;
        this.hideInitially();
        this.createWaypoints();
        // this.hideInitally() will run as soon as page is opened;
    }
    
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item");
    }
    
    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this;
            /*set var to 'this' because out here, this is equal to the element that is being selected by the jQuery each function/method.
            
            Inside the new Waypoint object, 'this' points to the Waypoint object itself, but we want 'element' to point to the individual elements within the itemsToReveal selector that are being selected.
            */
            new Waypoint({
                element: currentItem,
                handler: function() {
                  $(currentItem).addClass("reveal-item--is-visible");
            },
            offset: that.offsetPercentage
            });
        });
    }
}

export default RevealOnScroll;