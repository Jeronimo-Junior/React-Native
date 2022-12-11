import * as React from 'react';
import { Icon, Button } from 'react-native-elements';

export default function BackButton({ navigator, componentName }) {
    return (
        <Button
            icon={<Icon name="arrow-left" type="font-awesome" color="#fff"></Icon>}
            onPress={() => navigator.navigate(componentName)}
        >
        </Button>
    )
};
