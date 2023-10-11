import {createButton} from './button';
import ButtonDocumentation from './button.md';
import {withActions} from '@storybook/addon-actions/decorator';
import {userEvent, within} from "@storybook/testing-library";
import {expect} from "@storybook/jest";

export default {
    title: 'Design System/Atoms/Button',
    decorators: [(story) => {
        const decorator = document.createElement('div');
        decorator.style.margin = '24px';
        decorator.appendChild(story());
        return decorator;
    },
        withActions],
    tags: ['autodocs'], // enable automatic documentation page
    parameters: {
        docs: {
            page: null,
            description: {
                component: ButtonDocumentation,
            },
            story: {inline: true}, // render the story in an iframe
            canvas: {sourceState: 'shown'}, // start with the source open
            /*source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).*/
        },
        actions: {
            handles: ['mouseover', 'click .btn'],
        },
        backgrounds: {
            default: 'default',
            values: [
                {
                    name: 'blackfriday',
                    value: '#000000'
                },
                {
                    name: 'default',
                    value: '#FFFFFF'
                }]
        }
    },
    argTypes: {
        label: {
            name: 'Label',
            control: {
                type: 'text'
            }
        },
        style: {
            name: 'Style',
            options: ['filled', 'outlined'],
            control: {
                type: 'radio'
            }
        },
        size: {
            name: 'Size',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio'
            }
        },
        onClick: {
            description: 'The action to perform when the button is clicked',
            action: 'clicked',
        }
    }
}

const Template = ({label, ...args}) => {
    return createButton({label, ...args});
}

export const Default = Template.bind({});
Default.args = {
    label: 'Button',
}

Default.play = async ({args, canvasElement}) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));
    await expect(canvas.getByText('Button')).toBeInTheDocument();
};
