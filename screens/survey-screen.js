import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View,Text, ScrollView,TextInput } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { Button } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';

const SurveyScreen = () =>{
    const navigation = useNavigation();
    const options = [
        { label: "YES", value: "Yes" },
        { label: "NO", value: "No" }
      ];
    const [symptom,setsymptom]=useState('');

    return(
        <ScrollView>
            <View style={styles.contentView}>
                <Text style={{fontSize:18,padding:10}}>1. Are you experiencing heartburn?</Text>
                <View style={{width:"30%",justifyContent:'flex-start',alignItems:'flex-start',alignContent:'flex-start',marginLeft:20,borderRadius:5,borderWidth:1,borderColor:"#ccc"}}>
                    <SwitchSelector
                        options={options}
                        initial={0}
                        buttonColor={"purple"}
                        borderColor={"purple"}
                        borderRadius={4}
                        // onPress={value => console.log(value)}
                    />
                </View>
                <Text style={{fontSize:18,padding:10}}>2. How best can you describe your condition?</Text>
                <Button
                    title="No Pain"
                    buttonStyle={{
                        backgroundColor: 'rgba(244, 244, 244, 1)',
                        borderRadius: 3,
                        justifyContent:'flex-start',
                    }}
                    containerStyle={{
                        height: 40,
                        width: 300,
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}
                    titleStyle={{ marginHorizontal: 20, color: 'black' }}
                    // onPress={()=>}
                />
                <Button
                    title="Mild Pain"
                    buttonStyle={{
                        backgroundColor: 'rgba(244, 244, 244, 1)',
                        borderRadius: 3,
                        justifyContent:'flex-start'
                    }}
                    containerStyle={{
                        height: 40,
                        width: 300,
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}
                    titleStyle={{ marginHorizontal: 20, color: 'black' }}
                    // onPress={()=>}
                />
                <Button
                    title="Moderate Pain"
                    buttonStyle={{
                        backgroundColor: 'rgba(244, 244, 244, 1)',
                        borderRadius: 3,
                        justifyContent:'flex-start'
                    }}
                    containerStyle={{
                        height: 40,
                        width: 300,
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}
                    titleStyle={{ marginHorizontal: 20, color: 'black' }}
                    // onPress={()=>}
                />
                <Button
                    title="Severe Pain"
                    buttonStyle={{
                        backgroundColor: 'rgba(244, 244, 244, 1)',
                        borderRadius: 3,
                        justifyContent:'flex-start',
                        backgroundColor:'purple'
                    }}
                    containerStyle={{
                        height: 40,
                        width: 300,
                        marginHorizontal: 10,
                        marginVertical: 10
                    }}
                    titleStyle={{ marginHorizontal: 20, color: '#fff' }}
                    // onPress={()=>}
                />
                <Text style={{fontSize:18,padding:10}}>3. Select the symptom?</Text>
                <View style={{
                    height: 40,
                    width: 300,
                    marginHorizontal: 10,
                    marginVertical: 10,
                }}>
                    <Picker
                        selectedValue={symptom}
                        onValueChange={(itemValue, itemIndex) =>
                            setsymptom(itemValue)
                        }
                        >
                        <Picker.Item label="symptom1" value="symptom1" />
                        <Picker.Item label="symptom2" value="symptom2" />
                    </Picker>
                </View>
                <Text style={{fontSize:18,padding:10}}>4. Choose all the conditions that apply</Text>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:5}}>
                    <Button
                        title="Diarrhea"
                        buttonStyle={{
                            backgroundColor: 'purple',
                            borderRadius: 3,
                            justifyContent:'flex-start'
                        }}
                        titleStyle={{ marginHorizontal: 20, color: '#fff' }}
                        
                        // onPress={()=>}
                    />
                    <Button
                        title="Fever"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                            justifyContent:'flex-start',
                        }}
                        titleStyle={{ color: 'black' }}
                        // onPress={()=>}
                    />
                    <Button
                        title="Constipation"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                            justifyContent:'flex-start'
                        }}
                        titleStyle={{ color: 'black' }}
                        
                        // onPress={()=>}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:5}}>
                    <Button
                        title="Headache"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                            justifyContent:'flex-start'
                        }}
                        titleStyle={{ color: 'black' }}
                        
                        // onPress={()=>}
                    />
                    <Button
                        title="Body pains"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                            justifyContent:'flex-start',
                        }}
                        titleStyle={{ color: 'black' }}

                        // onPress={()=>}
                    />
                    <Button
                        title="Shivering"
                        buttonStyle={{
                            borderRadius: 3,
                            justifyContent:'flex-start',
                            backgroundColor:'purple'
                        }}
                        // onPress={()=>}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                    <Button
                        title="Stomach Cramps"
                        buttonStyle={{
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                            borderRadius: 3,
                            justifyContent:'flex-start'
                        }}
                        titleStyle={{ color: 'black' }}
                        
                        // onPress={()=>}
                    />
                    <Button
                        title="Shoulder Pain"
                        buttonStyle={{
                            borderRadius: 3,
                            justifyContent:'flex-start',
                            backgroundColor: 'rgba(244, 244, 244, 1)',
                        }}
                        titleStyle={{ color: 'black' }}
                        // onPress={()=>}
                    />
                </View>
                <Text style={{fontSize:18,padding:10}}>5. Anything you would like to add?</Text>
                <View style={{padding:10}}>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Type something"
                            placeholderTextColor="grey"
                            numberOfLines={10}
                            multiline={true}
                        />
                    </View>
                </View>
                <Button
                    title="Submit"
                    buttonStyle={{
                        borderRadius: 3,
                        backgroundColor:'purple'
                    }}
                    containerStyle={styles.buttonstyles}
                     onPress={()=>navigation.navigate("Dashboard")}
                />
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentView: {
      flex: 1,
      alignContent:'center',
      justifyContent:'center',
      backgroundColor:'#fff',
      margin:10
    },
    buttonstyles: {
        marginHorizontal: "25%",
        marginVertical: "3%",
        height: 50,
        width: "50%",
    },
    textAreaContainer: {
        borderColor: "#CCC",
        borderWidth: 1,
        padding: 5,
        width:300,
        marginHorizontal:20
      },
      textArea: {
        height: 50,
        justifyContent: "flex-start"
      }
    
    
  });

export default SurveyScreen;
