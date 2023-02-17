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
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Focused (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-is-open" aria-expanded="true" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Open Item Focused (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-is-open" aria-expanded="true" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-activedescendant="listbox-option-unique-id-01" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-has-focus" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Open Option Selected (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-is-open" aria-expanded="true" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="" value="Option A">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Open Options Selected (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-is-open" aria-expanded="true" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="" value="2 Options Selected">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Closed Option Selected (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="" value="Option A">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected nds-has-focus" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Closed Options Selected (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="" value="2 Options Selected">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">
                      <span class="nds-assistive-text">Current Selection:</span>


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="listbox-selections-unique-id" role="listbox" aria-orientation="horizontal">
        <ul class="nds-listbox nds-listbox_horizontal nds-p-top_xxx-small" role="group" aria-label="Selected Options:">
          <li role="presentation" class="nds-listbox__item">
            <span class="nds-pill" role="option" tabindex="0" aria-selected="true">
              <span class="nds-pill__label" title="Option A">Option A</span>
              <span class="nds-icon_container nds-pill__remove" title="Remove">
                <svg class="nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                  <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                </svg>
                <span class="nds-assistive-text">Press delete or backspace to remove</span>
              </span>
            </span>
          </li>
          <li role="presentation" class="nds-listbox__item">
            <span class="nds-pill" role="option" aria-selected="true">
              <span class="nds-pill__label" title="Option B">Option B</span>
              <span class="nds-icon_container nds-pill__remove" title="Remove">
                <svg class="nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                  <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#close"></use>
                </svg>
                <span class="nds-assistive-text">Press delete or backspace to remove</span>
              </span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>`);
  })
  .add('Has Error (states)', () => {
    return withExample(`<div class="demo-only" style="height: 10rem;">
  <div class="nds-form-element nds-has-error">
    <label class="nds-form-element__label" for="combobox-unique-id">Search</label>
    <div class="nds-form-element__control">
      <div class="nds-combobox_container">
        <div class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click" aria-expanded="false" aria-haspopup="listbox" role="combobox">
          <div class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right" role="none">
            <input type="text" class="nds-input nds-combobox__input" id="combobox-unique-id" aria-controls="listbox-unique-id" autocomplete="off" role="textbox" placeholder="Select an Option" readonly="">
            <span class="nds-icon_container nds-icon-utility-down nds-input__icon nds-input__icon_right" title="Description of icon when needed">
              <svg class="nds-icon nds-icon nds-icon_x-small nds-icon-text-default" aria-hidden="true">
                <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span class="nds-assistive-text">Description of icon</span>
            </span>
          </div>
          <div id="listbox-unique-id" role="listbox">
            <ul class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid" role="presentation">
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-01" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option A">


                      Option A

                    </span>
                  </span>
                </span>
              </li>
              <li role="presentation" class="nds-listbox__item">
                <span id="listbox-option-unique-id-02" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" role="option">
                  <span class="nds-media__figure">
                    <svg class="nds-icon nds-icon_x-small nds-listbox__icon-selected" aria-hidden="true">
                      <use xlink:href="./assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                    </svg>
                  </span>
                  <span class="nds-media__body">
                    <span class="nds-truncate" title="Option B">


                      Option B

                    </span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`);
  });
