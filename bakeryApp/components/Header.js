import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { themeColors } from '../theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: themeColors.bgColor(1),
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})