import {createContext,useState, useEffect} from 'react'
import { Platform,AppState } from 'react-native'
import { check,PERMISSIONS,PermissionStatus,request,openSettings  } from 'react-native-permissions';



export interface PermisionsState{
    locationStatus:PermissionStatus
}

export const permissionInitState:PermisionsState={
    locationStatus:'unavailable'
}

type PermissionsContextProps={
    permissions:PermisionsState
    askLocationPermission:()=>void
    checkLocationPermission:()=>void
}

export const PermissionsContext=createContext({} as PermissionsContextProps)

export const PerssionsProvider=({children}:any)=>{

    const [permissions, setPermissions] = useState(permissionInitState)

    useEffect(() => {
        AppState.addEventListener( 'change',state=>{
           if(state!== 'active') return;

           checkLocationPermission()
            
        })

        
    }, [])
    
    let permissionStatus: PermissionStatus ;

    const askLocationPermission =async()=>{

        if (Platform.OS === 'ios'){

           // permissionStatus = await check (PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE)
        }else{
           // permissionStatus = await check (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            permissionStatus = await request (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        }  
        setPermissions({
            ...permissions,
            locationStatus: permissionStatus
        })  
    }
  
    const checkLocationPermission =async()=>{
        if (Platform.OS === 'ios'){

             //permissionStatus = await check (PERMISSIONS.ANDROID.LOCATION_WHEN_IN_USE)
         }else{
             permissionStatus = await check (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
            // permissionStatus = await request (PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
         }
         if(permissionStatus==='blocked') {
            openSettings();
         } 
         setPermissions({
             ...permissions,
             locationStatus: permissionStatus
         })  
    }
   
    return(
        <PermissionsContext.Provider value={{
            permissions,
            askLocationPermission,
            checkLocationPermission
        }}>
            {children}
        </PermissionsContext.Provider>
    )
}