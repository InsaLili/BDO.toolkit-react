"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonPrimaryExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonPrimaryExample, _super);
    function ButtonPrimaryExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonPrimaryExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' },
            React.createElement(Button_1.PrimaryButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, text: 'Create account', 
                // tslint:disable-next-line:jsx-no-lambda
                onClick: function () { return alert('Clicked'); } })));
    };
    return ButtonPrimaryExample;
}(React.Component));
exports.ButtonPrimaryExample = ButtonPrimaryExample;
//# sourceMappingURL=Button.Primary.Example.js.map