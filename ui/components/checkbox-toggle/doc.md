# Checkbox Toggle

A checkable input that communicates if an option is true, false or indeterminate

The ability to style checkboxes with CSS varies across browsers.
To ensure that checkboxes look the same everywhere, we use a custom DOM.
Pay close attention to the markup, because all elements must exist for the
styles to work.

## Accessibility

Groups of checkboxes should be marked up using the fieldset and legend
element. This helps someone using assistive technology to understand the
question they're answering with the group of checkboxes. The fieldset is
placed around the whole group and the legend contains the question.

Custom checkboxes are created by applying the `.nds-checkbox` class to
a `<label>` element. To remain accessible to all user agents, place
`<input>` with `type="checkbox"` inside the `<label>` element.  The `<input>`
is then visually hidden, and the styling is placed on a span with
the `.nds-checkbox_faux` class. The styling of the span changes based
on whether the checkbox is selected or focused by using a pseudo-element.
A second span with `.nds-form-element__label` contains the label text.

When a single checkbox is required, `<div class="nds-checkbox">` should
get `<abbr class="required" title="required"></abbr>` added to the DOM,
directly before the `<input type="checkbox" />` for visual indication
that the checkbox is required.

When a checkbox group is required, the `<fieldset>` should receive the
class `.nds-is-required`. The `<legend>` should then get
`<abbr class="required" title="required"></abbr>` added to the DOM for
visual indication that the checkbox group is required.

As NDS checkboxes rely on the :checked psuedo selector, and the
indeterminate state is only accessible via JavaScript, the use of a
CSS class on the input will be necessary to implement this in NDS.
Use JavaScript to add the class when the indeterminate property is set to
true on the input.

The following JavaScript demonstrates how to set a checkbox to be indeterminate:
```js
var checkbox = document.getElementById('checkbox-indeterminate-01');
checkbox.indeterminate = true;
```
