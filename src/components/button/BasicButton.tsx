import * as React from 'react';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
const BasicButton = () => (
    <div>
        <p>Here is the Primary button</p>
        <PrimaryButton text='Primary Button'/>
        <p>Here is the Primary button</p>
        <DefaultButton text='Default button'  />
    </div>
);

export default BasicButton;