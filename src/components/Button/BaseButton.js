"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../Utilities");
var Icon_1 = require("../../Icon");
var ContextualMenu_1 = require("../../ContextualMenu");
var BaseButton_classNames_1 = require("./BaseButton.classNames");
var SplitButton_classNames_1 = require("./SplitButton/SplitButton.classNames");
var BaseButton = /** @class */ (function (_super) {
    tslib_1.__extends(BaseButton, _super);
    function BaseButton(props, rootClassName) {
        var _this = _super.call(this, props) || this;
        _this._warnConditionallyRequiredProps(['menuProps', 'onClick'], 'split', _this.props.split);
        _this._warnDeprecations({
            rootProps: undefined
        });
        _this._labelId = Utilities_1.getId();
        _this._descriptionId = Utilities_1.getId();
        _this._ariaDescriptionId = Utilities_1.getId();
        _this.state = {
            menuProps: null
        };
        return _this;
    }
    Object.defineProperty(BaseButton.prototype, "_isSplitButton", {
        get: function () {
            return (!!this.props.menuProps && !!this.props.onClick) && this.props.split === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseButton.prototype, "_isExpanded", {
        get: function () {
            return !!this.state.menuProps;
        },
        enumerable: true,
        configurable: true
    });
    BaseButton.prototype.render = function () {
        var _a = this.props, ariaDescription = _a.ariaDescription, ariaLabel = _a.ariaLabel, ariaHidden = _a.ariaHidden, className = _a.className, description = _a.description, disabled = _a.disabled, primaryDisabled = _a.primaryDisabled, href = _a.href, iconProps = _a.iconProps, menuIconProps = _a.menuIconProps, styles = _a.styles, text = _a.text, checked = _a.checked, variantClassName = _a.variantClassName, theme = _a.theme, getClassNames = _a.getClassNames;
        var menuProps = this.state.menuProps;
        // Button is disabled if the whole button (in case of splitbutton is disabled) or if the primary action is disabled
        var isPrimaryButtonDisabled = (disabled || primaryDisabled);
        this._classNames = getClassNames ? getClassNames(theme, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!this.state.menuProps, this.props.split) : BaseButton_classNames_1.getBaseButtonClassNames(styles, className, variantClassName, iconProps && iconProps.className, menuIconProps && menuIconProps.className, isPrimaryButtonDisabled, checked, !!this.state.menuProps, this.props.split);
        var _b = this, _ariaDescriptionId = _b._ariaDescriptionId, _labelId = _b._labelId, _descriptionId = _b._descriptionId;
        // Anchor tag cannot be disabled hence in disabled state rendering
        // anchor button as normal button
        var renderAsAnchor = !isPrimaryButtonDisabled && !!href;
        var tag = renderAsAnchor ? 'a' : 'button';
        var nativeProps = Utilities_1.getNativeProps(Utilities_1.assign(renderAsAnchor ? {} : { type: 'button' }, this.props.rootProps, this.props), renderAsAnchor ? Utilities_1.anchorProperties : Utilities_1.buttonProperties, [
            'disabled' // Let disabled buttons be focused and styled as disabled.
        ]);
        // Check for ariaDescription, description or aria-describedby in the native props to determine source of aria-describedby
        // otherwise default to null.
        var ariaDescribedBy;
        if (ariaDescription) {
            ariaDescribedBy = _ariaDescriptionId;
        }
        else if (description) {
            ariaDescribedBy = _descriptionId;
        }
        else if (nativeProps['aria-describedby']) {
            ariaDescribedBy = nativeProps['aria-describedby'];
        }
        else {
            ariaDescribedBy = null;
        }
        // If an explicit ariaLabel is given, use that as the label and we're done.
        // If an explicit aria-labelledby is given, use that and we're done.
        // If any kind of description is given (which will end up as an aria-describedby attribute),
        // set the labelledby element. Otherwise, the button is labeled implicitly by the descendent
        // text on the button (if it exists). Never set both aria-label and aria-labelledby.
        var ariaLabelledBy = null;
        if (!ariaLabel) {
            if (nativeProps['aria-labelledby']) {
                ariaLabelledBy = nativeProps['aria-labelledby'];
            }
            else if (ariaDescribedBy) {
                ariaLabelledBy = text ? _labelId : null;
            }
        }
        var buttonProps = Utilities_1.assign(nativeProps, {
            className: this._classNames.root,
            ref: this._resolveRef('_buttonElement'),
            'disabled': isPrimaryButtonDisabled,
            'aria-label': ariaLabel,
            'aria-labelledby': ariaLabelledBy,
            'aria-describedby': ariaDescribedBy,
            'data-is-focusable': (this.props['data-is-focusable'] === false || disabled) ? false : true,
            'aria-pressed': checked
        });
        if (ariaHidden) {
            buttonProps['aria-hidden'] = true;
        }
        if (this._isSplitButton) {
            return (this._onRenderSplitButtonContent(tag, buttonProps));
        }
        else if (this.props.menuProps) {
            Utilities_1.assign(buttonProps, {
                'onKeyDown': this._onMenuKeyDown,
                'onClick': this._onMenuClick,
                'aria-expanded': this._isExpanded,
                'aria-owns': this.state.menuProps ? this._labelId + '-menu' : null,
                'aria-haspopup': true
            });
        }
        return this._onRenderContent(tag, buttonProps);
    };
    BaseButton.prototype.componentDidUpdate = function (prevProps, prevState) {
        // If Button's menu was closed, run onAfterMenuDismiss
        if (this.props.onAfterMenuDismiss && prevState.menuProps && !this.state.menuProps) {
            this.props.onAfterMenuDismiss();
        }
    };
    BaseButton.prototype.focus = function () {
        if (this._buttonElement) {
            this._buttonElement.focus();
        }
    };
    BaseButton.prototype.dismissMenu = function () {
        this.setState({ menuProps: null });
    };
    BaseButton.prototype._onRenderContent = function (tag, buttonProps) {
        var props = this.props;
        var Tag = tag;
        var menuIconProps = props.menuIconProps, menuProps = props.menuProps, _a = props.onRenderIcon, onRenderIcon = _a === void 0 ? this._onRenderIcon : _a, _b = props.onRenderAriaDescription, onRenderAriaDescription = _b === void 0 ? this._onRenderAriaDescription : _b, _c = props.onRenderChildren, onRenderChildren = _c === void 0 ? this._onRenderChildren : _c, _d = props.onRenderMenu, onRenderMenu = _d === void 0 ? this._onRenderMenu : _d, _e = props.onRenderMenuIcon, onRenderMenuIcon = _e === void 0 ? this._onRenderMenuIcon : _e;
        var Content = (React.createElement(Tag, tslib_1.__assign({}, buttonProps),
            React.createElement("div", { className: this._classNames.flexContainer },
                onRenderIcon(props, this._onRenderIcon),
                this._onRenderTextContents(),
                onRenderAriaDescription(props, this._onRenderAriaDescription),
                onRenderChildren(props, this._onRenderChildren),
                !this._isSplitButton && (menuProps || menuIconProps || this.props.onRenderMenuIcon) && onRenderMenuIcon(this.props, this._onRenderMenuIcon),
                this.state.menuProps && !this.state.menuProps.doNotLayer && onRenderMenu(menuProps, this._onRenderMenu))));
        if (menuProps && menuProps.doNotLayer) {
            return (React.createElement("div", { style: { display: 'inline-block' } },
                Content,
                this.state.menuProps && onRenderMenu(menuProps, this._onRenderMenu)));
        }
        return Content;
    };
    BaseButton.prototype._onRenderIcon = function (buttonProps, defaultRender) {
        var iconProps = this.props.iconProps;
        if (iconProps) {
            return Icon_1.Icon(tslib_1.__assign({}, iconProps, { className: this._classNames.icon }));
        }
        return null;
    };
    BaseButton.prototype._onRenderTextContents = function () {
        var _a = this.props, text = _a.text, children = _a.children, description = _a.description, _b = _a.onRenderText, onRenderText = _b === void 0 ? this._onRenderText : _b, _c = _a.onRenderDescription, onRenderDescription = _c === void 0 ? this._onRenderDescription : _c;
        if (text || typeof (children) === 'string' || description) {
            return (React.createElement("div", { className: this._classNames.textContainer },
                onRenderText(this.props, this._onRenderText),
                onRenderDescription(this.props, this._onRenderDescription)));
        }
        return ([
            onRenderText(this.props, this._onRenderText),
            onRenderDescription(this.props, this._onRenderDescription)
        ]);
    };
    BaseButton.prototype._onRenderText = function () {
        var _a = this.props, children = _a.children, text = _a.text;
        // For backwards compat, we should continue to take in the text content from children.
        if (text === undefined && typeof (children) === 'string') {
            text = children;
        }
        if (text) {
            return (React.createElement("div", { key: this._labelId, className: this._classNames.label, id: this._labelId }, text));
        }
        return null;
    };
    BaseButton.prototype._onRenderChildren = function () {
        var children = this.props.children;
        // If children is just a string, either it or the text will be rendered via onRenderLabel
        // If children is another component, it will be rendered after text
        if (typeof (children) === 'string') {
            return null;
        }
        return children;
    };
    BaseButton.prototype._onRenderDescription = function (props) {
        var description = this.props.description;
        // ms-Button-description is only shown when the button type is compound.
        // In other cases it will not be displayed.
        return description ? (React.createElement("div", { key: this._descriptionId, className: this._classNames.description, id: this._descriptionId }, description)) : (null);
    };
    BaseButton.prototype._onRenderAriaDescription = function () {
        var ariaDescription = this.props.ariaDescription;
        // If ariaDescription is given, descriptionId will be assigned to ariaDescriptionSpan,
        // otherwise it will be assigned to descriptionSpan.
        return ariaDescription ? (React.createElement("span", { className: this._classNames.screenReaderText, id: this._ariaDescriptionId }, ariaDescription)) : (null);
    };
    BaseButton.prototype._onRenderMenuIcon = function (props) {
        var menuIconProps = this.props.menuIconProps;
        return (React.createElement(Icon_1.Icon, tslib_1.__assign({ iconName: 'ChevronDown' }, menuIconProps, { className: this._classNames.menuIcon })));
    };
    BaseButton.prototype._onRenderMenu = function (menuProps) {
        var _a = menuProps.onDismiss, onDismiss = _a === void 0 ? this._dismissMenu : _a;
        return (React.createElement(ContextualMenu_1.ContextualMenu, tslib_1.__assign({ id: this._labelId + '-menu', directionalHint: 4 /* bottomLeftEdge */ }, menuProps, { className: 'ms-BaseButton-menuhost ' + menuProps.className, target: this._isSplitButton ? this._splitButtonContainer : this._buttonElement, labelElementId: this._labelId, onDismiss: onDismiss })));
    };
    BaseButton.prototype._dismissMenu = function () {
        this.setState({ menuProps: null });
    };
    BaseButton.prototype._onToggleMenu = function () {
        var menuProps = this.props.menuProps;
        var currentMenuProps = this.state.menuProps;
        this.setState({ menuProps: currentMenuProps ? null : menuProps });
    };
    BaseButton.prototype._onRenderSplitButtonContent = function (tag, buttonProps) {
        var _a = this.props, _b = _a.styles, styles = _b === void 0 ? {} : _b, disabled = _a.disabled, checked = _a.checked, getSplitButtonClassNames = _a.getSplitButtonClassNames;
        var classNames = getSplitButtonClassNames ? getSplitButtonClassNames(!!disabled, !!this.state.menuProps, !!checked) : styles && SplitButton_classNames_1.getClassNames(styles, !!disabled, !!this.state.menuProps, !!checked);
        return (React.createElement("div", { "aria-labelledby": buttonProps.ariaLabel, "aria-disabled": disabled, "aria-haspopup": true, "aria-expanded": this._isExpanded, "aria-pressed": this.props.checked, "aria-describedby": buttonProps.ariaDescription, className: classNames && classNames.splitButtonContainer, onKeyDown: this._onMenuKeyDown, ref: this._resolveRef('_splitButtonContainer') },
            React.createElement("span", { "aria-hidden": true, 
                // TODO: THIS SHOULD BE REMOVED!
                style: { 'display': 'flex' } },
                this._onRenderContent(tag, buttonProps),
                this._onRenderSplitButtonMenuButton(classNames),
                this._onRenderSplitButtonDivider(classNames))));
    };
    BaseButton.prototype._onRenderSplitButtonDivider = function (classNames) {
        if (classNames && classNames.divider) {
            return React.createElement("span", { className: classNames.divider });
        }
        return null;
    };
    BaseButton.prototype._onRenderSplitButtonMenuButton = function (classNames) {
        var _a = this.props, menuIconProps = _a.menuIconProps, splitButtonAriaLabel = _a.splitButtonAriaLabel;
        if (menuIconProps === undefined) {
            menuIconProps = {
                iconName: 'ChevronDown'
            };
        }
        var splitButtonProps = {
            'styles': classNames,
            'checked': this.props.checked,
            'disabled': this.props.disabled,
            'onClick': this._onMenuClick,
            'menuProps': undefined,
            'iconProps': menuIconProps,
            'ariaLabel': splitButtonAriaLabel
        };
        return React.createElement(BaseButton, tslib_1.__assign({}, splitButtonProps));
    };
    BaseButton.prototype._onMenuKeyDown = function (ev) {
        if (ev.which === 40 /* down */) {
            var onMenuClick = this.props.onMenuClick;
            onMenuClick && onMenuClick(ev, this);
            !ev.defaultPrevented && this._onToggleMenu();
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    BaseButton.prototype._onMenuClick = function (ev) {
        var onMenuClick = this.props.onMenuClick;
        onMenuClick && onMenuClick(ev, this);
        !ev.defaultPrevented && this._onToggleMenu();
        ev.preventDefault();
        ev.stopPropagation();
    };
    BaseButton.defaultProps = {
        baseClassName: 'ms-Button',
        classNames: {},
        styles: {},
        split: false,
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderTextContents", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderText", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderChildren", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderAriaDescription", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenuIcon", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onRenderMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_dismissMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onToggleMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], BaseButton.prototype, "_onMenuClick", null);
    return BaseButton;
}(Utilities_1.BaseComponent));
exports.BaseButton = BaseButton;
//# sourceMappingURL=BaseButton.js.map