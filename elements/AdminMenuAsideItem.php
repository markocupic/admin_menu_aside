<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2015 Leo Feyer
 *
 * @license LGPL-3.0+
 */

namespace MCupic;


/**
 * Front end content element "service_link".
 *
 * @author Leo Feyer <https://github.com/leofeyer>
 */
class AdminMenuAsideItem extends \ContentElement
{

    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'ce_admin_menu_aside_item';

    /**
     * Check whether the target page and the article are published
     * @return string
     */
    public function generate()
    {


        return parent::generate();

    }


    /**
     * Generate the content element
     */
    protected function compile()
    {
        global $objPage;

        // Clean the RTE output
        if ($objPage->outputFormat == 'xhtml')
        {
            $this->bodyContent = \StringUtil::toXhtml($this->bodyContent);
            $this->footerContent = \StringUtil::toXhtml($this->footerContent);

        }
        else
        {
            $this->bodyContent = \StringUtil::toHtml5($this->bodyContent);
            $this->footerContent = \StringUtil::toXhtml($this->footerContent);
        }


        $this->Template->bodyContent = \StringUtil::encodeEmail($this->bodyContent);
        $this->Template->footerContent = \StringUtil::encodeEmail($this->footerContent);
    }
}