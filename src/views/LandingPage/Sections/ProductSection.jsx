import withStyles from '@material-ui/core/styles/withStyles';
import Brush from '@material-ui/icons/Brush';
import Fingerprint from '@material-ui/icons/Fingerprint';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Toys from '@material-ui/icons/Toys';
import Spa from '@material-ui/icons/Spa';
import productStyle from 'assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import InfoArea from 'components/InfoArea/InfoArea.jsx';
import React from 'react';

class ProductSection extends React.Component {
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
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Non-toxic"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Spa}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Healthy Air"
              description="Dust and Nails Source Capture System is designed specifically to remove nail chemical vapors & dust at the source, protecting both the technician's and client's breathing zone."
              icon={Toys}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Premium laquers and polishes"
              description="We proudly use Zoya Nail Lacquers and Madam Glam Gel Polishes, salon quality polishes that are formaldehyde, DBP, toluene and camphor free and are safe for use on children and expectant moms."
              icon={Brush}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
