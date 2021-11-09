import React, { SyntheticEvent, useState, useEffect } from 'react'
import axios from 'axios';

import { Button } from '../Button/Button';

import { Container } from './style'

export interface FilterProps {
  label?: string;
  id?: string;
  value?: string;
  onClick?: (event: SyntheticEvent) => void;
}



export const Filter: React.FC<FilterProps> = ({ onClick }) => {

  const [language, setLanguage] = useState<any[]>([]);
  const URL = `https://api.github.com/search/repositories?q=created:2021-11-01&sort=stars&order=desc&per_page=30`;

  //Try get languages and filter
  const getLanguage = language.map((item) => item.language);
  const filtered = language.filter(({ language }, index) => !getLanguage.includes(language, index + 1))
  const getLanguageArray = filtered.map((item) => (item.language));

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setLanguage(response.data.items);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [URL])


  return (
    <Container>
      {getLanguageArray.length !== 0 ?
        getLanguageArray.map((item, i) =>
          <Button value={item} key={i} label={item} onClick={onClick} />) : ('')
      }
    </Container>
  )
}

