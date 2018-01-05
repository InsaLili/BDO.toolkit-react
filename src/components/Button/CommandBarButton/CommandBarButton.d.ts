/// <reference types="react" />
import { BaseComponent } from '../../../Utilities';
import { IButtonProps } from '../Button.types';
export declare class CommandBarButton extends BaseComponent<IButtonProps, {}> {
    /**
     * Tell BaseComponent to bypass resolution of componentRef.
     */
    protected _shouldUpdateComponentRef: boolean;
    render(): JSX.Element;
}
