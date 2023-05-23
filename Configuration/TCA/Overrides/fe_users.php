<?php

defined('TYPO3') or die();

call_user_func(function () {
    unset($GLOBALS['TCA']['fe_users']['columns']['country']);
    $GLOBALS['TCA']['fe_users'] = array_merge_recursive($GLOBALS['TCA']['fe_users'], [
        'columns' => [
            'country'          => [
                'exclude' => false,
                'label'   => 'LLL:EXT:clubmanager/Resources/Private/Language/locallang_db.xlf:tx_clubmanager_domain_model_location.country',
                'config'  => [
                    'type'                => 'select',
                    'renderType'          => 'selectSingle',
                    'items'      => \Quicko\Clubmanager\Domain\Helper\Countries::getCountries(),
                    'size'                => 1,
                    'default'             => 'DE',
                    'minitems'            => 0,
                    'maxitems'            => 1,
                    'sortItems' => [
                        'label' => 'asc',
                    ],
                ],
            ],
        ]
    ]);

    $fields = [
        'clubmanager_member' => [
            'label' => 'Member', /* SHALL_NOT_BE_VISIBLE */
            'config' => [
                'type' => 'select',
                'renderType' => 'selectSingle',
                'foreign_table' => 'tx_clubmanager_domain_model_member',
                'foreign_field' => 'feuser',
            ],
        ],
        'lastreminderemailsent' => [
            'label' => 'LLL:EXT:clubmanager/Resources/Private/Language/locallang_db.xlf:tx_clubmanager_domain_model_user.lastreminderemailsent',
            'config' => [
                'type' => 'input',
                'default' => 0,
                'eval' => 'datetime,int',
                'renderType' => 'inputDateTime',
            ]
        ]

    ];

    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('fe_users', $fields);

});
