import { Text } from "@/components/ui/text"
import { View } from "@/components/ui/view"
import { Image } from "expo-image"
import { FlatList } from "react-native"
import RequestItem from "./RequestItem"
import { MockRequests } from "@/constants/mock-data"

const PastRequestsMain = () => {

  return (
    <View>
      <FlatList
        style={{ marginTop: 30}}
        data={MockRequests}
        renderItem={({ index, item }) =>
          <RequestItem request={item}/>
        }
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={()=> <View style={{ height: 15}}></View>}
      />


      {/*<Image contentFit='contain' source={require('@/assets/images/icon.png')}
        style={{ width: 300, height: 300 }} />

      <Image source={
        {
          uri: "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg"
        }
      } style={{ width: 150, height: 150 }} />*/}
      
    </View>
  )
}

export default PastRequestsMain