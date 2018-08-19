import withStyles from '@material-ui/core/styles/withStyles';
import Brush from '@material-ui/icons/Brush';
import Spa from '@material-ui/icons/Spa';
import Toys from '@material-ui/icons/Toys';
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
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Product and services</h2>
            <span>Express Manicure / Signature Manicure / Spa Manicure</span>
            <p>
              For your choice: No-chip, nail polish lacquer, dip powder, gel
              Products we use: Zoya, Madam Glam, Revel
            </p>
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
