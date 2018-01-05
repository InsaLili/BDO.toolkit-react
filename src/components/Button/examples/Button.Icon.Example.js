"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonIconExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonIconExample, _super);
    function ButtonIconExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonIconExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' },
            React.createElement(Button_1.IconButton, { disabled: disabled, checked: checked, iconProps: { iconName: 'Emoji2' }, title: 'Emoji', ariaLabel: 'Emoji' })));
    };
    return ButtonIconExample;
}(React.Component));
exports.ButtonIconExample = ButtonIconExample;
//# sourceMappingURL=Button.Icon.Example.js.map