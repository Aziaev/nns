import withStyles from '@material-ui/core/styles/withStyles';
import bgImage from 'assets/img/233630_1409340990.jpeg';
import dancerEmoji from 'assets/img/emojis/dancer_emoji.png';
import gemStoneEmoji from 'assets/img/emojis/gem_stone.png';
import heartWithRibbonEmoji from 'assets/img/emojis/heart_with_ribbon.png';
import nailPolishEmoji03 from 'assets/img/emojis/nail_polish_01.png';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import classNames from 'classnames';
import Button from 'components/CustomButtons/Button.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderEmojies from 'components/Header/HeaderEmojies';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
import React from 'react';
import ContactsSection from 'views/LandingPage/Sections/ContactsSection';
import PhilosophySection from 'views/LandingPage/Sections/PhilosophySection';
import ProductSection from './Sections/ProductSection.jsx';

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Nova Nail Salon"
          logos={<HeaderEmojies />}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 300,
            color: 'white',
          }}
          {...rest}
        />
        <Parallax filter image={bgImage}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.title}>Healthy nail services</h1>
                <div>
                  <img src={nailPolishEmoji03} alt='nailPolish' style={{ width: '3rem' }} />
                  <img src={gemStoneEmoji} alt='hiddenGem' style={{ width: '3rem' }} />
                  <img src={heartWithRibbonEmoji} alt='heartWithRibbon' style={{ width: '3rem' }} />
                  <img src={dancerEmoji} alt='dancer' style={{ width: '3rem' }} />
                </div>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Our services
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PhilosophySection />
          </div>
        </div>
        <div className={classNames(classes.main, classes.mainRaisedProduct)}>
          <div className={classes.container}>
            <ProductSection />
          </div>
        </div>
        <div className={classNames(classes.main, classes.mainRaisedContacts)}>
          <div className={classes.container}>
            <ContactsSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
