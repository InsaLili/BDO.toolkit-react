"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonContextualMenuExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonContextualMenuExample, _super);
    function ButtonContextualMenuExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonContextualMenuExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-ContextualMenuButtonsExample' },
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, iconProps: { iconName: 'Add' }, text: 'New', 
                    // tslint:disable-next-line:jsx-no-lambda
                    onMenuClick: function (ev) { console.log(ev); }, menuProps: {
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
                    } }))));
    };
    return ButtonContextualMenuExample;
}(React.Component));
exports.ButtonContextualMenuExample = ButtonContextualMenuExample;
//# sourceMappingURL=Button.ContextualMenu.Example.js.map