import React from 'react'
import { View,Text,StyleSheet, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'

interface Props{
    title:string
    onPress:()=>void
    style?: StyleProp<ViewStyle>
}
export const BlackButtom = ({title,onPress,style={}}:Props) => {
  return (
<TouchableOpacity
    activeOpacity={0.9}
    onPress={onPress}
    style={{
        ...style as any,
        ...styles.blackButtom
    }}
>
     <Text>BlackButtom </Text>
</TouchableOpacity>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    blackButtom:{

    }
});
export default BlackButtom;
