import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }
    
    events() {
        //clicking open modal button
        this.openModalButton.click(this.openModal.bind(this));
        
        //clicking the x modal button
        this.closeModalButton.click(this.closeModal.bind(this));
        
        //pushes any key
        
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    
    keyPressHandler(e) {
        if (e.keyCode === 27) {
            this.closeModal();
        }
    }
    
    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }
    
    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

/* return false prevents default behavior of link element with "href = #" of scrolling up to the top of the screen when clicked 

  inside openModal() and closeModal(), 'this' needs to be re-bound manually (see above) to the "class" Modal. 
  Since these functions are not being run directly, but are being called by the events() call handlers where 'this' is bound to the button that was clicked on (left of dot rule) which is either this.openModalButton $('.openModal') or this.closeModalButton $('.modal__close'), NOT Modal class.  
        */


export default Modal;