import withStyles from '@material-ui/core/styles/withStyles';
import dancerEmoji from 'assets/img/emojis/dancer_emoji.png';
import gemStoneEmoji from 'assets/img/emojis/gem_stone.png';
import heartWithRibbonEmoji from 'assets/img/emojis/heart_with_ribbon.png';
import nailPolishEmoji03 from 'assets/img/emojis/nail_polish_01.png';
import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';
import React from 'react';

function HeaderEmojies({ ...props }) {
  return (
    <div style={{ padding: '0 0 0.2rem 1rem' }}>
      <img src={nailPolishEmoji03} alt='nailPolish' style={{ width: '1rem' }} />
      <img src={gemStoneEmoji} alt='hiddenGem' style={{ width: '1rem' }} />
      <img src={heartWithRibbonEmoji} alt='heartWithRibbon' style={{ width: '1rem' }} />
      <img src={dancerEmoji} alt='dancer' style={{ width: '1rem' }} />
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderEmojies);
