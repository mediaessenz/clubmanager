<?php

namespace Quicko\Clubmanager\ViewHelpers;

use TYPO3\CMS\Core\Country\CountryProvider;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3Fluid\Fluid\Core\ViewHelper\AbstractViewHelper;

class CountryListViewHelper extends AbstractViewHelper
{
  /**
   * Returns the country by uid
   *
   * @return string
   */
  public function render()
  {
      return GeneralUtility::makeInstance(CountryProvider::class)->getAll();
  }
}
