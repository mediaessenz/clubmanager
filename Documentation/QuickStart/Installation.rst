.. include:: /Includes.rst.txt
.. index:: Quick start; Quick installation
.. _quickInstallation:

==================
Quick installation
==================

.. important::

    Please note that the EXT:clubmanager only supports TYPO3 above version 11.5

In a :ref:`composer-based TYPO3 installation <t3start:install>` you can install
the extension EXT:clubmanager via composer:

.. code-block:: bash

    composer require quicko/clubmanager

In TYPO3 installations above version 11.5 the extension will be automatically
installed. You do not have to activate it manually.

If you have a legacy installation without composer, you can download and
install it via the "Extensionmanager"

Update the database scheme
--------------------------

Open your TYPO3 backend with :ref:`system maintainer <t3start:system-maintainer>`
permissions.

In the module menu to the left navigate to :guilabel:`Admin Tools > Maintanance`,
then click on :guilabel:`Analyze database` and create all.

Clear all caches
----------------

In the same module :guilabel:`Admin Tools > Maintanance` you can also
conveniently clear all caches by clicking the button :guilabel:`Flush cache`.


