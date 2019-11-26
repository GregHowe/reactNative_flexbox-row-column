import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
const Home = (props) => {
   return (
      <View>
         <View style = {styles.container}>
            <View style = {styles.redbox} />
            <View style = {styles.bluebox} />
            <View style = {styles.blackbox} />
         </View>
         <View style = {styles.containerColumn}>
         <View style = {styles.redbox} />
         <View style = {styles.bluebox} />
         <View style = {styles.blackbox} />
      </View>
      </View>
   )
}
export default Home
const styles = StyleSheet.create ({
   container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 290
   },
   containerColumn: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      height: 290
   },
   redbox: {
      width: 100,
      height: 100,
      backgroundColor: 'red'
   },
   bluebox: {
      width: 100,
      height: 100,
      backgroundColor: 'blue'
   },
   blackbox: {
      width: 100,
      height: 100,
      backgroundColor: 'black' 
   },
})