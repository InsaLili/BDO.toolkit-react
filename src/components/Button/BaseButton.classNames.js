"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../Utilities");
var Styling_1 = require("../../Styling");
exports.getBaseButtonClassNames = Utilities_1.memoizeFunction(function (styles, className, variantClassName, iconClassName, menuIconClassName, disabled, checked, expanded, isSplit) {
    var isExpanded = expanded && !isSplit;
    return Styling_1.mergeStyleSets({
        root: [
            'ms-Button',
            styles.root,
            variantClassName,
            className,
            checked && [
                'is-checked',
                styles.rootChecked
            ],
            isExpanded && [
                'is-expanded',
                styles.rootExpanded,
                {
                    selectors: {
                        ':hover .ms-Button-icon': styles.iconExpandedHovered,
                        ':hover .ms-Button-menuIcon': styles.rootExpandedHovered,
                        ':hover': styles.rootExpandedHovered
                    }
                }
            ],
            disabled && [
                'is-disabled',
                styles.rootDisabled
            ],
            !disabled && !isExpanded && !checked && {
                selectors: {
                    ':hover': styles.rootHovered,
                    ':hover .ms-Button-icon': styles.iconHovered,
                    ':hover .ms-Button-description': styles.descriptionHovered,
                    ':hover .ms-Button-menuIcon': styles.menuIconHovered,
                    ':focus': styles.rootFocused,
                    ':active': styles.rootPressed,
                    ':active .ms-Button-icon': styles.iconPressed,
                    ':active .ms-Button-description': styles.descriptionPressed,
                    ':active .ms-Button-menuIcon': styles.menuIconPressed
                }
            },
            disabled && checked && [
                styles.rootCheckedDisabled
            ],
            !disabled && checked && {
                selectors: {
                    ':hover': styles.rootCheckedHovered,
                    ':active': styles.rootCheckedPressed
                }
            }
        ],
        flexContainer: [
            'ms-Button-flexContainer',
            styles.flexContainer
        ],
        textContainer: [
            'ms-Button-textContainer',
            styles.textContainer
        ],
        icon: [
            'ms-Button-icon',
            iconClassName,
            styles.icon,
            isExpanded && styles.iconExpanded,
            checked && styles.iconChecked,
            disabled && styles.iconDisabled,
        ],
        label: [
            'ms-Button-label',
            styles.label,
            checked && styles.labelChecked,
            disabled && styles.labelDisabled,
        ],
        menuIcon: [
            'ms-Button-menuIcon',
            menuIconClassName,
            styles.menuIcon,
            checked && styles.menuIconChecked,
            disabled && styles.menuIconDisabled,
            !disabled &&
                !isExpanded &&
                !checked && {
                selectors: {
                    ':hover': styles.menuIconHovered,
                    ':active': styles.menuIconPressed,
                },
            },
            isExpanded && [
                'is-expanded',
                styles.menuIconExpanded,
                {
                    selectors: {
                        ':hover': styles.menuIconExpandedHovered,
                    },
                },
            ]
        ],
        description: [
            'ms-Button-description',
            styles.description,
            checked && styles.descriptionChecked,
            disabled && styles.descriptionDisabled
        ],
        screenReaderText: [
            'ms-Button-screenReaderText',
            styles.screenReaderText
        ]
    });
});
//# sourceMappingURL=BaseButton.classNames.js.map