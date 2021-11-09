import React, { SyntheticEvent } from 'react'
import { List, ImageStyle, ImageContainer, Stars, ContainerInfo } from './style';
import { GoStar } from "react-icons/go";

export interface ItemProps {
  label?: string;
  alt?: string;
  src?: string;
  id?: number;
  starts?: string;
  user?: string;
  description?: string;
  name?: string;
  url?: string;
  language?: string;
  children?: any
  onClick?: (event: SyntheticEvent) => void;
}


export const Item: React.FC<ItemProps> = ({
  label,
  alt,
  src,
  id,
  starts,
  user,
  description,
  name,
  url,
  language,
  onClick,
  children,
  ...props
}) => {

  return (

    <List data-testid="item-id" key={id}>
      <ImageContainer>
        <ImageStyle alt={alt} width="100" src={src} />
        <Stars><GoStar size="2em" style={{ color: '#ff9800' }} /> <span>{starts}</span> </Stars>
      </ImageContainer>
      <ContainerInfo>
        <p><span>User: </span>{user}</p>
        <p><span>Repository:</span> <a href={url}>{name}</a></p>
        <p><span>Description:</span> {description}</p>
        <p><span>Language:</span> {language}</p>
      </ContainerInfo>
      <div className="favorites" title="save to favs">
        {children}
      </div>


    </List >

  );
};


export default Item