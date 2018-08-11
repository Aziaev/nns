// Images
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
// Core
import React from 'react';

export default function Emoji(props) {
  const { name, size } = props;
  return (
    <React.Fragment>
      <img src={bombEmoji} />
      <img src={dancerEmoji} />
      <img src={gemStoneEmoji} />
      <img src={infoWomanEmoji02} />
      <img src={infoWomanEmoji} />
      <img src={womanFairyEmoji} />
      <img src={nailPolishEmoji01} />
      <img src={nailPolishEmoji03} />
      <img src={heartWithRibbonEmoji} />
      <img src={womanGestOkEmoji} />
      <img src={womanRaiseHandEmoji} />
      <img src={womanRunningEmoji} />
    </React.Fragment>
  );
}
