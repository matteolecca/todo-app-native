import React from 'react';
import { View, Text } from 'react-native';
import styles from './BottomBar.styles'
import mainStyles from '../../App.styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native';
import  { bottombarIcons }  from '../../constants/icons'
const BottomBar = ({ state, descriptors, navigation }) => {
    if(state.index === 2) return null
    return (
        <View style={styles.bar}>
            <View style={[mainStyles.shadowbox, styles.container]}>
                {
                    state.routes.map((s, i) => {
                        if(s.name === 'projectsList') return
                        return (
                            <BarItem
                                onPress={() => navigation.navigate(s.name)}
                                selected={state.index === i}
                                key={s.name}
                                icon={bottombarIcons[i]}
                                {...s} />
                        )
                    }
                    )
                }
            </View>
        </View>
    );
};

const BarItem = props => {
    const { name, params, selected, onPress, icon } = props
    console.log(icon)
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon title='important' color={selected ? '#f05633' : '#333'} type='feather' name={icon} />
            <Text>{name}</Text>
        </TouchableOpacity>

    )
}

export default BottomBar;