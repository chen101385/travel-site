import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSections = $(".page-section");
    this.headerLinks =$(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    }
    
    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    
    createHeaderWaypoint() {
        //out here, 'this' points to StickyHeader;
        var that = this;
        new Waypoint({
            element: that.headerTriggerElement[0],
            /*element: expects a javascript native DOM element; currently, we are passing it a jQuery object.  
            
            first item within a jQuery array-like object is always a pointer to the native DOM element
            */
            handler: function(direction) {
                if (direction == "down") {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
    
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function() {
           var currentPageSection = this;
           new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                if (direction === "down") {
                 var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                 that.headerLinks.removeClass("is-current-link");
                 $(matchingHeaderLink).addClass("is-current-link");  
                 }
               },
               offset: "30%"
           }); 
            
              new Waypoint({
               element: currentPageSection,
               handler: function(direction) {
                if (direction === "up") {
                 var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                 that.headerLinks.removeClass("is-current-link");
                 $(matchingHeaderLink).addClass("is-current-link");  
                 }
               },
               offset: "-40%"
           }); 
        });
    }
}

export default StickyHeader;