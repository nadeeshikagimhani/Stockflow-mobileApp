import React, { useState } from 'react'
import { Picker } from '@/components/ui/picker'
import { View } from '@/components/ui/view';
import { Text } from '@/components/ui/text';
import { WARE_HOUSES } from '@/constants/mock-data';
import { DatePicker } from '@/components/ui/date-picker';
import { useColor } from '@/hooks/useColor';
import { Button } from '@/components/ui/button';
import { Plus, SaveCheck } from 'lucide-react-native';
import { Input } from '@/components/ui/input';

const NewRequestMain = () => {

  const [value, setValue] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const border = useColor('border')

  const options = WARE_HOUSES.map((index)=>(
    {
      label: index.name,
      value: index.id+""
    }
  ));
  
  return (
    <View style={{ padding: 20, gap: 20}}>
      <Text>Warehouse *</Text>
      <Picker
      style={{ marginBottom: 10}}
      options={options}
      value={value}
      onValueChange={setValue}
      placeholder='Select the warehouse'
    />

    <Text>Request Date *</Text>
    <DatePicker
      style={{ marginBottom: 10}}
      label='Select Date'
      value={selectedDate}
      onChange={setSelectedDate}
      placeholder='Choose a date'
     />

    <Text>Products *</Text>
      <View style={{
        borderRadius: 16,
        borderWidth: 1,
        borderColor: border,
        padding: 10}}>
        <Text>No items are added</Text>
      </View>

    <Button style={{ marginBottom: 10}} icon={Plus}>Add</Button>
    <Text>Note</Text>
    <Input type="textarea" placeholder="Add any information relevant to this stock request" />
    <Button variant="success" icon={SaveCheck}>Save</Button>
    </View>
  )
}

export default NewRequestMain