import React from 'react'
import { View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import TabContainer from './components/TabContainer'
import UdaciStatusBar from './components/UdaciStatusBar'
import { purple } from './utils/colors'

const App = () => (
  <Provider store={createStore(reducer)}>
    <View style={{flex: 1}}>
      <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
      <TabContainer />
    </View>
  </Provider>
)

export default App