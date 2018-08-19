import withStyles from '@material-ui/core/styles/withStyles';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import React from 'react';

class PhilosophySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Our Philosophy</h2>
            <h5 className={classes.description}>
              Located in the Jewelers District of downtown Chicago, Nova Nail Salon is a hidden gem that offers safe
              and healthy nail services using non-toxic cruelty-free nail polishes.
              We believe that you can have beautifully manicured nails without having to expose yourself to the toxins
              and chemicals found in the typical nail salon. With that in mind, we have incorporated healthy product
              alternatives, along with the most advanced and powerful ventilation and extraction technology available
              for use in Nail Salons.
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(PhilosophySection);
