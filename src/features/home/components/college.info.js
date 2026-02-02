import { useState } from 'react';
import styled from 'styled-components';
import { Image } from 'react-native-svg';
import { Searchbar, Card } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer/spacer.component';
import { Text } from '../../../components/Typography/text.component';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { View } from 'react-native';
import{Icon, CollegeCardCover, Address, Info, CollegeCard, Rating, Section, Sectionend} from './college.info-card.style'

export const CollegeInfo = ({college}={}) => {
    const {
        name="new college",
        entrance=[],
        image="https://upload.wikimedia.org/wikipedia/commons/9/9d/Morgan_Hall_of_Williams_College_in_the_fall_%2827_October_2010%29.jpg",
    } = college;
    return(
    <>
        <CollegeCard elevation={3}>
                <CollegeCardCover key={name} source={{uri:image}}/>
                <Info>
                    <Text variant="label">{name}</Text>
                    <View style={{ marginTop: 8 }}>
                        <Text variant="caption">Entrance Exams:</Text>
                        {entrance.map((exam, index) => (
                        <Text variant="caption" key={index}>{exam}</Text>
                    ))}
                    </View>
                </Info>
        </CollegeCard>
    </>
    );
}
