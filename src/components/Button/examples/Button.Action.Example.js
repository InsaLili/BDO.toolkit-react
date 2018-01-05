"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonActionExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonActionExample, _super);
    function ButtonActionExample(props) {
        return _super.call(this, props) || this;
    }
    ButtonActionExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' },
            React.createElement(Button_1.ActionButton, { "data-automation-id": 'test', iconProps: { iconName: 'AddFriend' }, disabled: disabled, checked: checked }, "Create account")));
    };
    return ButtonActionExample;
}(React.Component));
exports.ButtonActionExample = ButtonActionExample;
//# sourceMappingURL=Button.Action.Example.js.map