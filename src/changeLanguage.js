/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Button, Header, Menu } from 'semantic-ui-react'
import { Container, Segment } from 'semantic-ui-react'
import { useTranslation } from "react-i18next";

const Change = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };



    return (
        <div>
          <Button compact  color='pink' onClick={() => changeLanguage("ru")}>RU</Button>
          <Button compact  color='pink' onClick={() => changeLanguage("lorem")}>LOREM</Button>
        </div>
    )
}
export default Change;

