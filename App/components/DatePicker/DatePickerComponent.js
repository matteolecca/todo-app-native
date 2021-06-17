import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { View, Text, Switch, LayoutAnimation,  } from 'react-native';


const DatePickerComponent = ( props) => {
    const [date, setDate] = useState(new Date())
    const [scheduled, schedule] = useState(false)
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        // setShow(Platform.OS === 'ios');
        setDate(currentDate);
        props.setDate(currentDate, 'date')
    };
    const scheduleHandler = () => {
        props.setDate(scheduled ? null :  date, 'date')
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        schedule(!scheduled);
      }
    return (
        <View style={{overflow : 'hidden'}}>
            <View style={ { justifyContent: 'space-between', flexDirection: 'row', marginBottom: 10 }}>
                <Text>Schedule</Text>
                <Switch value={scheduled} onValueChange={scheduleHandler} />
            </View>
            {scheduled &&(
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="inline"
                    onChange={onChange}
                />
                )}
        </View>
    )
}

export default DatePickerComponent