import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Item from "../src/components/Item/Item";
import { Favorites } from '../src/components/Favorites/Favorites';

import { GoBookmark, GoMarkGithub } from "react-icons/go";
import { RiBookmarkLine, RiBookmarkFill } from "react-icons/ri";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

function App() {

  const [repos, setRepos] = useState<any[]>([]);
  //const [searchInput, setSearchInput] = useState(repos);
  const [favorites, setFavorites] = useState([] as Array<number>);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  const URL = `https://api.github.com/search/repositories?q=created:2021-10-26&sort=stars&order=desc&per_page=20`;
  //const URL_LANGUAGE = `https://api.github.com/search/repositories?q=created:2021-10-26&language:${searchInput}&sort

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setRepos(response.data.items);

      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL])


  useEffect(() => {
    if (getArray !== 0) {
      setFavorites([...getArray])
    }
  }, [])

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


  return (
    <div className="App">
      <h2><GoMarkGithub style={{ color: 'grey' }} />GITHUB Search Repositories</h2>

      <Tabs>
        <TabList>
          <Tab>List of repositories</Tab>
          <Tab>Favorites <GoBookmark style={{ color: 'blue' }} /></Tab>
        </TabList>

        <TabPanel>
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
              : <li>No items to show </li>
            }
          </ul>
        </TabPanel>

        <TabPanel>
          <h2> Favorites repositories  </h2>
          <Favorites />
        </TabPanel>
      </Tabs>


    </div >
  );
}

export default App;
