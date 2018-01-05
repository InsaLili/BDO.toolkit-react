"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonScreenReaderExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonScreenReaderExample, _super);
    function ButtonScreenReaderExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonScreenReaderExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' },
            React.createElement(Button_1.PrimaryButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, ariaDescription: 'This is aria description used for screen reader.' }, "Aria Description")));
    };
    return ButtonScreenReaderExample;
}(React.Component));
exports.ButtonScreenReaderExample = ButtonScreenReaderExample;
//# sourceMappingURL=Button.ScreenReader.Example.js.map