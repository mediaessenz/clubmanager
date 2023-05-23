<?php

namespace Quicko\Clubmanager\FormEngine;

use TYPO3\CMS\Core\Imaging\IconFactory;
use TYPO3\CMS\Core\Information\Typo3Version;
use TYPO3\CMS\Core\Page\JavaScriptModuleInstruction;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Backend\Form\Element\InputTextElement;

/**
 *
 */
class SearchLocationButton extends InputTextElement
{
    /**
     *
     *
     * @return array As defined in initializeResultArray() of AbstractNode
     * @throws \JsonException
     */
    public function render(): array
    {
        $resultArray = parent::render();

        $mapping = $this->data['parameterArray']['fieldConf']['config']['mapping'];
        $target = $this->data['parameterArray']['fieldConf']['config']['target'];

        /** @var IconFactory $iconFactory */
        $iconFactory = GeneralUtility::makeInstance(IconFactory::class);
        $resultArray['html'] = sprintf(
            '<div class="clbmgr_search_location"><a href="#" class="clbmgr_search_location_button" data-mapping=\'%s\' data-target=\'%s\' data-name=\'%s\'  data-uid=\'%s\' data-field-name=\'%s\' data-table-name=\'%s\' >%s</a></div>',
            json_encode($mapping, JSON_THROW_ON_ERROR),
            json_encode($target, JSON_THROW_ON_ERROR),
            $this->data['parameterArray']['itemFormElName'],
            $this->data['vanillaUid'],
            $this->data['fieldName'],
            $this->data['tableName'],
            $iconFactory->getIcon('apps-toolbar-menu-search')
        );
//        To get this work, an es6 module js has to be created first
//        $typo3Version = new Typo3Version();
//        if ($typo3Version->getMajorVersion() > 11) {
//            $resultArray['javaScriptModules'][] = JavaScriptModuleInstruction::create(
//                '@quicko/clubmanager/SearchLocation.js'
//            );
//        } else {
//            $resultArray['requireJsModules'][] = JavaScriptModuleInstruction::forRequireJS(
//                'TYPO3/CMS/Clubmanager/SearchLocation'
//            );
//        }
        $resultArray['requireJsModules'][] = JavaScriptModuleInstruction::forRequireJS(
            'TYPO3/CMS/Clubmanager/SearchLocation'
        );

        return $resultArray;
    }
}
