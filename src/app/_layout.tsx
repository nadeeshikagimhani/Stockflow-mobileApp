import { ThemeProvider } from '@/providers/theme-provider';
import { Stack, usePathname } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import Pending from '@expo/material-symbols/pending.xml';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {

    const [loaded, error] = useFonts({
      'Raleway-Regular': require('@/assets/fonts/Raleway-Regular.ttf'),
      'Raleway-SemiBold': require('@/assets/fonts/Raleway-SemiBold.ttf'),
      });

      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);

      if (!loaded && !error) {
        return null;
      }

    const path = usePathname();

    const Title = useMemo(()=>(
      path === "/StockRequest" ? "Stock Request"
     : path === "/Distributions" ? "Distributions" : "Run History"
    ), [path]);

    {/*
    const Title =
     path === "/StockRequest" ? "Stock Request"
     : path === "/Distributions" ? "Distributions" : "Run History";
    */}
    

    const colorScheme = useColorScheme();

    useEffect(()=>{
      SplashScreen.hide();
    }, [])

  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name='index' 
        options={{
          headerShown: false
        }}/>

        <Stack.Screen name='(tab)' 
        options={{
          headerTitle: Title,
          headerStyle: {
            backgroundColor: '#272727'
          }
        }}>
          <Stack.Toolbar placement='right'>
            <Stack.Toolbar.Menu icon={Pending}>
              <Stack.Toolbar.MenuAction>
                Switch Theme
              </Stack.Toolbar.MenuAction>
            </Stack.Toolbar.Menu>
          </Stack.Toolbar>
        </Stack.Screen>

        <Stack.Screen name='NewRequest' 
        options={{
          headerTitle: 'New Request',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#272727'
          }
        }}/>

        <Stack.Screen name='PastRequests' 
        options={{
          headerTitle: 'Past Requests',
          headerBackButtonDisplayMode: 'minimal',
          headerStyle: {
            backgroundColor: '#272727'
          }
        }}/>

      </Stack>

        
    </ThemeProvider>
  );
}
