"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonCommandExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonCommandExample, _super);
    function ButtonCommandExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonCommandExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", null,
            React.createElement("div", { style: { display: 'flex', alignItems: 'stretch', height: '40px' } },
                React.createElement(Button_1.CommandButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, iconProps: { iconName: 'Add' }, text: 'Create account', menuProps: {
                        items: [
                            {
                                key: 'emailMessage',
                                name: 'Email message',
                                icon: 'Mail'
                            },
                            {
                                key: 'calendarEvent',
                                name: 'Calendar event',
                                icon: 'Calendar'
                            }
                        ]
                    } }),
                React.createElement(Button_1.CommandButton, { "data-automation-id": 'test2', disabled: disabled, checked: checked, iconProps: { iconName: 'Mail' }, text: 'Send Mail' }))));
    };
    return ButtonCommandExample;
}(React.Component));
exports.ButtonCommandExample = ButtonCommandExample;
//# sourceMappingURL=Button.Command.Example.js.map