/// <reference types="react" />
import { BaseComponent } from '../../Utilities';
import { IContextualMenuProps } from '../../ContextualMenu';
import { IButtonProps, IButton } from './Button.types';
export interface IBaseButtonProps extends IButtonProps {
    baseClassName?: string;
    variantClassName?: string;
}
export interface IBaseButtonState {
    menuProps?: IContextualMenuProps | null;
}
export declare class BaseButton extends BaseComponent<IBaseButtonProps, IBaseButtonState> implements IButton {
    private readonly _isSplitButton;
    private readonly _isExpanded;
    static defaultProps: {
        baseClassName: string;
        classNames: {};
        styles: {};
        split: boolean;
    };
    private _buttonElement;
    private _splitButtonContainer;
    private _labelId;
    private _descriptionId;
    private _ariaDescriptionId;
    private _classNames;
    constructor(props: IBaseButtonProps, rootClassName: string);
    render(): JSX.Element;
    componentDidUpdate(prevProps: IBaseButtonProps, prevState: IBaseButtonState): void;
    focus(): void;
    dismissMenu(): void;
    private _onRenderContent(tag, buttonProps);
    private _onRenderIcon(buttonProps?, defaultRender?);
    private _onRenderTextContents();
    private _onRenderText();
    private _onRenderChildren();
    private _onRenderDescription(props);
    private _onRenderAriaDescription();
    private _onRenderMenuIcon(props);
    private _onRenderMenu(menuProps);
    private _dismissMenu();
    private _onToggleMenu();
    private _onRenderSplitButtonContent(tag, buttonProps);
    private _onRenderSplitButtonDivider(classNames);
    private _onRenderSplitButtonMenuButton(classNames);
    private _onMenuKeyDown(ev);
    private _onMenuClick(ev);
}
