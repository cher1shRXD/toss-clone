import styled from "@emotion/native";

export const Container = styled.View<{themeColor:string}>`
  width:100%;
  height:100px;
  background-color:${props=>props.themeColor};
  position:absolute;
  padding: 40px 10px 0 10px;
  top:0;
  left:0;
  display:flex;
  flex-direction:row;
  align-items:center;
`
export const BackButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;