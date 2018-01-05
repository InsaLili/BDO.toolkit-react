/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
export declare class PrimaryButton extends BaseComponent<IButtonProps, {}> {
    /**
     * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
     */
    protected _shouldUpdateComponentRef: boolean;
    render(): JSX.Element;
}
