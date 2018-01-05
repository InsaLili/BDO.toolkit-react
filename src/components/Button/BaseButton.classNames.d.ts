import { IButtonStyles } from './Button.types';
export interface IButtonClassNames {
    root?: string;
    flexContainer?: string;
    textContainer?: string;
    icon?: string;
    label?: string;
    menuIcon?: string;
    description?: string;
    screenReaderText?: string;
}
export declare const getBaseButtonClassNames: (styles: IButtonStyles, className: string, variantClassName: string, iconClassName: string | undefined, menuIconClassName: string | undefined, disabled: boolean, checked: boolean, expanded: boolean, isSplit: boolean | undefined) => IButtonClassNames;
