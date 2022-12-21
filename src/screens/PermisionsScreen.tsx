import React,{useContext} from 'react'
import { View,Text,StyleSheet,Platform } from 'react-native'
import { PermissionsContext } from '../context/PermissionsContext';
import BlackButtom from '../components/BlackButtom';



export const PermisionsScreen = () => {
    const {permissions,askLocationPermission} = useContext(PermissionsContext)
  
  return (
<View style={styles.container}>
     <Text>PermisionsScreen </Text>
     <BlackButtom
        title='Permiso'
        onPress={askLocationPermission}
     />
     <Text>{JSON.stringify(permissions,null,5)}</Text>
</View>
 )
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
});
export default PermisionsScreen;
