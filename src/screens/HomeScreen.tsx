import React, { FunctionComponent } from 'react'
import { Button } from 'react-native'

import Text from '../components/Text';

type HomeScreenProps = {
    onPress: () => void;
};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ onPress }) => {
    return (
        <>
          <Text size={60}>{"You entered the App"}</Text>
          <Button
            title={"Return"}
            color={"black"}
            onPress={onPress}
          />
        </>
    )
}

export default HomeScreen
