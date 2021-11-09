import React, { SyntheticEvent } from 'react'
import { List, ImageStyle, ImageContainer, Stars, ContainerInfo } from './style';
import { GoStar } from "react-icons/go";
import { TextConstants } from '../../language/texts';

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
}) => {

  return (

    <List data-testid="item-id" key={id}>
      {src && (
        <ImageContainer>
          <ImageStyle alt={alt} width="100" src={src} />
          <Stars><GoStar size="2em" style={{ color: '#ff9800' }} /> <span>{starts}</span> </Stars>
        </ImageContainer>
      )}

      <ContainerInfo>
        <p><span>{TextConstants.USER}</span>{user}</p>
        <p><span>{TextConstants.REPOSITORY}</span> <a href={url}>{name}</a></p>
        <p><span>{TextConstants.DESCRIPTION}</span> {description}</p>
        <p><span>{TextConstants.LANGUAGE}</span> {language}</p>
      </ContainerInfo>
      {children && (
        <div className="favorites" title={TextConstants.SAVE_TO_BOOKMARK_PAGE}>
          {children}
        </div>
      )}

    </List >

  );
};


export default Item