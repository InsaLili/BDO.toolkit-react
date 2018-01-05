"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonAnchorExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonAnchorExample, _super);
    function ButtonAnchorExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonAnchorExample.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        return (React.createElement("div", { className: 'ms-BasicButtonsExample' },
            React.createElement(Button_1.DefaultButton, { "data-automation-id": 'test', disabled: disabled, checked: checked, href: 'http://bing.com', target: '_blank', title: 'Let us bing!' }, "Bing")));
    };
    return ButtonAnchorExample;
}(React.Component));
exports.ButtonAnchorExample = ButtonAnchorExample;
//# sourceMappingURL=Button.Anchor.Example.js.map