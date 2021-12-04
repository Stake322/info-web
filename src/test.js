import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Container, Segment } from 'semantic-ui-react'



const Test = () => {
    const src = "https://livecounts.org/live-sub-count/Mamau-Dota"


    return (
        <div>
            <iframe height="100px" width="350px" frameborder="0"  src={src} allowfullscreen></iframe>
        </div>
    )
}
export default Test;
