import { ComponentStory, ComponentMeta } from '@storybook/react';
import SwitchComp from './Switch';

export default {
    title: 'Webstacks/Switch',
    component: SwitchComp,
    argTypes: {
        size: {
            options: ['small', 'large'],
            control: { type: 'select' },
        },
        color: {
            options: ['primary', 'secondary'],
            control: { type: 'select' },
        }
    }
} as ComponentMeta<typeof SwitchComp>;

const Template: ComponentStory<typeof SwitchComp> = (args) => <SwitchComp {...args} />;

export const Switch = Template.bind({});
Switch.args = {
    disabled: false,
    size: 'large',
};
