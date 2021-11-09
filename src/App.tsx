import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Ui Components
import Item from "../src/components/Item/Item";
import { Favorites } from '../src/components/Favorites/Favorites';
import Header from '../src/components/Header/Header';
import { Typography } from '../src/components/Typography/Typography';
import { Filter } from '../src/components/Filter/Filter';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
//Icons
import { GoBookmark } from "react-icons/go";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";
//Language
import { TextConstants } from '../src/language/texts';

import './App.css';

function App() {


  const [repos, setRepos] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState();
  const [favorites, setFavorites] = useState([] as Array<number>);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  const URL = `https://api.github.com/search/repositories?q=created:2021-11-01&sort=stars&order=desc&per_page=10`;
  const URL_LANGUAGE = `https://api.github.com/search/repositories?q=created:2021-10-26&q=language:${searchInput}&sort`;


  const getData = (url: any) => {
    axios.get(url)
      .then((response) => {
        setRepos(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getData(URL)

    if (getArray !== 0) {
      setFavorites([...getArray])
    }
  }, [URL, getArray])

  //Add to Favorites
  const addFav = (props: any) => {
    let array = favorites;
    let addArray = true;
    array.map((items: any, key: number) => {
      if (items === props.i) {
        array.splice(key, 1);
        addArray = false
      }
    });
    if (addArray) {
      array.push(props.i);
    }
    setFavorites([...array])

    //set To LocalStorage
    localStorage.setItem("favorites", JSON.stringify(favorites));
    let storage = localStorage.getItem('favItem' + (props.i) || '0')
    if (storage === null) {
      localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.item))
    }
    else {
      localStorage.removeItem('favItem' + (props.i));
    }
  }


  const filteredLanguage = (event: any) => {
    setSearchInput(event.target.value);
  }

  useEffect(() => {
    if (searchInput) {
      getData(URL_LANGUAGE)
    }
  }, [URL_LANGUAGE, searchInput])



  return (
    <div className="App">
      <Header />
      <Tabs>
        <TabList>
          <Tab>{TextConstants.LIST_OF_REPOSITORY}</Tab>
          <Tab>{TextConstants.FAVORITES} <GoBookmark size="1.1em" style={{ color: '#33728f' }} /></Tab>
        </TabList>

        <TabPanel>
          {/* Filter Language */}
          <Filter onClick={filteredLanguage} />

          {/* fetch List of Items  */}
          <ul>
            {repos.length !== 0 ?
              repos.map((item, i) =>
                <>
                  <div key={i}>
                    <Item
                      key={i}
                      id={item.id}
                      alt="string"
                      src={item.owner.avatar_url}
                      starts={item.stargazers_count}
                      user={item.owner.login}
                      description={item.description}
                      name={item.name}
                      url={item.html_url}
                      language={item.language}
                    >
                      {favorites.includes(i) ? (

                        <RiBookmarkFill
                          onClick={() => addFav({ item, i })}
                          size="2em"
                          style={{ color: '#ff5722' }}
                        ></RiBookmarkFill>
                      ) : (
                        <RiBookmarkLine
                          onClick={() => addFav({ item, i })}
                          style={{ color: '#ff5722' }}
                          size="2em"
                        ></RiBookmarkLine>
                      )}

                    </Item>
                  </div>
                </>
              )
              : <li key='0'>{TextConstants.NO_ITEMS_SHOW} </li>
            }
          </ul>
        </TabPanel>

        <TabPanel>
          <Typography size="h2">{TextConstants.BOOKMARK_REPO}</Typography>

          {/* LocalStorage Bookmarks */}
          <Favorites />
        </TabPanel>
      </Tabs>


    </div >
  );
}

export default App;
