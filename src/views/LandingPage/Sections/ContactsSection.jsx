import withStyles from '@material-ui/core/styles/withStyles';
import contactsStyle from 'assets/jss/material-kit-react/views/landingPageSections/contactsStyle';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Map, { GOOGLE_MAP_URL } from 'components/Map/Map';
import React from 'react';

class ContactsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={6}>
            <h2 className={classes.title}>Contacts</h2>
            <h6>Nova Nail Salon Chicago</h6>
            <p>Express Manicure, signature manicure, spa manicure salon in East Washington street, Chicago</p>
            <div style={{ marginTop: '2rem' }}>
              <p>
                <a href='https://goo.gl/maps/UCjmJmacC5L2'> 55 East Washington street, Chicago, Illinois, 60602</a>
              </p>
              <p> email:
                <a href='mailto:novanailsalon@gmail.com'> novanailsalon@gmail.com</a>
              </p>
              <p>
                tel: <a href="tel:+13123666000">312-366-6000</a>
              </p>
            </div>
          </GridItem>
          <GridItem cs={12} sm={12} md={6}>
            <Map
              googleMapURL={GOOGLE_MAP_URL}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(contactsStyle)(ContactsSection);
