/// <reference types="react" />
import * as React from 'react';
import { IComponentDemoPageProps } from '@uifabric/example-app-base';
import './examples/Button.Basic.Example.scss';
export interface IButtonDemoPageState {
    areButtonsDisabled?: boolean;
    areButtonsChecked?: boolean;
}
export declare class ButtonPage extends React.Component<IComponentDemoPageProps, IButtonDemoPageState> {
    constructor(props: IComponentDemoPageProps);
    render(): JSX.Element;
    private _onDisabledChanged(ev, disabled);
    private _onToggledChanged(ev, toggled);
}