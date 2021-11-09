import React from 'react';
import Item from '../Item/Item';
import { TextConstants } from '../../language/texts';

export const Favorites = () => {

  let favList: any = [{}];
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
  for (var i = 0; i < getArray.length; i++) {
    let x = getArray[i];
    favList[i] = JSON.parse(localStorage.getItem('favItem' + [x]) || '')
  }
  console.log(getArray);

  return (
    <div>
      <>
        <ul>
          {getArray.length <= 0 ? (<p>{TextConstants.NO_ITEMS_BOOKMARKED_YET} </p>) : (
            favList.map((fav: any, i: number) => (
              <div key={i}>
                <Item
                  user={fav.owner.login}
                  key={i}
                  id={fav.id}
                  description={fav.description}
                  name={fav.name}
                  url={fav.html_url}
                  language={fav.language}
                />
              </div>
            ))
          )}
        </ul>
      </>
    </div >
  )
}
