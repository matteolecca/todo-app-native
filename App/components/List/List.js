import React from 'react';
import { Alert, Linking, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './List.styles'
import { AntDesign } from '@expo/vector-icons';


const List = () => {

    const items = Array.from(Array(5).keys()).map((a, i) => {
        return { ID: i, text: `Item nr - ${i}`, icon: 'arrowright',url : 'https://www.google.com' }
    })

    return (
        <ScrollView style={styles.listcontainer}>
            {
                items.map(i => <ListItem key={i.ID} url={i.url} icon={i.icon}>{i.text}</ListItem>)
            }
        </ScrollView>
    );
};

const ListItem = props => {
    const { children, icon, url } = props
    return (
        <TouchableOpacity style={styles.listItem} onPress={()=>openURL(url)}>
            <Text >{children}</Text>
            <AntDesign size={20} name={icon} />
        </TouchableOpacity>
    )
}

const openURL = async url => {
 const result = await  Linking.openURL(url).catch(e=>alert(e))
}

export default List;