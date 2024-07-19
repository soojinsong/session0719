import React from 'react'
import { CircleContainer, Section04Wrap } from './Section04.styled'

const Section04 = () => {
    return (
        <Section04Wrap>
            <h3>
                <em>CORE-VALUES</em><br />
                GROUND-RULES
            </h3>
            <div>
                <CircleContainer>
                    <h3>Commitiment</h3>
                    <p>정직 : Honesty</p>
                    <p>존중 : Respect</p>
                    <p>신뢰 : Trust</p>
                </CircleContainer>
                <CircleContainer>
                    <h3>Challenge</h3>
                    <p className='orange'>개척 : Pioneer</p>
                    <p className='orange'>집착 : Obsession</p>
                    <p>탁월 : Excellence</p>
                </CircleContainer>
                <CircleContainer>
                    <h3>Companionship</h3>
                    <p>다양성 : Diversity</p>
                    <p>배려 : Consideration</p>
                    <p>소통 : Communication</p>
                </CircleContainer>
            </div>
        </Section04Wrap>
    )
}

export default Section04