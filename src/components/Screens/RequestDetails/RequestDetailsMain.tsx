import { View } from "@/components/ui/view"
import { Text } from "@/components/ui/text"
import { useLocalSearchParams } from "expo-router"
import { MockRequests } from "@/constants/mock-data";
import StatusBadge from "@/components/common/StatusBadge";
import { useColor } from "@/hooks/useColor";
import CardContainer from "@/components/ui/CardContainer";
import LabelContainer from "@/components/ui/LabelContainer";

const RequestDetailsMain = () => {

  const bg = useColor('card');

  const paramsID:any = useLocalSearchParams();
  const requestItem = MockRequests.find( item => item.id === paramsID.reqID);
  if(!requestItem) 
    return 
    <Text style={{ fontSize: 25, color:'white'}}>
      Request Cannot be Found
    </Text>

  return (
    <View style={{ gap: 20, marginTop: 30}}>
      <CardContainer>

      {/* Details */}
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ color: 'darkorange', fontWeight: 'bold', fontSize: 25 }}>{requestItem.id}</Text>
          <Text>
              <StatusBadge ShowStatus={requestItem.status}/>
          </Text>
        </View>

      </View>
     </CardContainer>

     <CardContainer>
        <LabelContainer label="Warehoue" value={requestItem.warehouse}/>

        <View style={{ flexDirection: 'row', marginTop: 20}}>
          <View style={{ flex: 1 }}>
            <LabelContainer label="Request Date" value={requestItem.requestDate}/>
          </View>
          <View style={{ flex: 1 }}>
            <LabelContainer label="Decision Date" value={(requestItem.decisionDate) ? requestItem.decisionDate : "-"}/>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20}}>
          <View style={{ flex: 1 }}>
            <LabelContainer label="Decided by" value={(requestItem.decidedBy) ? requestItem.decidedBy : "-"}/>
          </View>
          <View style={{ flex: 1 }}>
            <LabelContainer label="Destribution Run" value={(requestItem.destributionRun) ? requestItem.destributionRun : "-"}/>
          </View>
        </View>
        <View style={{ marginTop: 20}}>
        <Text style={{ fontSize: 15, color: 'gray', marginBottom: 10}}>Run Status</Text>
        <Text style={{ fontSize: 20, color: 'white'}}><StatusBadge ShowStatus={requestItem.runStatus}/></Text>
      </View>
     </CardContainer>

     <CardContainer>
      <LabelContainer label="Request Note" value={(requestItem.note) ? requestItem.note : "-"} valueStyle={{ fontSize: 16}}/>
     </CardContainer>
    </View>
  )
}

export default RequestDetailsMain