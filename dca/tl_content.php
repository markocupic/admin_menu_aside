<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (C) 2005-2012 Leo Feyer
 *
 * @package Gallery Creator
 * @link    http://www.contao.org
 * @license http://www.gnu.org/licenses/lgpl-3.0.html LGPL
 */


$GLOBALS['TL_DCA']['tl_content']['palettes']['adminMenuAsideItem'] = 'name,type,headline,bodyContent,footerContent;{template_legend:hide},customTpl;{icon_legend},iconClass;{protected_legend:hide},protected;{expert_legend:hide},guests,cssID,space;{invisible_legend:hide},invisible,start,stop';


/**
 * Add fields to tl_content
 */

$GLOBALS['TL_DCA']['tl_content']['fields']['bodyContent'] = array(
    'label' => &$GLOBALS['TL_LANG']['tl_content']['bodyContent'],
    'exclude' => true,
    'search' => true,
    'inputType' => 'textarea',
    'eval' => array('mandatory' => false, 'rte' => 'tinyMCE', 'helpwizard' => true),
    'explanation' => 'insertTags',
    'sql' => "mediumtext NULL"
);

$GLOBALS['TL_DCA']['tl_content']['fields']['footerContent'] = array(
    'label' => &$GLOBALS['TL_LANG']['tl_content']['bodyContent'],
    'exclude' => true,
    'search' => true,
    'inputType' => 'textarea',
    'eval' => array('mandatory' => false, 'rte' => 'tinyMCE', 'helpwizard' => true),
    'explanation' => 'insertTags',
    'sql' => "mediumtext NULL"
);

$GLOBALS['TL_DCA']['tl_content']['fields']['iconClass'] = array(
    'label' => &$GLOBALS['TL_LANG']['tl_content']['iconClass'],
    'exclude' => true,
    'search' => true,
    'inputType' => 'text',
    'eval' => array('maxlength' => 200),
    'sql' => "varchar(255) NOT NULL default ''"
);
