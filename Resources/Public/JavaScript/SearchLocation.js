/**
 * Module: TYPO3/CMS/Clubmanager/SearchLocation
 *
 * JavaScript to handle search requests
 * @exports TYPO3/CMS/GsaTemplate/CmSearchLocation
 */
define(['TYPO3/CMS/Core/Ajax/AjaxRequest'], function (AjaxRequest) {
    'use strict';
    /**
     * @exports TYPO3/CMS/Clubmanager/SearchLocation
     */
    var SearchLocation = {};

    /**
     * @param {int} id
     */
    SearchLocation.run = function (uid, name, tableName, fieldName, mapping, target) {

        let searchString = "";
        mapping.forEach((element) => {
                const dataId = `data[${tableName}][${uid}][${element}]`;
                const input = document.querySelector(`[data-formengine-input-name="${dataId}"]`);
                searchString += input.value + " ";
            }
        )
        searchString = searchString.trim();
        if (!searchString) {
            return;
        }
        new AjaxRequest('https://nominatim.openstreetmap.org/search')
            .withQueryArguments({
                    format: "json",
                    limit: 1,
                    q: searchString
                }
            )
            .get()
            .then(async function (response) {
                const result = await response.resolve();
                if (result && result.length == 1) {
                    const data = result[0];
                    for (const [key, value] of Object.entries(target)) {
                        const input = document.querySelector(`[data-formengine-input-name="data[${tableName}][${uid}][${key}]"]`);
                        input.value = data[value];
                        input.dispatchEvent(new Event('change', {bubbles: true, cancelable: true}));
                    }
                    top.TYPO3.Notification.success('Fertig.');
                } else {
                    top.TYPO3.Notification.warning('Keine Daten gefunden.');
                }
            });

    };

    /**
     * initializes events using deferred bound to document
     * so AJAX reloads are no problem
     */
    SearchLocation.initializeEvents = function () {

        document.querySelector('.clbmgr_search_location_button').addEventListener('click', (event) => {
            event.preventDefault();
            const target = event.currentTarget;
            SearchLocation.run(target.dataset.uid, target.dataset.name, target.dataset.tableName, target.dataset.fieldName, JSON.parse(target.dataset.mapping), JSON.parse(target.dataset.target));
        });
    };

    SearchLocation.initializeEvents();

    return SearchLocation;
});

