import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Text } from '@/components/ui/text'
import { View } from '@/components/ui/view'
import { windowWidth } from '@/constants/dimentions'

type Props = {
  title: string,
  value: number,
  description: string
}

const OverviewCard = ({ title, value, description}:Props) => {
  return (
      <Card style={{ width: (windowWidth - 60)/2 }}>
          <CardHeader>
            <CardTitle style={{ fontSize: 18 }}>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 4 }}>
              {value}
            </Text>
            <Text style={{ color: '#D0D0D0', fontSize: 14 }}>
              {description} from last month
            </Text>
          </CardContent>
        </Card>
  )
}

export default OverviewCard