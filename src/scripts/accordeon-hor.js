(function() {
    const mesureWidth = item => {
        let reqItemWidth = 0;
        const screenWidth = $(window).width();
        const container = item.closest('.colors-menu');
        const titlesBlocks = container.find('.colors-menu__title');
        const titlesWidth = titlesBlocks.width() * titlesBlocks.length;
        const textContainer = item.find('.colors-menu__container');
        const paddingLeft = parseInt(textContainer.css('padding-left'));
        const paddingRight = parseInt(textContainer.css('padding-right'));
        const isMobile = window.matchMedia('(max-width: 768px)').matches;
        if (isMobile) {
            reqItemWidth = screenWidth - titlesWidth;
        } else {
            reqItemWidth = 500;
        }
    
        return {
            container: reqItemWidth,
            textContainer: reqItemWidth - paddingLeft - paddingRight
        }
    };
    
    const closeEveryItemContainer = container => {
        const items = container.find('.colors-menu__item');
        const content = container.find('.colors-menu__content');
        items.removeClass('active');
        content.width(0);
    }
    
    const OpenItem = item => {
        const hiddenContent = item.find('.colors-menu__content');
        const reqWidth = mesureWidth(item);
        const textBlock = item.find('.colors-menu__container');
        item.addClass('active');
        hiddenContent.width(reqWidth.container);
        textBlock.width(reqWidth.textContainer);
    }
    
    $('.colors-menu__title').on('click', e => {
        e.preventDefault();
        const $this = $(e.currentTarget);
        const item = $this.closest('.colors-menu__item');
        const itemOpened = item.hasClass('active');
        const container = $this.closest('.colors-menu');
    
        if (itemOpened) {
            closeEveryItemContainer(container);
        } else {
            closeEveryItemContainer(container);
            OpenItem(item);
        }
        
    });
})()

