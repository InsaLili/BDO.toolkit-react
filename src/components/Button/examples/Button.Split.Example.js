"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Button_Split_Example_styles_1 = require("./Button.Split.Example.styles");
var alertClicked = function () {
    alert('Clicked');
};
var ButtonSplitExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonSplitExample, _super);
    function ButtonSplitExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonSplitExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsTwoUp' },
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Standard"),
                React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, text: 'Create account', onClick: alertClicked, split: true, splitButtonAriaLabel: 'See 2 sample options', style: { height: '35px' }, menuProps: {
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
                    } })),
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Primary"),
                React.createElement(Button_1.DefaultButton, { primary: true, "data-automation-id": 'test', disabled: disabled, checked: checked, text: 'Create account', onClick: alertClicked, split: true, style: { height: '35px' }, menuProps: {
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
                    } })),
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Primary Action Disabled"),
                React.createElement(Button_1.DefaultButton, { primary: true, "data-automation-id": 'test', disabled: disabled, primaryDisabled: true, checked: checked, text: 'Create account', onClick: alertClicked, split: true, style: { height: '35px' }, menuProps: {
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
    return ButtonSplitExample;
}(React.Component));
exports.ButtonSplitExample = ButtonSplitExample;
var ButtonSplitCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonSplitCustomExample, _super);
    function ButtonSplitCustomExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonSplitCustomExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        var customSplitButtonStyles = Button_Split_Example_styles_1.getCustomSplitButtonStyles();
        return (React.createElement("div", null,
            React.createElement(Label_1.Label, null, "Split button with icon and custom styles"),
            React.createElement(Button_1.IconButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, iconProps: { iconName: 'Upload' }, text: 'Create account', onClick: alertClicked, split: true, styles: customSplitButtonStyles, menuProps: {
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
                } })));
    };
    return ButtonSplitCustomExample;
}(React.Component));
exports.ButtonSplitCustomExample = ButtonSplitCustomExample;
//# sourceMappingURL=Button.Split.Example.js.map