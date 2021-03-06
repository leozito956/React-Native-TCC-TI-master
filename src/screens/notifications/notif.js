import * as React from 'react';
import { Button, View, Text,} from 'react-native';


export function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notifications Screen</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }