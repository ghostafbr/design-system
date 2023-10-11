import {createCard} from './card';

export default {
    title: 'Design System/Atoms/Card',
}

const Template = ({label, ...args}) => {
    return createCard({label, ...args});
}

export const Default = Template.bind({});
Default.args = {
    title: 'Card',
    description: 'This is a card',
}
