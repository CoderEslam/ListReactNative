import {StatusBar} from 'expo-status-bar';
import {FlatList, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

export default function App() {
    /*
    * array => object
    * or => object inside array
    * */
    const [people, setPeople] = useState([ /* map function*/
        {name: 'eslam', id: '1'}, {name: 'd', id: '2'}, {name: 'f', id: '3'}, {name: 'g', id: '4'}, {
            name: 'gjh', id: '5'
        }, {name: 'j', id: '6'}, {name: 'io', id: '7'}, {name: 't', id: '8'}, {name: 'tttr', id: '9'}, {
            name: 'eew', id: '10'
        }])

    const remover = (id) => {
        setPeople((peoplePre /* as an object*/) => {
            return peoplePre.filter(person /* as an object selected*/ => person.id != id) // filter remover
        })
    }

    const filterById = (id) => {
        setPeople((peoplePre /* as an object*/) => {
            return peoplePre.filter(person /* as an object selected*/ => person.id == id) // filter selected
        })
    }

    return (<View style={styles.container}>
        {/* keyExtractor => instead key if not exist*/}
        <FlatList
            numColumns={2}
            data={people}
            keyExtractor={(item => item.id)}
            renderItem={({item}) => (<TouchableOpacity onPress={(h) => remover(item.id)
                // Toast(item.name)
                // console.log(item.name)

            }>
                <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>)}/>
        {/*<ScrollView>
                {people.map((item) => {
                    return (
                        <View key={item.key}>
                            <Text style={styles.item}
                                  onPress={(i) => {
                                      Toast(item.name + " " + i.timeStamp)
                                  }}>{item.name + " =>  " + item.key}</Text>
                        </View>
                    )
                })}
            </ScrollView>*/}
    </View>);


}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingHorizontal: 20, // alignItems: 'center',
        // justifyContent: 'center',
    }, item: {
        marginTop: 24, padding: 30, backgroundColor: "pink", fontSize: 24, marginHorizontal: 25
    }
});


const Toast = (text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT)
}

