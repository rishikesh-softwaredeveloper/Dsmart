import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View,Text, ScrollView,TextInput } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { Button, Icon,Card } from "react-native-elements";


const Dashboard = () =>{
    const navigation = useNavigation();
    const options = [
        { label: "Day", value: "Day" },
        { label: "Week", value: "Week" },
        { label: "Month", value: "Month" }
      ];
    return(
        <ScrollView>
            <View style={styles.contentView}>
                <View style={{
                    justifyContent:'flex-start',
                    alignItems:'flex-start',
                    alignContent:'flex-start',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:"#ccc"}}
                >
                    <SwitchSelector
                        options={options}
                        initial={0}
                        buttonColor={"purple"}
                        borderColor={"purple"}
                        borderRadius={4}
                        // onPress={value => console.log(value)}
                    />
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:5}}>
                    <View>
                        <Icon name="less-than" type="material-community" color='#323333' size={20}/>
                    </View>
                    <View>
                        <Text>Monday, February 16</Text>
                    </View>
                    <View style={{alignContent:'flex-end'}}>
                        <Icon name="greater-than" type="material-community" color='#323333' size={20}/>

                    </View>
                </View>
                
            </View>
            <Card style={{borderRadius:5}}>
                <Text style={{marginBottom:10}}>Meds Tracker</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc',marginBottom:10,padding:10}}>
                    <View>
                        <Icon name="pill" type="material-community" color='#323333' size={20}/>
                    </View>
                    <Text>Metformin</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1,borderBottomColor:'#ccc'}}>
                    <View>
                        <Icon name="pill" type="material-community" color='#323333' size={20}/>
                    </View>
                    <Text>Rosuvastatin</Text>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10}}>
                    <View>
                        <Icon name="pill" type="material-community" color='#323333' size={20}/>
                    </View>
                    <Text>Clopidogrel</Text>
                </View>
            </Card>

            <Card style={{borderRadius:5}}>
                <Text style={{marginBottom:10}}>Activity Tracker</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc',marginBottom:10,padding:10, justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <View>
                            <Icon name="shoe-print" type="material-community" color='#323333' size={20}/>
                        </View>
                        <Text>Steps</Text>
                    </View>
                    <View>
                        <Text>72000(72%)</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1,borderBottomColor:'#ccc', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Icon name="weight-lifter" type="material-community" color='#323333' size={20}/>
                            </View>
                            <Text>Exercise</Text>
                        </View>
                        <View>
                           <Text>40 min(100%)</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <View>
                                <Icon name="sleep" type="material-community" color='#323333' size={20}/>
                            </View>
                            <Text>Sleep</Text>
                        </View>
                        <View>
                           <Text>40 min(100%)</Text>
                        </View>
                </View>
            </Card>
            
            <Card style={{borderRadius:5}}>
                <Text style={{marginBottom:10}}>Vitals Tracker</Text>
                <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#ccc',marginBottom:10,padding:10, justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row',marginBottom:10}}>
                        <View>
                            <Icon name="heart-pulse" type="material-community" color='#323333' size={20}/>
                        </View>
                        <Text>Heart Rate</Text>
                    </View>
                    <View>
                        <Text>78 bpm</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1,borderBottomColor:'#ccc', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <Icon name="gas-cylinder" type="material-community" color='#323333' size={20}/>
                            </View>
                            <Text>SpO2</Text>
                        </View>
                        <View>
                           <Text>95%</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10,borderBottomWidth:1,borderBottomColor:'#ccc', justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <View>
                                <Icon name="thermometer-lines" type="material-community" color='#323333' size={20}/>
                            </View>
                            <Text>Temperature</Text>
                        </View>
                        <View>
                           <Text>97.8 F</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row',marginBottom:10,padding:10, justifyContent:'space-between'}}>
                        <View style={{flexDirection:'row',marginBottom:10}}>
                            <View>
                                <Icon name="water" type="material-community" color='#323333' size={20}/>
                            </View>
                            <Text>Blood Pressure</Text>
                        </View>
                        <View>
                           <Text>130/80 mmHg</Text>
                        </View>
                </View>
            </Card>
            
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

export default Dashboard;
