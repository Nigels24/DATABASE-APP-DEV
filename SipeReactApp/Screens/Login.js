import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native'

import Signup from './Signup'

export default function Login({ navigation }) {
    const [username, setUsername] = useState('')
    const [pwd, setPwd] = useState('')
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 45, fontWeight: "bold", }}> Login </Text>
            <TextInput
                placeholder="Username.."
                style={{ width: '90%', borderWidth: 1, borderRadius: 5, padding: 6, marginBottom: 3 }}
                onChangeText={(anyText) => setUsername(anyText)}
            />
            <TextInput
                placeholder="Password.."
                secureTextEntry={true}
                style={{ width: '90%', borderWidth: 1, borderRadius: 5, padding: 6, marginBottom: 3 }}
                onChangeText={(anyText) => setPwd(anyText)}
            />
            <View style={{ margin: 5 }}>
                <Button
                    title="Login"
                    style={styles.signinbtn}
                    onPress={() => Alert.alert('LOGIN SUCCESFULLY')}
                />
            </View>
            <View>
                <Text> Don't have an account?</Text>
                <Button
                    title='Signup here'
                    onPress={() => navigation.navigate('Signup')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c6cbef',
        alignItems: 'center',
    },
})
