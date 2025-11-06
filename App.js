import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MyApp = () => {
    const [q1, setQ1] = useState('Cat');
    const [q2, setQ2] = useState('Dog');
    const [q3, setQ3] = useState('Elephant');

    return (
        <ScrollView style={{ marginTop: 40 }}>
            <Text style={{fontSize:35,fontWeight:'bold'}}>Animal Quiz</Text>

            {/* animal 1 - Elephant */}
            <Image
                source={{ uri: 'https://www.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/siteassets/shutterstock_2118427715_cropped.jpg' }}
                style={{ width: 300, height: 300 }}
            />
            <Text>What is this Animal ? </Text>
            <Picker
                selectedValue={q1}
                onValueChange={(value) => setQ1(value)}
            >
                <Picker.Item label='Cat' value='Cat' />
                <Picker.Item label='Dog' value='Dog' />
                <Picker.Item label='Elephant' value='Elephant' />
            </Picker>

            {/* animal 2 - Cat */}
            <Image
                source={{ uri: 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg' }}
                style={{ width: 300, height: 300 }}
            />
            <Text>What is this Animal ? </Text>
            <Picker
                selectedValue={q2}
                onValueChange={(value) => setQ2(value)}
            >
                <Picker.Item label='Dog' value='Dog' />
                <Picker.Item label='Cat' value='Cat' />
                <Picker.Item label='Elephant' value='Elephant' />
            </Picker>

            {/* animal 3 - Dog */}
            <Image
                source={{ uri: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11181403/202104iStock-1349456012.jpg' }}
                style={{ width: 300, height: 300 }}
            />
            <Text>What is this Animal ? </Text>
            <Picker
                selectedValue={q3}
                onValueChange={(value) => setQ3(value)}
            >
                <Picker.Item label='Elephant' value='Elephant' />
                <Picker.Item label='Cat' value='Cat' />
                <Picker.Item label='Dog' value='Dog' />
            </Picker>

            {/* SUBMIT BUTTON */}
            <TouchableOpacity
                onPress={() => {
                    let score = 0;
                    if (q1 === 'Elephant') score++;
                    if (q2 === 'Cat') score++;
                    if (q3 === 'Dog') score++;

                    ToastAndroid.show(
                        "You got " + score + " / 3 correct!",
                        ToastAndroid.SHORT
                    );
                }}
            >
                <Text style={{marginBottom:40, marginTop:20, fontWeight:'bold',fontSize:20, textAlign:'center', backgroundColor:'teal'}}>Submit</Text>
            </TouchableOpacity>


        </ScrollView>
    );
};

export default MyApp;
