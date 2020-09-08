import React, { FunctionComponent } from 'react'
import { Button } from 'react-native'

import Text from '../components/Text';
import leapYearText from '../util/leapYear';

type HomeScreenProps = {
    onPress: () => void;
};

const HomeScreen: FunctionComponent<HomeScreenProps> = ({ onPress }) => {
    return (
        <>
          <Text>{leapYearText(2020)}</Text>
          <Button
            title={"Return"}
            color={"black"}
            onPress={onPress}
          />
        </>
    )
}

export default HomeScreen
