import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from './BottomBar.styles'
import mainStyles from '../../App.styles'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { TouchableOpacity } from 'react-native';
import { bottombarIcons } from '../../constants/icons'
import { AuthContext } from '../../hooks/auth-hook'
const BottomBar = ({ state, descriptors, navigation, }) => {
    const context = useContext(AuthContext)

    if (context.barHidden) return null
    return (
        <View style={styles.bar}>
            <View style={[mainStyles.shadowbox, styles.container]}>
                {
                    state.routes.map((s, i) => {
                        return (
                            <BarItem
                                onPress={() => navigation.navigate(s.name)}
                                selected={state.index === i}
                                key={s.name}
                                icon={bottombarIcons[i]}
                                {...s} />
                        )
                    })
                }
            </View>
        </View>
    );
};

const BarItem = props => {
    const { name, selected, onPress, icon } = props
    return (
        <TouchableOpacity onPress={onPress}>
            <Icon title='important' iconStyle={selected ? styles.selectedItem :  styles.item} type='feather' name={icon} />
            <Text style={selected ? styles.selectedItem :  styles.item}>{name}</Text>
        </TouchableOpacity>
    )
}

export default BottomBar;