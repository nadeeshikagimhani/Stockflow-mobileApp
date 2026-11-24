import { Text } from "@/components/ui/text"
import { View } from "@/components/ui/view"
import { Image } from "expo-image"
import { FlatList } from "react-native"

const PastRequestsMain = () => {

  return (
    <View>
      <FlatList
        data={["Apple", "Banana", "Watermeoln", "Pineapple", "Cucumber"]}
        renderItem={({ index, item }) =>
          <Text style={
            {
              fontSize: 20,
              color: 'white',
              padding: 10,
              borderWidth: 1,
              borderColor: 'red',
              marginTop: 10
            }
          }>{item}</Text>
        }
      />
    </View>
  )
}

export default PastRequestsMain