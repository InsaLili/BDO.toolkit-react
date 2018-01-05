"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ReactDOM = require("react-dom");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonSwapExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonSwapExample, _super);
    function ButtonSwapExample(props) {
        var _this = _super.call(this, props) || this;
        _this.hasFocus = false;
        _this.buttonRef = null;
        _this.state = {
            isPrimary: true
        };
        return _this;
    }
    ButtonSwapExample.prototype.componentWillUpdate = function (nextProps, nextState) {
        // check to see if our button element has focus
        this.hasFocus = document.activeElement === this.buttonRef;
    };
    ButtonSwapExample.prototype.componentDidUpdate = function (prevProps, prevState) {
        // if our button previously had focus but we lost it
        // because we switched the control type, we need to set focus again
        if (this.hasFocus && document.activeElement !== this.buttonRef) {
            this.buttonRef.focus();
        }
    };
    ButtonSwapExample.prototype.render = function () {
        var isPrimary = this.state.isPrimary;
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        var text = 'Swap';
        // determine which button to render
        var button = isPrimary
            ? (React.createElement(Button_1.PrimaryButton, { ref: this._setButtonRef, disabled: disabled, checked: checked, onClick: this._onClick }, text)) : (React.createElement(Button_1.DefaultButton, { ref: this._setButtonRef, disabled: disabled, checked: checked, onClick: this._onClick }, text));
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' }, button));
    };
    ButtonSwapExample.prototype._setButtonRef = function (ref) {
        this.buttonRef = ReactDOM.findDOMNode(ref);
    };
    ButtonSwapExample.prototype._onClick = function () {
        // change the button type on click
        this.setState({ isPrimary: !this.state.isPrimary });
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ButtonSwapExample.prototype, "_setButtonRef", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], ButtonSwapExample.prototype, "_onClick", null);
    return ButtonSwapExample;
}(React.Component));
exports.ButtonSwapExample = ButtonSwapExample;
//# sourceMappingURL=Button.Swap.Example.js.map