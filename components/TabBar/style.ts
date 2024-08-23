import styled from '@emotion/native';

export const Container = styled.View<{ borderColor: string }>`
  position: fixed;
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.borderColor};
  border-bottom-width: none;
  border-radius: 25px 25px 0 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 20px;
  z-index:99999;
`;
export const MenuBox = styled.TouchableOpacity`
  display:flex;
  width:20%;
  height:70%;
  align-items:center;
  justify-content:space-between;
`

export const MenuText = styled.Text`
  font-size:11px;
`