import React, { Component } from 'react'
import { Header, Menu, Button } from 'semantic-ui-react'
import { Container, Segment, Image, Label } from 'semantic-ui-react'
import image1 from "../resources/images/p2.gif"
import image2 from "../resources/images/teleporteffect.png"
import image3 from "../resources/images/p1.png"
import image4 from "../resources/images/fight.gif"
import image5 from "../resources/images/f3.gif"
import { useTranslation } from "react-i18next";


const Project2 = () => {

    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const openLink = () => {
        window.open("https://www.spigotmc.org/threads/comprehensive-particle-spawning-guide-1-13-1-18.343001/")

    }

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
                    <Header as="h1">{t("project2.title1")}</Header>
                    <Header as="h3">{t("project2.title2")}</Header>
                    {ImageLabel(image1, "yellow", t("project2.subheading.part1"), t("project2.description.part1"))}
                    {ImageLabel(image2, "violet", t("project2.subheading.part2"), t("project2.description.part2"))}
                    <Button size="small" compact color='red' onClick={openLink}>Открыть статью</Button>
                    {ImageLabel(image3, "purple", t("project2.subheading.part3"), t("project2.description.part3"))}
                    {ImageLabel(image4, "teal", t("project2.subheading.part4"), t("project2.description.part4"))}
                    <Header as="h3">{t("project2.title3")}</Header>
                    {ImageLabel(image5, "green", t("project2.subheading.part5"), t("project2.description.part5"))}
                </Segment>
            </Container>
        </div>
    )
}
export default Project2;
