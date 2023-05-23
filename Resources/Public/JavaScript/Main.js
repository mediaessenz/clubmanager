var Main;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {

;// CONCATENATED MODULE: ../Resources/Private/JavaScript/ContentBlocker.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ContentBlocker = /*#__PURE__*/function () {
  function ContentBlocker($element) {
    var _this = this;
    _classCallCheck(this, ContentBlocker);
    this.$element = $element;
    var $allowButton = $(".contentAllowButton", this.$element);
    if (this.getMode() == "cookieman" && window.cookieman) {
      if (cookieman.hasConsented(this.getCookieName())) {
        ContentBlocker.loadContent(this.$element);
      }
    } else {
      if (this.getCookie(this.getCookieName())) {
        ContentBlocker.loadContent(this.$element);
      }
    }
    $allowButton.on("click", function (e) {
      e.preventDefault();
      _this.allow();
    });
  }
  _createClass(ContentBlocker, [{
    key: "allow",
    value: function allow() {
      var $alwaysCheckbox = $('.allow-always', this.$element);
      if (this.getMode() == "cookieman" && window.cookieman) {
        if ($alwaysCheckbox.is(':checked')) {
          cookieman.consent(this.getConsentGroupId());
        }
      } else {
        this.setCookie(this.getCookieName(), true, 30);
      }
      ContentBlocker.loadContent(this.$element);
    }
  }, {
    key: "getCookieName",
    value: function getCookieName() {
      return this.getConsentGroupId() + "-allowed";
    }
  }, {
    key: "getConsentGroupId",
    value: function getConsentGroupId() {
      return this.$element.data("consent-group-id");
    }
  }, {
    key: "getMode",
    value: function getMode() {
      return this.$element.data("content-blocker-mode");
    }
  }, {
    key: "setCookie",
    value: function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
  }, {
    key: "getCookie",
    value: function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }
  }, {
    key: "eraseCookie",
    value: function eraseCookie(name) {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }], [{
    key: "mount",
    value: function mount() {
      var $blockContentElements = $('.block-content');
      $blockContentElements.each(function (index) {
        return new ContentBlocker($($blockContentElements[index]));
      });
    }
  }, {
    key: "load",
    value: function load(groupdId) {
      var $blockContentElements = $('[data-consent-groupid="' + groupdId + '"].block-content');
      $blockContentElements.each(function (index) {
        ContentBlocker.loadContent($($blockContentElements[index]));
      });
    }
  }, {
    key: "loadContent",
    value: function loadContent($element) {
      var type = $element.data("type");
      switch (type) {
        case "iframe":
          ContentBlocker.loadContentIFrame($element);
          break;
        case "userEvent":
          ContentBlocker.fireUserEvent($element);
          break;
      }
    }
  }, {
    key: "fireUserEvent",
    value: function fireUserEvent($element) {
      var event = new Event($element.data("event-name"));
      $element.html("");
      document.dispatchEvent(event);
    }
  }, {
    key: "loadContentIFrame",
    value: function loadContentIFrame($element) {
      $element.html('<iframe width="100%" height="100%" src="' + $element.data("src") + '"></iframe>');
    }
  }]);
  return ContentBlocker;
}();

;// CONCATENATED MODULE: ../Resources/Private/JavaScript/Main.js

window.addEventListener("DOMContentLoaded", function (event) {
  ContentBlocker.mount();
  window.ContentBlocker = ContentBlocker;
});
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

Main = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Main.js.map