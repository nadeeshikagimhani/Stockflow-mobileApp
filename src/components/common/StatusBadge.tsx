import { Text } from "@/components/ui/text";
import { View } from "@/components/ui/view";

const StatusBadge = ({ ShowStatus }: { ShowStatus: string }) => {

  const getStatusStyle = () => {
    switch(ShowStatus){
      case 'Approved':
        return {
          backgroundColor: '#183E0D',
          borderColor: '#49A130',
          color: '#94CD84',
        };
      case 'Pending' :
        return {
          backgroundColor: '#353315',
          borderColor: '#FCF008',
          color: '#E6E073',
        };
      case 'Rejected' :
        return {
          backgroundColor: '#2E0505',
          borderColor: '#ED080C',
          color: '#EB7B7D',
        };
      case 'Completed' :
        return {
          backgroundColor: '#480D37',
          borderColor: '#88326F',
          color: '#D291BF',
        };
      case 'In Progress' :
        return {
          backgroundColor: '#091B3D',
          borderColor: '#244279',
          color: '#85A1D5',
        };
      case 'Not Started' :
        return {
          backgroundColor: '#2E0505',
          borderColor: '#ED080C',
          color: '#EB7B7D',
        };
      case 'Scheduled' :
        return {
          backgroundColor: '#4F260C',
          borderColor: '#8F542F',
          color: '#D0AD97',
        };
      default :
        return {
          backgroundColor: '#580707',
          borderColor: '#999999',
          color: '#666666',
        };
      }

    };

  const statusStyle = getStatusStyle();

  return (
    <View
      style={{
        backgroundColor: statusStyle.backgroundColor,
        borderColor: statusStyle.borderColor,
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 100,
      }}
    >
      <Text
        style={{
          color: statusStyle.color,
          fontSize: 12,
          lineHeight: 18,
        }}
      >
        {ShowStatus}
      </Text>
    </View>
  );
};

export default StatusBadge;