import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { View } from '@/components/ui/view';
import { useColor } from '@/hooks/useColor';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, LogInIcon, User } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, TouchableOpacity } from 'react-native';


export default function HomeScreen() {

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const muted = useColor('mutedForeground');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 80,
        }}
      >
        <Text
        style={{
          fontSize: 50,
          color: 'white',
          textAlign:'center',
          fontWeight: 200
        }}>{"Welcome To\n"}
        <Text
        style={{
          fontSize: 50,
          color: 'orange',
          fontWeight: 800
        }}>
          Stockflow
        </Text>
        </Text>
      </View>

      <View
      style={{
        gap: 15,
        paddingHorizontal: 20
      }}>
      <Input label='Username' placeholder='Enter your username' icon={User} />

      <Input
        label='Password'
        placeholder='Toggle visibility'
        secureTextEntry={!showPassword}
        rightComponent={
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <EyeOff size={22} color={muted} />
            ) : (
              <Eye size={22} color={muted} />
            )}
          </Pressable>
        }
      />
      
      <Button
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
        onPress={() => router.replace('/(tab)/StockRequest') }
      >
        <Text style={{ color: 'black', fontWeight: 800}}>Log in</Text>
        <LogInIcon size={20} color="black" />
      </Button>
      </View>
    </View>
  );
}
