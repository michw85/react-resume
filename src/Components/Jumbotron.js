import React from "react";
import { Jumbotron as Jumbo, Container} from 'react-bootstrap'

const Jumbotron = () => (
    <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
        <Container>
            <div class="main-content-section">
                {/* <!-- Contacts section --> */}
                <div class="my-contacts-section">
                    <h2 class="my-contacts-type">Phones:</h2>
                    <h4 >+380936626661</h4>
                        <p class="my-contacts-description">
                        Viber, WhatsApp, Telegram
                        </p>
                    <h4 class="my-contacts-content">+380688254123</h4>
                    <h2 class="my-contacts-type">Email:</h2>
                    <h4 class="my-contacts-content">mvorontsov713@gmail.com</h4>
                    <h2 class="my-contacts-type">LinkedIn:</h2>
                    <h4 class="my-contacts-content">linkedin.com/in/michael-vorontsov-57b7ba198</h4>
                </div>
            </div>
        </Container>
    </Jumbo>
)

export default Jumbotron