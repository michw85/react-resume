import React from "react"
import {Carousel} from "react-bootstrap"
import slider7 from '../img/slider7.jpg'
import slider6 from '../img/slider6.jpg'
import slider3 from '../img/slider3.jpg'
import slide12 from '../img/slide12.jpg'
import slider5 from '../img/slider5.jpg'
import slider13 from '../img/slide13.jpg'
import reactBooks from '../img/reactBooks.jpg'

export default function Slider(){
// Slider with my projects
    return(
        <Carousel>
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slider7} alt="First slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3>Web development</h3>
                    <p>Slide 1</p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slider6} alt="Second slide"/>
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3>Web development</h3>
                    <p>Slide 2</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slider3} alt="Third slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3>Web development</h3>
                    <p>Slide 3</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slide12} alt="Fourth slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3 >Web development</h3>
                    <p >Slide 4</p>
                </Carousel.Caption>
            </Carousel.Item>          
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slider5} alt="Fifth slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3>Web development</h3>
                    <p>Slide 5</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={slider13} alt="Sixs slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'height':'100px'}}>
                    <h3>Web development</h3>
                    <p>Slide 6</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height':'90vh'}}>
                <img className="d-block w-100" src={reactBooks} alt="Sevens slide" />
                <Carousel.Caption style={{'backgroundColor':'rgba(0, 0, 0, 0.4)', 'top':'5px', 'left':'25px', 'paddingLeft':'10px', 'width':'300px', 'height':'100px', 'textAlign':'left'}}>
                    <h3>Web development</h3>
                    <p>Slide 7</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
