import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Boat = ({name, description, picture}) => {
    return (
        <View>
            <Text style={{fontSize: 25, color:'grey'}}> <FontAwesome6 name={'sailboat'} size={25} color={'grey'} /> {name.toUpperCase()}</Text>
            <Text>{description}</Text>
            <Image source={picture}
                   style= {{width: 400, height: 300}} />
        </View>
    )
};

export default Boat;