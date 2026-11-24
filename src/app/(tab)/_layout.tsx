import { NativeTabs } from 'expo-router/build/native-tabs/NativeTabs.js'
import { View, Text } from 'react-native'

const _layout = () => {
  return (
    <NativeTabs labelStyle={{ fontFamily: 'Raleway-SemiBold', fontSize: 14}}>
      <NativeTabs.Trigger name='StockRequest'>
        <NativeTabs.Trigger.Icon sf={'list.clipboard'} md={'assessment'}/>
        <NativeTabs.Trigger.Label>
          Stock Requests
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='Distributions'>
        <NativeTabs.Trigger.Icon sf={'truck.box'} md={'delivery_truck_speed'}/>
        <NativeTabs.Trigger.Label>
          Disributions
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name='RunHistory'>
        <NativeTabs.Trigger.Icon sf={'circle'} md={'history'}/>
        <NativeTabs.Trigger.Label>
          Run History
        </NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}

export default _layout