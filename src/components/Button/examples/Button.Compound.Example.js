"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var ButtonCompoundExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonCompoundExample, _super);
    function ButtonCompoundExample(props) {
        return _super.call(this, props) || this;
    }
    ButtonCompoundExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample ms-BasicButtonsTwoUp' },
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Standard"),
                React.createElement(Button_1.CompoundButton, { description: 'You can create a new account here.', disabled: disabled, checked: checked }, "Create account")),
            React.createElement("div", null,
                React.createElement(Label_1.Label, null, "Primary"),
                React.createElement(Button_1.CompoundButton, { primary: true, description: 'You can create a new account here.', disabled: disabled, checked: checked }, "Create account"))));
    };
    return ButtonCompoundExample;
}(React.Component));
exports.ButtonCompoundExample = ButtonCompoundExample;
//# sourceMappingURL=Button.Compound.Example.js.map