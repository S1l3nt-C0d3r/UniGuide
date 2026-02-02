import { useState } from 'react';
import styled from 'styled-components';
import { Image } from 'react-native-svg';
import { Searchbar, Card } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer/spacer.component';
import { Alert, Button, Text, TouchableOpacity, StatusBar} from 'react-native';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { View } from 'react-native';
import{Icon, CollegeCardCover, Address, Info, CollegeCard, Rating, Section, Sectionend} from './college.info-card.style'
import { SafeArea } from '../../../components/Utilities/safe-area.component';
import { Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export const CollegeDetailInfo = ({college}={}) => {
const {
        name="new college",
        address="new address",
        entrance=[],
        image="https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg",
        links=[],
        collegeLink="",
        rank=[],
        description="college description"
    } = college;
    return(
    <>
    <LinearGradient colors={["#0F2027", "#203A43", "#2C5364"]} style={{flex:1}}>
    <StatusBar backgroundColor={"transparent"}></StatusBar>
    <ScrollView>
    {image? 
        (<View style={{alignItems:"center", paddingTop:20}}>
        <CollegeCardCover key={name} source={{uri:image }} style={{height:260, width:350, backgroundColor:"white"}}/>
        </View>):
        (   <View style={{alignItems:"center", paddingTop:20}}>
            <LinearGradient
            colors={["#6190E8", "#A7BFE8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{width:360,
                    height:240,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 12,
                    paddingRight:20,
                    paddingLeft:20,
                    overflow: "hidden",}}
        >
            <BlurView intensity={50} tint="dark" style={StyleSheet.absoluteFill} />
            <Text style={{
                color: "white",
                fontSize: 14,
                fontFamily:"MPLUSRounded1c_500Medium",
                textAlign: "center",
                paddingHorizontal: 10,
            }}>{college.name}</Text>
        </LinearGradient>
        </View>
        )}
        <Text style={{paddingTop:15, paddingBottom:10, color:"#F5F5F5", paddingLeft:20, fontSize:22, fontFamily:"MPLUSRounded1c_500Medium"}}>
            About The College
        </Text>
        <View>
        <Text style={{paddingBottom:10, paddingLeft:20,paddingRight:20, fontSize:16,fontSize:16, fontFamily:"MPLUSRounded1c_400Regular", color:"#848484"}}>
            {description}
        </Text>
    </View>
    { collegeLink ? (
                <View style={{alignItems:"center",paddingTop:10,paddingBottom:10, paddingRight:50, paddingLeft:50}}>
                    <TouchableOpacity
                    style={{backgroundColor:"transparent",borderColor:"white",borderWidth:1,width:360,height:60, borderRadius:16,alignItems:"center",alignContent:"center"}}
                    onPress={() => Linking.openURL(collegeLink)}
                    >
                    <Text style={{color:"white", paddingTop:20, fontSize:16}}>
                        College Website
                    </Text>
                    </TouchableOpacity>
                </View>
                ) : (
                    <View style={{alignItems:"center",paddingTop:10,paddingBottom:10}}>
                    <TouchableOpacity
                    key={index}
                    style={{backgroundColor:"transparent",borderColor:"white",borderWidth:1,width:412,height:60, borderRadius:16,alignItems:"center",alignContent:"center"}}
                    onPress={() => Alert.alert("Link has not yet been released")}
                    >
                    <Text style={{color:"white", paddingTop:20, fontSize:16}}>
                        {exam}
                    </Text>
                    </TouchableOpacity>
                </View>
                        )
    }
        <View>
        <Text style={{paddingTop:15, paddingBottom:10, color:"#F5F5F5", paddingLeft:20, fontSize:22, fontFamily:"MPLUSRounded1c_500Medium"}}>
            Location
        </Text>
        <Text style={{paddingBottom:10, paddingLeft:20,paddingRight:20, fontSize:16, fontFamily:"MPLUSRounded1c_400Regular", color:"#848484"}}>
            {address}
        </Text>
    </View>
        <Text style={{paddingTop:15, paddingBottom:10, color:"#F5F5F5", paddingLeft:20, fontSize:22, fontFamily:"MPLUSRounded1c_500Medium"}}>Entrances</Text>
            {entrance.map((exam, index) => {
                const link = links[index];

                return link ? (
                <View style={{alignItems:"center",paddingTop:10,paddingBottom:10, paddingRight:50, paddingLeft:50}}>
                    <TouchableOpacity
                    key={index}
                    style={{backgroundColor:"transparent",borderColor:"white",borderWidth:1,width:360,height:60, borderRadius:16,alignItems:"center",alignContent:"center"}}
                    onPress={() => Linking.openURL(link)}
                    >
                    <Text style={{color:"white", paddingTop:20, fontSize:16}}>
                        {exam}
                    </Text>
                    </TouchableOpacity>
                </View>
                ) : (
                    <View style={{alignItems:"center",paddingTop:10,paddingBottom:10}}>
                    <TouchableOpacity
                    key={index}
                    style={{backgroundColor:"transparent",borderColor:"white",borderWidth:1,width:412,height:60, borderRadius:16,alignItems:"center",alignContent:"center"}}
                    onPress={() => Alert.alert("Link has not yet been released")}
                    >
                    <Text style={{color:"white", paddingTop:20, fontSize:16}}>
                        {exam}
                    </Text>
                    </TouchableOpacity>
                </View>
                        );
            })}
    </ScrollView>
    </LinearGradient>
    </>
    );
}
