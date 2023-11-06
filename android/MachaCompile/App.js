import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Terminal from './src/Terminal';
import Editor from './src/Editor';
import Options from './src/Options';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [editorText, setEditorText] = React.useState('');
  console.log(editorText);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Editor">
        {() => <Editor setEditorText={setEditorText} />}
      </Tab.Screen>
      <Tab.Screen name="Terminal">
        {() => <Terminal editorText={editorText} />}  
      </Tab.Screen>

      <Tab.Screen name="Options" component={Options} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
