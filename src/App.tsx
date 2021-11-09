import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Item from "../src/components/Item/Item";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import './App.css';

function App() {

  const [repos, setRepos] = useState<any[]>([]);
  //const [searchInput, setSearchInput] = useState(repos);
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


  return (
    <div className="App">

      <Tabs>
        <TabList>
          <Tab>List of repositories</Tab>
          <Tab>Favorites</Tab>
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
        </TabPanel>
      </Tabs>


    </div>
  );
}

export default App;
