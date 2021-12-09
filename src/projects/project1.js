import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Container, Segment, Image, Label } from 'semantic-ui-react'
import image1 from "../resources/images/1.png"
import image2 from "../resources/images/2.png"
import image3 from "../resources/images/3.png"
import image4 from "../resources/images/4.png"
import image5 from "../resources/images/5.png"
import image6 from "../resources/images/6.png"
import { useTranslation } from "react-i18next";

const Project1 = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };


    const ImageLabel = (image, color, textLabel, description) => {
        return (
            <>
                <Container text>
                    {description}
                </Container>
                <Segment size="huge" textAlign='center' raised color={color} compact style={{ display: 'flex', justifyContent: "center", alingItems: 'center', marginLeft: "auto", marginRight: "auto", width: "80%" }} secondary >
                    <Image bordered size="huge" src={image} />
                    <Label color={color} size='huge' attached='bottom'>{textLabel}</Label>
                </Segment>
            </>
        )

    }

    return (
        <div>
            <Container textAlign='center'>
                <Segment>
                    <Header as="h1">{t("project1.title1")}</Header>
                    <Header as="h3">{t("project1.title2")}</Header>
                    {ImageLabel(image1, "yellow", t("project1.subheading.part1"), t("project1.description.part1"))}
                    {ImageLabel(image2, "violet", t("project1.subheading.part2"))}
                    {ImageLabel(image3, "purple", t("project1.subheading.part3"), t("project1.description.part2"))}
                    {ImageLabel(image4, "teal", t("project1.subheading.part4"), t("project1.description.part3"))}
                    {ImageLabel(image5, "green", t("project1.subheading.part5"), t("project1.description.part4"))}
                    <Header as="h3">{t("project1.title3")}</Header>
                    {ImageLabel(image6, "orange", t("project1.subheading.part6"), t("project1.description.part5"))}
                </Segment>
            </Container>
        </div>
    )
}
export default Project1;
