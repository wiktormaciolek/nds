// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { StandardIcon } from '../../icons/standard/example';
import {
  ComboboxContainer,
  Listbox,
  ListboxItem,
  EntityOption
} from '../base/example';
import { ListboxPill } from '../../pills/listbox-of-pill-options/example';
import SvgIcon from '../../../shared/svg-icon';

const listboxSelectionsId = 'listbox-selections-unique-id';
const listboxOptionId01 = 'listbox-option-unique-id-01';
const listboxOptionId02 = 'listbox-option-unique-id-02';

const ListboxDropdown = props => (
  <Listbox className="nds-dropdown nds-dropdown_fluid" vertical>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId01}
        entityTitle="Acme"
        entityMeta
        focused={props.focused}
      />
    </ListboxItem>
    <ListboxItem>
      <EntityOption
        id={listboxOptionId02}
        entityTitle="Salesforce.com, Inc."
        entityMeta
      />
    </ListboxItem>
  </Listbox>
);

export default (
  <div className="demo-only" style={{ height: '10rem' }}>
    <ComboboxContainer
      inputIcon="right"
      inputIconRightSymbol="search"
      objectSwitcherInline
      autocomplete
      listbox={<ListboxDropdown />}
      objectSwitcher
    />
  </div>
);

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          containerClassName="nds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          objectSwitcherInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown />}
          objectSwitcher
        />
      </div>
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          inputIcon="right"
          inputIconRightSymbol="search"
          objectSwitcherInline
          autocomplete
          isOpen
          listbox={<ListboxDropdown focused />}
          objectSwitcher
          aria-activedescendant={listboxOptionId01}
        />
      </div>
    )
  },
  {
    id: 'options-selected',
    label: 'Option(s) Selected',
    element: (
      <ComboboxContainer
        inputIcon="right"
        inputIconRightSymbol="search"
        objectSwitcherInline
        autocomplete
        objectSwitcher
      >
        <Listbox
          id={listboxSelectionsId}
          aria-label="Selected Options:"
          className="nds-p-top_xxx-small"
          inline
        >
          <ListboxItem>
            <ListboxPill label="Acme" tabIndex="0">
              <Avatar className="nds-avatar_x-small nds-pill__icon_container">
                <StandardIcon symbol="account" />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
          <ListboxItem>
            <ListboxPill label="Salesforce.com, Inc.">
              <Avatar className="nds-avatar_x-small nds-pill__icon_container">
                <StandardIcon symbol="opportunity" />
              </Avatar>
            </ListboxPill>
          </ListboxItem>
        </Listbox>
      </ComboboxContainer>
    )
  },
  {
    id: 'focused-options-selected',
    label: 'Focused - Option(s) Selected',
    element: (
      <div className="demo-only" style={{ height: '10rem' }}>
        <ComboboxContainer
          isOpen
          containerClassName="nds-has-input-focus"
          inputIcon="right"
          inputIconRightSymbol="search"
          objectSwitcherInline
          autocomplete
          listbox={<ListboxDropdown />}
          objectSwitcher
        >
          <Listbox
            id={listboxSelectionsId}
            aria-label="Selected Options:"
            className="nds-p-top_xxx-small"
            inline
          >
            <ListboxItem>
              <ListboxPill label="Acme" tabIndex="0">
                <Avatar className="nds-avatar_x-small nds-pill__icon_container">
                  <StandardIcon symbol="account" />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
            <ListboxItem>
              <ListboxPill label="Salesforce.com, Inc.">
                <Avatar className="nds-avatar_x-small nds-pill__icon_container">
                  <StandardIcon symbol="opportunity" />
                </Avatar>
              </ListboxPill>
            </ListboxItem>
          </Listbox>
        </ComboboxContainer>
      </div>
    ),
    script: `
      document.getElementById('combobox-unique-id').focus()
    `
  }
];
