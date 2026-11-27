import { View } from "@/components/ui/view"
import { useColor } from "@/hooks/useColor";
import { ReactNode } from "react";

const CardContainer = ({ children } : { children : ReactNode}) => {

  const bg = useColor('card');

  return (
      <View 
        style={{
          padding: 20,
          borderWidth: 1,
          borderColor: "#434343",
          borderRadius: 10,
          marginHorizontal:20,
          backgroundColor: bg,
        }}>
          {children}
    </View>
  )
}

export default CardContainer