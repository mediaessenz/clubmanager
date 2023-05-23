<?php

namespace Quicko\Clubmanager\Domain\Helper;

use TYPO3\CMS\Core\Country\CountryProvider;
use TYPO3\CMS\Core\Utility\GeneralUtility;

class Countries
{
    public static function getCountries(): array
    {
        $countryProvider = GeneralUtility::makeInstance(CountryProvider::class);
        $allCountries = $countryProvider->getAll();
        $tcaArray = [];
        foreach ($allCountries as $country) {
            $tcaArray[] = [$country->getLocalizedNameLabel(), $country->getAlpha2IsoCode()];
        }

        return $tcaArray;
    }
}
