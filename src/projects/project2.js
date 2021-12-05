import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Container, Segment, Image, Label } from 'semantic-ui-react'
import image1 from "../resources/images/p2.gif"
import image2 from "../resources/images/teleporteffect.png"
import image3 from "../resources/images/p1.png"
import image4 from "../resources/images/fight.gif"
import image5 from "../resources/images/f3.gif"


const Project2 = () => {

    const ImageLabel = (image, color, textLabel) => {
        return (
            <Segment size="huge" textAlign='center' raised color={color} compact style={{ display: 'flex', justifyContent: "center", alingItems: 'center', marginLeft: "auto", marginRight: "auto", width: "80%" }} secondary >
                <Image bordered size="huge" src={image} />
                <Label color={color} size='huge' attached='bottom'>{textLabel}</Label>
            </Segment>
        )

    }

    return (
        <div>
            <Container textAlign='center'>
                <Segment>
                    <Header as="h1">Проект №2</Header>
                    <Header as="h3">Particle-эффекты.</Header>
                    <Container text>
                        Заказчик предложил сделать эффекты для большинства героев в игре Minecraft в проекте под названием <strong>Mobs and Thrones</strong>. Задача была не простой,
                        сделать около 20 эффектов, которые бы отображали способности в игре, к примеру эффект замедление вражеского персонажа или эффект лечения.
                    </Container>
                    {ImageLabel(image1, "yellow", "Эффект лечения и защиты, который сделал")}
                    <Container text>
                        В игре присутствовали минимальные эффекты: телепортации, ударов, вампиризма. Как раз они и послужили мне хорошим примером.
                        Нужно сказать, что я до этого никогда не работал на языке JAVA, но был знаком и делал пару задач на этом языке.
                    </Container>
                    {ImageLabel(image2, "purple", "JAVA Код эффекта телепорта")}
                    <Container text>
                        Перед тем как начать, я ознакомился с существующим кодом, разобрал как он работает в теории и на практике.
                        Прочитал статьи про Particle-эффекты и сделал первые тестовые шаги. Создавал функции-методы для их вызова.
                        <br />
                        <a>https://www.spigotmc.org/threads/comprehensive-particle-spawning-guide-1-13-1-18.343001/ </a>
                    </Container>
                    {ImageLabel(image3, "teal", "Статья про эффекты в клиенте Minecraft")}
                    <Container text>
                        В течении 4х дней я сделал все эффекты, которые были необходимы. Игра получилась насыщенной и красивой,
                        благодаря этому игроки ощутили визуальное удовлетворение и интерес попробовать поиграть на всех героях.
                    </Container>
                    {ImageLabel(image4, "green", "Готовые Particle-эффекты и часть матча игры")}

                    <Header as="h3">Итоги:</Header>
                    <Container text>
                        Изучая другие технологии можно узнать что-то новое для себя. В этот раз, разрабатывая этот проект с эффектами, получил новый опыт, который, возможно,
                        применю в будущем. Видеть как твои старания работают, а помимо этого еще и приносят удовольствие и развлекают людей - это огромный успех и удовлетворение!
                    </Container>
                    {ImageLabel(image5, "green", "Готовые Particle-эффекты и часть матча игры")}
                </Segment>
            </Container>
        </div>
    )
}
export default Project2;
