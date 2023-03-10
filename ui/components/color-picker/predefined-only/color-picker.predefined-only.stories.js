import { storiesOf } from '@storybook/html';
import base from 'paths.macro';
import notes from '../doc.md';
import scss from './_index.scss';
import {
  withExample,
  withDocs,
  commentToHTML
} from '../../../../scripts/storybook';

storiesOf(`${base}`.replace(/(^\/)|(\/$)/g, ''),  module)
  .addDecorator(withDocs(notes))
  .addDecorator(commentToHTML(scss))
  .add('Default (default)', () => {
    return withExample(`<div class="nds-color-picker">
  <div class="nds-color-picker__summary">
    <label class="nds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <button class="nds-button nds-color-picker__summary-button nds-button_icon nds-button_icon-more">
      <span class="nds-swatch" style="background: rgb(87, 123, 193) none repeat scroll 0% 0%;">
        <span class="nds-assistive-text">hsl(220, 46%, 55%)</span>
      </span>
      <svg class="nds-button__icon nds-button__icon_small" aria-hidden="true">
        <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="nds-assistive-text">Choose a color. Current color: #5679C0</span>
    </button>
    <div class="nds-form-element nds-color-picker__summary-input">
      <div class="nds-form-element__control">
        <input type="text" id="color-picker-summary-input" class="nds-input" placeholder="Placeholder Text" value="#5679C0">
      </div>
    </div>
  </div>
  <section class="nds-popover nds-color-picker__selector nds-hide" role="dialog" aria-label="Choose a color" aria-describedby="dialog-body-id-17">
    <div class="nds-popover__body" id="dialog-body-id-17">
      <ul class="nds-color-picker__swatches" role="listbox">
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
            <span class="nds-swatch" style="background: rgb(227, 171, 236) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#e3abec</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(194, 219, 247) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#c2dbf7</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(159, 214, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9fd6ff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(157, 231, 218) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9de7da</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(157, 240, 192) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9df0c0</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 240, 153) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#fff099</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(254, 212, 154) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#fed49a</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(208, 115, 224) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#d073e0</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(134, 186, 243) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#86baf3</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(94, 187, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5ebbff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(68, 216, 190) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#44d8be</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(59, 226, 130) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#3be282</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 230, 84) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#ffe654</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 183, 88) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#ffb758</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(189, 53, 189) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#bd35bd</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(87, 121, 193) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5779c1</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(94, 187, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5ebbff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(0, 174, 169) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#00aea9</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(60, 186, 76) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#3cba4c</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(245, 188, 37) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#f5bc25</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(249, 146, 33) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#f99221</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(88, 13, 140) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#580d8c</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(0, 25, 112) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#001970</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(10, 35, 153) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0a2399</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(11, 116, 119) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0b7477</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(11, 107, 80) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0b6b50</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(182, 126, 17) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#b67e11</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(184, 93, 13) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#b85d0d</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <footer class="nds-popover__footer">
      <div class="nds-color-picker__selector-footer">
        <button class="nds-button nds-button_neutral">Cancel</button>
        <button class="nds-button nds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>`);
  })
  .add('Predefined Color Picker Open (states)', () => {
    return withExample(`<div class="nds-color-picker">
  <div class="nds-color-picker__summary">
    <label class="nds-color-picker__summary-label" for="color-picker-summary-input">Choose Color</label>
    <button class="nds-button nds-color-picker__summary-button nds-button_icon nds-button_icon-more">
      <span class="nds-swatch" style="background: rgb(87, 123, 193) none repeat scroll 0% 0%;">
        <span class="nds-assistive-text">hsl(220, 46%, 55%)</span>
      </span>
      <svg class="nds-button__icon nds-button__icon_small" aria-hidden="true">
        <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
      </svg>
      <span class="nds-assistive-text">Choose a color. Current color: #5679C0</span>
    </button>
    <div class="nds-form-element nds-color-picker__summary-input">
      <div class="nds-form-element__control">
        <input type="text" id="color-picker-summary-input" class="nds-input" placeholder="Placeholder Text" value="#5679C0">
      </div>
    </div>
  </div>
  <section class="nds-popover nds-color-picker__selector nds-show" role="dialog" aria-label="Choose a color" aria-describedby="dialog-body-id-18">
    <div class="nds-popover__body" id="dialog-body-id-18">
      <ul class="nds-color-picker__swatches" role="listbox">
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="0">
            <span class="nds-swatch" style="background: rgb(227, 171, 236) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#e3abec</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(194, 219, 247) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#c2dbf7</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(159, 214, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9fd6ff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(157, 231, 218) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9de7da</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(157, 240, 192) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#9df0c0</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 240, 153) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#fff099</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(254, 212, 154) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#fed49a</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(208, 115, 224) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#d073e0</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(134, 186, 243) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#86baf3</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(94, 187, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5ebbff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(68, 216, 190) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#44d8be</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(59, 226, 130) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#3be282</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 230, 84) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#ffe654</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(255, 183, 88) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#ffb758</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(189, 53, 189) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#bd35bd</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(87, 121, 193) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5779c1</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(94, 187, 255) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#5ebbff</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(0, 174, 169) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#00aea9</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(60, 186, 76) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#3cba4c</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(245, 188, 37) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#f5bc25</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(249, 146, 33) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#f99221</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(88, 13, 140) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#580d8c</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(0, 25, 112) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#001970</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(10, 35, 153) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0a2399</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(11, 116, 119) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0b7477</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(11, 107, 80) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#0b6b50</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(182, 126, 17) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#b67e11</span>
            </span>
          </a>
        </li>
        <li class="nds-color-picker__swatch" role="presentation">
          <a class="nds-color-picker__swatch-trigger" href="#" role="option" tabindex="-1">
            <span class="nds-swatch" style="background: rgb(184, 93, 13) none repeat scroll 0% 0%;">
              <span class="nds-assistive-text">#b85d0d</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
    <footer class="nds-popover__footer">
      <div class="nds-color-picker__selector-footer">
        <button class="nds-button nds-button_neutral">Cancel</button>
        <button class="nds-button nds-button_brand">Done</button>
      </div>
    </footer>
  </section>
</div>`);
  });
