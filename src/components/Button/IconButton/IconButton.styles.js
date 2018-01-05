"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
var BaseButton_styles_1 = require("../BaseButton.styles");
var SplitButton_styles_1 = require("../SplitButton/SplitButton.styles");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var baseButtonStyles = BaseButton_styles_1.getStyles(theme);
    var splitButtonStyles = SplitButton_styles_1.getStyles(theme);
    var iconButtonStyles = {
        root: {
            padding: '0 4px',
            width: '32px',
            height: '32px',
            backgroundColor: 'transparent'
        },
        rootHovered: {
            color: theme.palette.themeDarker
        },
        rootPressed: {
            color: theme.palette.themePrimary
        },
        rootExpanded: {
            color: theme.palette.themePrimary
        },
        rootChecked: {
            backgroundColor: theme.palette.neutralTertiaryAlt,
        },
        rootCheckedHovered: {
            backgroundColor: theme.palette.neutralLight
        },
        rootDisabled: {
            color: theme.palette.neutralTertiary
        }
    };
    return Styling_1.concatStyleSets(baseButtonStyles, iconButtonStyles, splitButtonStyles, customStyles);
});
//# sourceMappingURL=IconButton.styles.js.map