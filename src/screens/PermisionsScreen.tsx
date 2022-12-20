import React from 'react'
import { View,Text,StyleSheet,Button,Platform } from 'react-native'
import { check,PERMISSIONS,PermissionStatus,request  } from 'react-native-permissions';



export const PermisionsScreen = () => {
    let permissionStatus: PermissionStatus 
    const checkLocationPermission = async()=>{
        if (Platform.OS === 'ios'){

           // permissionStatus = await check (PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE)
        }else{
           // permissionStatus = await check (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            permissionStatus = await request (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }
       console.log({permissionStatus});
       
    }

  return (
<View style={styles.container}>
     <Text>PermisionsScreen </Text>
     <Button
        title='Permiso'
        onPress={checkLocationPermission}
     />
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
