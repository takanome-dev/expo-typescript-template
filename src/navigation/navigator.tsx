import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { AuthNavigation } from '~/src/navigator/stacks'
import TabNavigator from '~/src/navigator/tabs'
import { useAppSelector } from '~/src/redux/root'

const Navigator = () => {
  const { loggedIn } = useAppSelector((state) => state.app)

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  return (
    <NavigationContainer>{loggedIn ? <TabNavigator /> : <AuthNavigation />}</NavigationContainer>
  )
}

export default Navigator
