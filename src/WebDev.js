import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';
import './Carousel.css';
import LobiBox from './LobiBox.jpg';
import RuekoTreats from './RuekoTreats.jpg';
import TMJ from './TMJ.jpg';
import JetAction from './JetAction.jpg';
import SFS from './SFS.jpg';
import DateNightFoorReviews from './DateNightFoorReviews.jpg';

function WebDev(props)
{
    var items = [
        {
            name: <img className="webPortfolio" src={LobiBox} alt="LobiBox" />,
            subtitle: <span className="LobiBox">LobiBox</span>,
            description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <img className="webPortfolio" src={RuekoTreats} alt="RuekoTreats" />,
          subtitle: <span className="RuekoTreats">Rueko Treats</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <img className="webPortfolio" src={TMJ} alt="TMJ Lawn Care" />,
          subtitle: <span className="TMJ">TMJ Lawn Care</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <img className="webPortfolio" src={JetAction} alt="JetAction" />,
          subtitle: <span className="JetAction">Jet Action Rentals</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <img className="webPortfolio" src={SFS} alt="SFS" />,
          subtitle: <span className="SFS">Strategies For Success AZ</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
        {
          name: <img className="webPortfolio" src={DateNightFoorReviews} alt="Date Night Food Reviews" />,
          subtitle: <span className="DateNightFoorReviews">Date Night Food Reviews</span>,
          description: "A complete lead generation and product documentation/support website, developed on Wordpress and hosted on AWS. Global elements have been templated, and the original design is 100% responsive. All of the graphics and mockups on the website were designed by me as well, with exception to the physical product images not placed on a rendered mockup."
        },
    ]

    return (
      <Carousel
        animation="slide"
        swipe="true"
        indicators="true"
        navButtonsAlwaysVisible="true"
        NavButton={({onClick, className, style, next, prev}) => {
            // Other logic
    
            return (
                <Button variant="contained" onClick={onClick} className="NavArrows" style={style}>
                    {next && "Next"}
                    {prev && "Previous"}
                </Button>
            )
        }}
      >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
      </Carousel>
    )
}

function Item(props)
{
    return (
      <div className="MainContainer">
        <div className="ProjectInfo">
          <Paper>
            <h2>{props.item.subtitle}</h2>
              <p>{props.item.description}</p>

              <Button className="CheckButton">
                  View Site
              </Button>
          </Paper>
        </div>
        <div className="ProjectImage">
          {props.item.name}
        </div>
      </div>
    )
}

export default WebDev;