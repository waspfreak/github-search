import React from 'react';

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
          {getArray.length <= 0 ? (<p>No Item</p>) : (
            favList.map((fav: any, i: number) => (
              <li key={i}>
                <p>{fav.id}</p>
                <p>{fav.name}</p>
                <p>Repository: <a href={fav.html_url}>{fav.name}</a></p>
                <p>Description: {fav.description}</p>
                <p>Language: {fav.language}</p>
              </li>))
          )}
        </ul>
      </>
    </div >
  )
}
