"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var example_app_base_1 = require("@uifabric/example-app-base");
var Button_checklist_1 = require("./Button.checklist");
var Button_Default_Example_1 = require("./examples/Button.Default.Example");
var Button_ContextualMenu_Example_1 = require("./examples/Button.ContextualMenu.Example");
var Button_Compound_Example_1 = require("./examples/Button.Compound.Example");
var Button_Action_Example_1 = require("./examples/Button.Action.Example");
var Button_CommandBar_Example_1 = require("./examples/Button.CommandBar.Example");
var Button_Icon_Example_1 = require("./examples/Button.Icon.Example");
var Button_Anchor_Example_1 = require("./examples/Button.Anchor.Example");
var Button_ScreenReader_Example_1 = require("./examples/Button.ScreenReader.Example");
var Button_Swap_Example_1 = require("./examples/Button.Swap.Example");
var Button_Split_Example_1 = require("./examples/Button.Split.Example");
var ComponentStatus_1 = require("../../demo/ComponentStatus/ComponentStatus");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Link_1 = require("../../Link");
require("./examples/Button.Basic.Example.scss");
var exampleStylesImport = require("../../common/_exampleStyles.scss");
var exampleStyles = exampleStylesImport;
var ButtonDefaultExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Default.Example.tsx');
var ButtonCompoundExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Compound.Example.tsx');
var ButtonActionExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Action.Example.tsx');
var ButtonCommandBarExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.CommandBar.Example.tsx');
var ButtonIconExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Icon.Example.tsx');
var ButtonAnchorExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Anchor.Example.tsx');
var ButtonScreenReaderExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.ScreenReader.Example.tsx');
var ButtonContextualMenuExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.ContextualMenu.Example.tsx');
var ButtonSwapExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Swap.Example.tsx');
var ButtonSplitExampleCode = require('!raw-loader!office-ui-fabric-react/src/components/Button/examples/Button.Split.Example.tsx');
var ButtonPage = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonPage, _super);
    function ButtonPage(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            areButtonsDisabled: false,
            areButtonsChecked: false
        };
        return _this;
    }
    ButtonPage.prototype.render = function () {
        return (React.createElement(example_app_base_1.ComponentPage, { title: 'Button', componentName: 'ButtonExample', exampleCards: React.createElement("div", null,
                React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: 'Disable buttons', checked: this.state.areButtonsDisabled, onChange: this._onDisabledChanged.bind(this) }),
                React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: 'Mark as checked', checked: this.state.areButtonsChecked, onChange: this._onToggledChanged.bind(this) }),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Default Button', code: ButtonDefaultExampleCode },
                    React.createElement(Button_Default_Example_1.ButtonDefaultExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Compound Button', code: ButtonCompoundExampleCode },
                    React.createElement(Button_Compound_Example_1.ButtonCompoundExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Command Bar Button', code: ButtonCommandBarExampleCode },
                    React.createElement(Button_CommandBar_Example_1.ButtonCommandBarExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Split Button', code: ButtonSplitExampleCode },
                    React.createElement(Button_Split_Example_1.ButtonSplitExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Icon Button', code: ButtonIconExampleCode },
                    React.createElement(Button_Icon_Example_1.ButtonIconExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Contextual Menu Button', code: ButtonContextualMenuExampleCode },
                    React.createElement(Button_ContextualMenu_Example_1.ButtonContextualMenuExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Action Button', code: ButtonActionExampleCode },
                    React.createElement(Button_Action_Example_1.ButtonActionExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked }))), implementationExampleCards: React.createElement("div", null,
                React.createElement(example_app_base_1.ExampleCard, { title: 'Button Like Anchor', code: ButtonAnchorExampleCode },
                    React.createElement(Button_Anchor_Example_1.ButtonAnchorExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Button with Aria Description for Screen Reader', code: ButtonScreenReaderExampleCode },
                    React.createElement(Button_ScreenReader_Example_1.ButtonScreenReaderExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Button Swap with Focus State', code: ButtonSwapExampleCode },
                    React.createElement(Button_Swap_Example_1.ButtonSwapExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked })),
                React.createElement(example_app_base_1.ExampleCard, { title: 'Custom Split Button', code: ButtonSplitExampleCode },
                    React.createElement(Button_Split_Example_1.ButtonSplitCustomExample, { disabled: this.state.areButtonsDisabled, checked: this.state.areButtonsChecked }))), propertiesTables: React.createElement("div", null,
                React.createElement(example_app_base_1.PropertiesTableSet, { sources: [
                        require('!raw-loader!office-ui-fabric-react/src/components/Button/Button.types.ts')
                    ] }),
                React.createElement("p", null,
                    "Besides the above properties, the ",
                    React.createElement("code", null, "Button"),
                    " component accepts all properties that the React ",
                    React.createElement("code", null, "button"),
                    " and ",
                    React.createElement("code", null, "a"),
                    " components accept.")), overview: React.createElement("div", null,
                React.createElement("p", null, "Buttons are best used to enable a user to commit a change or complete steps in a task. They are typically found inside forms, dialogs, panels or pages. An example of their usage is confirming the deletion of a file in a confirmation dialog."),
                React.createElement("p", null, "When considering their place in a layout, contemplate the order in which a user will flow through the UI. As an example, in a form, the individual will need to read and interact with the form fields before submiting the form. Therefore, as a general rule, the button should be placed at the bottom of the UI container (a dialog, panel, or page) which holds the related UI elements."),
                React.createElement("p", null, "While buttons can technically be used to navigate a user to another part of the experience, this is not recommended unless that navigation is part of an action or their flow."),
                React.createElement("p", null,
                    "Note that both iconProps and menuIconProps take ",
                    React.createElement(Link_1.Link, { href: '#/examples/icon' }, "IIconProps"),
                    " to specify name and type.")), bestPractices: React.createElement("div", null), dos: React.createElement("div", null,
                React.createElement("ul", null,
                    React.createElement("li", null, "Make sure the label conveys a clear purpose of the button to the user."),
                    React.createElement("li", null, "Button labels must describe the action the button will perform and should include a verb. Use concise, specific, self-explanatory labels, usually a single word."),
                    React.createElement("li", null, "Buttons should always include a noun if there is any room for interpretation about what the verb operates on."),
                    React.createElement("li", null, "Consider the affect localization will have on the button and what will happen to components around it."),
                    React.createElement("li", null, "If the button\u2019s label content is dynamic, consider how the button will resize and what will happen to components around it."),
                    React.createElement("li", null, "Use only a single line of text in the label of the button."),
                    React.createElement("li", null, "Expose only one or two buttons to the user at a time, for example, \"Accept\" and \"Cancel\". If you need to expose more actions to the user, consider using checkboxes or radio buttons from which the user can select actions, with a single command button to trigger those actions."),
                    React.createElement("li", null, "Show only one primary button that inherits theme color at rest state. In the event there are more than two buttons with equal priority, all buttons should have neutral backgrounds."),
                    React.createElement("li", null, "\"Submit\", \"OK\", and \"Apply\" buttons should always be styled as primary buttons. When \"Reset\" or \"Cancel\" buttons appear alongside one of the above, they should be styled as secondary buttons."),
                    React.createElement("li", null, "Default buttons should always perform safe operations. For example, a default button should never delete."),
                    React.createElement("li", null, "Use task buttons to cause actions that complete a task or cause a transitional task. Do not use buttons to toggle other UX in the same context. For example, a button may be used to open an interface area but should not be used to open an additional set of components in the same interface."))), donts: React.createElement("div", null,
                React.createElement("ul", null,
                    React.createElement("li", null, "Don't use generic labels like \"Ok,\" especially in the case of an error; errors are never \"Ok.\""),
                    React.createElement("li", null, "Don\u2019t place the default focus on a button that destroys data. Instead, place the default focus on the button that performs the \"safe act\" and retains the content (i.e. \"Save\") or cancels the action (i.e. \"Cancel\")."),
                    React.createElement("li", null, "Don\u2019t use a button to navigate to another place, use a link instead. The exception is in a wizard where \"Back\" and \"Next\" buttons may be used."),
                    React.createElement("li", null, "Don\u2019t put too much text in a button - try to keep the length of your text to a minimum."),
                    React.createElement("li", null, "Don't put anything other than text in a button."))), isHeaderVisible: this.props.isHeaderVisible, componentStatus: React.createElement(ComponentStatus_1.ComponentStatus, tslib_1.__assign({}, Button_checklist_1.ButtonStatus)) }));
    };
    ButtonPage.prototype._onDisabledChanged = function (ev, disabled) {
        this.setState({
            areButtonsDisabled: disabled
        });
    };
    ButtonPage.prototype._onToggledChanged = function (ev, toggled) {
        this.setState({
            areButtonsChecked: toggled
        });
    };
    return ButtonPage;
}(React.Component));
exports.ButtonPage = ButtonPage;
//# sourceMappingURL=ButtonPage.js.map