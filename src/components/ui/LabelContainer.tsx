import { StyleProp, TextStyle } from "react-native"
import { Text } from "./text"
import { View } from "./view"

type Props = {
  label: string,
  value: string,
  lableStyle?: StyleProp<TextStyle> | undefined,
  valueStyle?: StyleProp<TextStyle> | undefined
}

const LabelContainer = ({label, value, lableStyle, valueStyle}: Props) => {

  return (
    <View>
      <Text style={[{ fontSize: 16, color: 'gray'}, lableStyle]}>{label}</Text>
      <Text style={[{ fontSize: 22, color: 'white'}, valueStyle]}>{value}</Text>
    </View>
  )
}

export default LabelContainer