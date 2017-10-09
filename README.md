# Simple Breakpoints for Vue.js

[![npm](https://img.shields.io/npm/v/vue-simple-breakpoints.svg)](https://www.npmjs.com/package/vue-simple-breakpoints)
[![npm](https://img.shields.io/npm/dt/vue-simple-breakpoints.svg)](https://www.npmjs.com/package/vue-simple-breakpoints)

## Installation and usage

See official documentation [here](https://github.com/drewjbartlett/simple-breakpoints).

    $ npm install vue-simple-breakpoints

```javascript
    import Vue from 'vue'
    import VueSimpleBreakpoints from 'vue-simple-breakpoints'

    Vue.use(VueSimpleBreakpoints)

    new Vue({
        el: '#app',

        mounted() {
            if(this.$breakpoints.isMobile()) {
                // some mobile stuff
            }
        }
    };
```

```html
    <div id="app">
        <div v-if="$breakpoints.isMobile()">Mobile</div>
        <div v-if="$breakpoints.isTablet()">Tablet</div>
        <div v-if="$breakpoints.isSmallDesktop()">Small Desktop</div>
        <div v-if="$breakpoints.isLargeDesktop()">Large Desktop</div>

        <!-- simple scalable div -->
        <div class="some-div-with-window-height" :style="{ height: $breakpoints.viewport.height + 'px' }">
            A div that grows with the window
        </div>
    </div>
```

### Adding Custom Breakpoints

```javascript
    import Vue from 'vue'
    import VueSimpleBreakpoints from 'vue-simple-breakpoints'

    Vue.use(VueSimpleBreakpoints, { mobile: 320, tablet: 640, small_desktop: 1000, large_desktop: 1200 })

    new Vue({
        el: '#app',

        mounted() {
            if(this.$breakpoints.isMobile()) {
                // some mobile stuff for a 320 width
            }
        }
    };
```
