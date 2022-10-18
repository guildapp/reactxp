"use strict";
/**
 * ModalContainer.tsx
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation of a view that's used to render modals.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ModalContainer = /** @class */ (function (_super) {
    __extends(ModalContainer, _super);
    function ModalContainer(props) {
        return _super.call(this, props) || this;
    }
    ModalContainer.prototype.render = function () {
        return (React.createElement("div", null, this.props.children));
    };
    return ModalContainer;
}(React.Component));
exports.ModalContainer = ModalContainer;
exports.default = ModalContainer;
