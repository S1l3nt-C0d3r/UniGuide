import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
flex:1;
paddingTop: (isAndroid ? 0px:0px);
`;