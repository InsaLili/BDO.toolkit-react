/// <reference types="react" />
import * as React from 'react';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';
export interface IButtonSwapExampleState {
    isPrimary: boolean;
}
export declare class ButtonSwapExample extends React.Component<IButtonProps, IButtonSwapExampleState> {
    private buttonRef;
    private hasFocus;
    constructor(props: IButtonProps);
    componentWillUpdate(nextProps: IButtonProps, nextState: IButtonSwapExampleState): void;
    componentDidUpdate(prevProps: IButtonProps, prevState: IButtonSwapExampleState): void;
    render(): JSX.Element;
    private _setButtonRef(ref);
    private _onClick();
}
