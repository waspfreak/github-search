import styled from 'styled-components';

export const List = styled.li`
  display: flex;
  border-bottom: 1px solid #33728f;
  margin-bottom: 1em;
  width: 95%;
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;  
`;

export const ImageStyle = styled.img`
  display: inline-block;
  border-radius: 50%;
`;

export const Stars = styled.span`
display: flex;
  span{
  font-size: 1.2em;
  color: #ccc;
  font-weight: bolder;
  line-height: 2em;
  }
`;

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    text-align: initial;  
    margin-left: 1.5em; 
    max-width: 75%; 
    p{
      margin: 0;
      color: #247599;
      padding: 0;
      font-size: 1.4em;
      a{
        color: #247599;
      }
      span{
        font-weight: bold;
        color: #83adbf;
      }

    }
`;