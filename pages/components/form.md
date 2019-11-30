# Form

Pellentesque vitae nibh eu tellus lacinia luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed porttitor erat fermentum dui viverra, non imperdiet dui porttitor.

```html
<form class="bf-form">
  <legend class="bf-form-title">Example form</legend>

  <label class="bf-label" for="name">Enter your name</label>
  <input class="bf-input bf-form-input" id="name" placeholder="Your name goes here"/>

  <label class="bf-label" for="title">Enter your title</label>
  <input class="bf-input bf-form-input" id="title" placeholder="Your title goes here"/>

  <label class="bf-label" for="address">Enter additional information</label>
  <textarea class="bf-textarea bf-form-input" id="address" placeholder="Enter additional information here"></textarea>
  
  <label class="bf-checkbox bf-form-input">
    <input type="checkbox" name="option" value="1">
    <span class="bf-checkbox-label">Option 1</span>
  </label>

  <label class="bf-checkbox bf-form-input">
    <input type="checkbox" name="option" value="2">
    <span class="bf-checkbox-label">Option 2</span>
  </label>

  <button class="bf-btn bf-form-btn">Submit Application</button>
</form>
```