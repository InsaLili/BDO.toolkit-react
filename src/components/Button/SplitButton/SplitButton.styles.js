"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = require("../../../Styling");
var Utilities_1 = require("../../../Utilities");
exports.getStyles = Utilities_1.memoizeFunction(function (theme, customStyles) {
    var splitButtonStyles = {
        splitButtonContainer: {
            position: 'relative',
            display: 'inline-block',
            border: '1px solid transparent'
        },
        splitButtonContainerFocused: {
            outline: 'none!important',
            border: '1px solid'
        },
        splitButtonMenuButton: [
            Styling_1.getFocusStyle(theme, -1),
            {
                padding: 6,
                height: 'auto',
                boxSizing: 'border-box',
                border: '1px solid transparent',
                borderRadius: 0,
                outline: 'transparent',
                userSelect: 'none',
                display: 'inline-block',
                textDecoration: 'none',
                textAlign: 'center',
                cursor: 'pointer',
                verticalAlign: 'top',
                width: 32,
                marginLeft: -1
            }
        ],
        splitButtonDivider: {
            position: 'absolute',
            width: 1,
            right: 31,
            top: 8,
            bottom: 8
        },
        splitButtonMenuButtonDisabled: {
            pointerEvents: 'none',
            selectors: {
                ':hover': {
                    cursor: 'default'
                }
            }
        },
        splitButtonFlexContainer: {
            display: 'flex',
            height: '100%',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };
    return Styling_1.concatStyleSets(splitButtonStyles, customStyles);
});
//# sourceMappingURL=SplitButton.styles.js.map