import StatusBadge from "@/components/common/StatusBadge";
import { Text } from "@/components/ui/text"
import { View } from "@/components/ui/view"
import { Request } from "@/constants/mock-data";
import { useColor } from "@/hooks/useColor"
import { useRouter } from "expo-router";
import { ArrowRight } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

const RequestItem = ({request}:{request:Request}) => {

  const router = useRouter();

  const goToRequestDeatils = () => {
    router.push({
      pathname: '/RequestDetails',
      params : {
        reqID : request.id
      }
    });
  }

  const bg = useColor('card');

  return (
    <TouchableOpacity 
    onPress={goToRequestDeatils}
    style={{
      padding: 20,
      borderWidth: 1,
      borderColor: "#434343",
      borderRadius: 10,
      marginHorizontal:20,
      backgroundColor: bg,
      flexDirection: 'row'
    }}>

      {/* Details */}
      <View style={{ flex: 1, marginRight: 20 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ color: 'darkorange' }}>{request.id}</Text>
          <Text>
              <StatusBadge ShowStatus={request.status}/>
          </Text>
        </View>

        <Text style={{ fontSize: 18, marginBottom: 5, marginTop:10}}>{request.warehouse}</Text>
        <Text style={{ fontSize: 12, color: '#AEAEAE'}}>{request.requestDate}</Text>

      </View>

      {/* A Arrow icon */}
      <View style={{ justifyContent: 'flex-end' }}>
        <ArrowRight color={'white'}/>
      </View>

    </TouchableOpacity>
  )
}

export default RequestItem