import React, { Component } from 'react'
import { Header, Menu } from 'semantic-ui-react'
import { Container, Segment, Image, Label } from 'semantic-ui-react'
import image1 from "../resources/images/1.png"
import image2 from "../resources/images/2.png"
import image3 from "../resources/images/3.png"
import image4 from "../resources/images/4.png"
import image5 from "../resources/images/5.png"
import image6 from "../resources/images/6.png"


const Project1 = () => {

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
                    <Header as="h1">Проект №1</Header>
                    <Header as="h3">Веб-приложение для отображения LIVE информации о текущем игровом матче.</Header>
                    <Container text>
                        Заказчик поставил непростую задачу: нужно было найти подход для отображения информации из игрового матча. У клиента был бэкенд с данными, которые выходят в конце матча.
                        Разобравшись в системе, выяснилось, что информацию можно передавать не только в конце матча, но и каждый раз когда игровой процесс обновляется.
                        Решение пришло сразу же, можно использовать Web-страницу для отображения информации и оформить её в виде виджетов с greenscreen.
                        Таким образом, используя страницу в приложении для потоковой передачи OBS, также использую фильтр для удаления greenscreen'а можно получить все данные в красивом виде.
                    </Container>
                    {ImageLabel(image1, "yellow", "Изначальный прототип в paint")}
                    {ImageLabel(image2, "violet", "Шаблон в программе прототипирования")}
                    <Container text>
                        После тщательного планирования, я начал делать первый прототип с шаблона.
                        Так как бекэнд не был еще разработан, использован фейк-дату (не настоящий json файл).
                        Распарсил данные и добавил их во фронт. Делая страницу веба, использовал React и  semantic UI.
                    </Container>
                    {ImageLabel(image3, "purple", "Первый рабочий прототип")}
                    <Container text>
                        Как получил одобрение от клиента, продолжил разработку, использовал таймер, который меняет каждые 10 секунд ТАБ с общей информацией, чтобы в ручную её не переключать.
                        Отсортировал данные, которые приходят с бэкенда, для лучшего отображения.
                        Добавил ПРОГРЕССБАР, чтобы пользователи видели кто лидирует в выбранной категории.
                    </Container>
                    {ImageLabel(image4, "teal", "Второй рабочий прототип")}
                    <Container text>
                        После того, как бэкенд был готов, улучшил соединение с бэкендом, добавив доп. информацию. Улучшил отображение иконок. Добавил время игры.
                    </Container>
                    {ImageLabel(image5, "green", "Готовое веб-приложение в OBS")}

                    <Header as="h3">Итоги:</Header>
                    <Container text>
                        Я сделал веб-приложение, использовав свои знания в ВЕБе и вёрстке, также здесь благодаря тому, что хорошо разбираюсь в программе OBS из-за проведения стримов и 
                        записи видеороликов. Такие нестандартные знания помогли решенить проблему красивоого отображения информации и удовлетворить клиента.
                        Само приложение может развиваться дальше, отображать еще больше информации в виде ГРАФИКОВ(золота, опыта, уровней и т.д.) с течением времени. 
                        Отображение эффектов победы/поражение. Убийств, смертей и т.д.
                        Также благодаря приложению можно привлечь новую аудиторию, что поможет развить еще лучше проект.
                    </Container>
                    {ImageLabel(image6, "orange", "Готовое веб-приложение в браузере")}

                </Segment>
            </Container>
        </div>
    )
}
export default Project1;
