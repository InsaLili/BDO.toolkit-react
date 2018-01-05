/// <reference types="react" />
import { BaseComponent } from '../../Utilities';
import { IButtonProps } from './Button.types';
/**
 * This class is deprecated. Use the individual *Button components instead.
 * @deprecated
 */
export declare class Button extends BaseComponent<IButtonProps, {}> {
    /**
     * Set this BaseComponent._resolveComponentRef to false, bypassing resolution of componentRef.
     */
    protected _shouldUpdateComponentRef: boolean;
    constructor(props: IButtonProps);
    render(): JSX.Element;
}