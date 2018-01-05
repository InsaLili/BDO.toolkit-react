"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* tslint:disable:no-unused-variable */
var React = require("react");
/* tslint:enable:no-unused-variable */
var Utilities_1 = require("../../Utilities");
var Button_types_1 = require("./Button.types");
var DefaultButton_1 = require("./DefaultButton/DefaultButton");
var ActionButton_1 = require("./ActionButton/ActionButton");
var CompoundButton_1 = require("./CompoundButton/CompoundButton");
var IconButton_1 = require("./IconButton/IconButton");
var PrimaryButton_1 = require("./PrimaryButton/PrimaryButton");
/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        /**
         * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
         */
        _this._shouldUpdateComponentRef = false;
        Utilities_1.warn("The Button component has been deprecated. Use specific variants instead. " +
            "(PrimaryButton, DefaultButton, IconButton, ActionButton, etc.)");
        return _this;
    }
    Button.prototype.render = function () {
        var props = this.props;
        switch (props.buttonType) {
            case Button_types_1.ButtonType.command:
                return React.createElement(ActionButton_1.ActionButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.compound:
                return React.createElement(CompoundButton_1.CompoundButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.icon:
                return React.createElement(IconButton_1.IconButton, tslib_1.__assign({}, props));
            case Button_types_1.ButtonType.primary:
                return React.createElement(PrimaryButton_1.PrimaryButton, tslib_1.__assign({}, props));
            default:
                return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, props));
        }
    };
    return Button;
}(Utilities_1.BaseComponent));
exports.Button = Button;
//# sourceMappingURL=Button.js.map