var AMA = {
    ClassName: {
        FIXED_TABS_ASIDE_OPEN: 'fixed-tabs-aside-open',
        FIXED_TABS_ASIDE_LAYER: 'fixed-tabs-aside-layer',
        FIXED_TABS_ASIDE_NAV_ROW: 'fixed-tabs-aside-nav-row',
        FIXED_TABS_ASIDE_CLOSE_BUTTON: 'fixed-tabs-aside-close-button',
        FIXED_TABS_ASIDE_CLOSE_ICON_CLASS: 'fa fa-times',
        FIXED_TABS_ASIDE_TAB_PANE: 'fixed-tabs-aside-tab-pane',
        FIXED_TABS_ASIDE_MENU_BUTTON: 'fixed-tabs-aside-menu-button',
        FIXED_TABS_ASIDE_CONTENT_ROW: 'fixed-tabs-aside-content-row',
        FIXED_TABS_ASIDE_MENU_BUTTON: 'fixed-tabs-aside-menu-button',
        ACTIVE: 'active'
    }
};


var AdminMenuAside = class self {
    constructor() {

        // Create elements
        self._className = AMA.ClassName;
        self._html = $('html');
        self._body = $('body');
        self._layer = $('<div></div>').addClass(self._className.FIXED_TABS_ASIDE_LAYER);
        self._iconBody = $('<div id="fixedTabsAsideIconBar"></div>');
        self._menuBody = $('<div id="fixedTabsAsideTabContent"></div>');
        self._navRow = $('<div></div>').addClass(self._className.FIXED_TABS_ASIDE_NAV_ROW);
        self._closeButton = $('<button title="schliessen"></button>').addClass(self._className.FIXED_TABS_ASIDE_CLOSE_BUTTON);
        self._closeButtonIcon = $('<i></i>').addClass(self._className.FIXED_TABS_ASIDE_CLOSE_ICON_CLASS);
        self._contentRow = $('<div></div>').addClass(self._className.FIXED_TABS_ASIDE_CONTENT_ROW);


        if ($('.' + self._className.FIXED_TABS_ASIDE_TAB_PANE).length < 1) {
            return;
        }

        // Insert layer to DOM
        self._body.append(self._layer);

        // Append menu box to DOM
        self._body.append(self._iconBody);
        self._body.append(self._menuBody);
        self._menuBody.append(self._navRow);
        self._navRow.append(self._closeButton);
        self._closeButton.append(self._closeButtonIcon);
        self._menuBody.append(self._contentRow);


        // Collect all content-items
        var i = 0;
        $('.' + self._className.FIXED_TABS_ASIDE_TAB_PANE).each(function () {


            // Append item to the content row
            let el = $(this).detach();
            self._contentRow.append(el);

            // Add Icon to the icon body
            let strIcon = $(this).attr('data-icon');
            let strTitle = $(this).attr('data-title');
            $(this).attr('data-id', i);
            let elIcon = $('<div title="' + strTitle + '" data-id="' + i + '" role="button"></div>');
            elIcon.addClass(self._className.FIXED_TABS_ASIDE_MENU_BUTTON);
            elIcon.append('<span class="' + strIcon + '"></span>');
            self._iconBody.append(elIcon);
            i++;
        });

        // Add class active to the first item
        $('.' + self._className.FIXED_TABS_ASIDE_TAB_PANE).eq(0).addClass(self._className.ACTIVE);
        $('.' + self._className.FIXED_TABS_ASIDE_MENU_BUTTON).eq(0).addClass(self._className.ACTIVE);


        // EVENTS
        self._layer.click(function () {
            self.closeMenu();
        });

        // Hide Menu
        self._closeButton.click(function () {
            self.closeMenu();
        });

        // Open Menu and shov item, when clicking on the icon
        $('.' + self._className.FIXED_TABS_ASIDE_MENU_BUTTON).click(function () {
            let strId = $(this).attr('data-id');
            self.openItem(strId);
        });

        // Finaly show Menu
        self._menuBody.show();
    }

    static openMenu() {
        self._html.addClass(self._className.FIXED_TABS_ASIDE_OPEN);
    }

    static closeMenu() {
        self._html.removeClass(self._className.FIXED_TABS_ASIDE_OPEN);
    }

    static openItem(index) {
        if (index == '') {
            index = 0;
        }

        $('.' + self._className.FIXED_TABS_ASIDE_TAB_PANE).removeClass(self._className.ACTIVE);
        $('.' + self._className.FIXED_TABS_ASIDE_MENU_BUTTON).removeClass(self._className.ACTIVE);
        $('.' + self._className.FIXED_TABS_ASIDE_TAB_PANE).eq(index).addClass(self._className.ACTIVE);
        $('.' + self._className.FIXED_TABS_ASIDE_MENU_BUTTON).eq(index).addClass(self._className.ACTIVE);
        self.openMenu();
    }
};



