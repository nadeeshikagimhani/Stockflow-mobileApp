import { View } from '@/components/ui/view';
import OverviewCard from './OverviewCard'
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { Plus, HistoryIcon } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { useCallback } from 'react';

const StockRequestMain = () => {

  const router = useRouter();

  const gotoNewRequest = useCallback(()=> {
    router.push('/NewRequest')
  }, []);

  const gotoPastequests = useCallback(()=> {
    router.push('/PastRequests')
  }, []);

  const cardDetails = [
    {
      title: "Active Products",
      value: 6,
      description: "Unique SKDS tracked from last month"
    },
    {
      title: "Remaining Stock",
      value: 200,
      description: "Unique SKDS tracked from last month"
    },
    {
      title: "With FDOs",
      value: 300,
      description: "Unique SKDS tracked from last month"
    },
    {
      title: "Variance",
      value: 90,
      description: "Unique SKDS tracked from last month"
    }
  ];
  
  return (
    <View style={{ flex: 1, padding: 20}}>
      {/* Cards */}
      <View style={{ gap: 20, flexDirection: 'row', flexWrap: 'wrap'}}>

        {cardDetails.map((index) => (
          <OverviewCard key={index.title} {...index}/>
        ))}

      </View>

      {/* Bottom part */}
      <View style={{ marginTop: 50, gap: 10}}>

        <Text variant='heading'>
          Stock Requests
        </Text>
        <Text style={{ color: '#B1B1B1', marginBottom: 20}} variant='subtitle'>
          Request from a warehouse and track approval status.
        </Text>
        
        <Button 
          icon={Plus} variant='success'
          onPress={gotoNewRequest}>
            New Request
        </Button>

        <Button
        icon={HistoryIcon} variant='outline'
        onPress={gotoPastequests}>
          Past Requests
        </Button>

      </View>
    </View>
  )
}

export default StockRequestMain