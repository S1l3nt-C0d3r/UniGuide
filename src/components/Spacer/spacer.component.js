import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Theme } from "../../infrastructure/theme";
import { useTheme } from "styled-components/native";

const sizeVariant = {
    small:1,
    medium:2,
    large:3,
};

const positionVariant = {
    top:"marginTop",
    bottom:"marginBottom",
    left:"marginLeft",
    right:"marginRight",
}

const getVariant = (position,size, theme) => {
const sizeIndex = sizeVariant[size];
const property = positionVariant[position];
const value = theme.space[sizeIndex];
return `${property}:${value}`;
}
const Spacerview = styled.View`
${({variant})=>variant};`;

export const Spacer = ({position, size, children}) =>{
    const theme = useTheme();
    const variant = getVariant(position, size, theme);
    return <Spacerview variant={variant}>{children}</Spacerview>
}
Spacer.defaultProps = {
    position:'top',
    size:'small'
}