<?php

/**
 * Contao Open Source CMS
 *
 * Copyright (c) 2005-2016 Leo Feyer
 *
 * @license LGPL-3.0+
 */


/**
 * Register the namespaces
 */
ClassLoader::addNamespaces(array
(
	'MCupic',
));


/**
 * Register the classes
 */
ClassLoader::addClasses(array
(
	// Elements
	'MCupic\AdminMenuAsideItem' => 'system/modules/admin_menu_aside/elements/AdminMenuAsideItem.php',
));


/**
 * Register the templates
 */
TemplateLoader::addFiles(array
(
	'ce_admin_menu_aside_item' => 'system/modules/admin_menu_aside/templates',
));
