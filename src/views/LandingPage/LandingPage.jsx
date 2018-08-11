// Style
import withStyles from '@material-ui/core/styles/withStyles';
// Images
import bgImage from 'assets/img/233630_1409340990.jpeg';
import bombEmoji from 'assets/img/emojis/bomb_emoji.png';
import dancerEmoji from 'assets/img/emojis/dancer_emoji.png';
import gemStoneEmoji from 'assets/img/emojis/gem_stone.png';
import heartWithRibbonEmoji from 'assets/img/emojis/heart_with_ribbon.png';
import infoWomanEmoji from 'assets/img/emojis/info_woman.png';
import nailPolishEmoji03 from 'assets/img/emojis/nail_polish_01.png';
import nailPolishEmoji01 from 'assets/img/emojis/nail_polish_02.png';
import womanFairyEmoji from 'assets/img/emojis/woman-fairy-medium-skin-tone_1f9da-1f3fd-200d-2640-fe0f.png';
import womanGestOkEmoji from 'assets/img/emojis/woman-gesturing-ok-type-3_1f646-1f3fc-200d-2640-fe0f.png';
import womanRaiseHandEmoji from 'assets/img/emojis/woman-raising-hand-type-4_1f64b-1f3fd-200d-2640-fe0f.png';
import womanRunningEmoji from 'assets/img/emojis/woman-running-type-4_1f3c3-1f3fd-200d-2640-fe0f.png';
import infoWomanEmoji02 from 'assets/img/emojis/woman_infodesk.png';
import landingPageStyle from 'assets/jss/material-kit-react/views/landingPage.jsx';
import classNames from 'classnames';
// Components
import Button from 'components/CustomButtons/Button.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Parallax from 'components/Parallax/Parallax.jsx';
// Core
import React from 'react';
// Sections
import ProductSection from './Sections/ProductSection.jsx';
import TeamSection from './Sections/TeamSection.jsx';
import WorkSection from './Sections/WorkSection.jsx';


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
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 500,
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
            <ProductSection />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
