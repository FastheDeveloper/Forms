import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Redirect } from 'expo-router'

const IndexCheckout = () => {
    Redirect({href:"/checkout/personal"} )

}

export default IndexCheckout

const styles = StyleSheet.create({})