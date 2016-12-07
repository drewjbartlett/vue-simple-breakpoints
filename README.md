# Simple Breakpoints for Vue.js

## Installation and usage

See official documentation [here](https://github.com/drewjbartlett/simple-breakpoints).
    $ npm install vue-simple-breakpoints

```javascript
    import Vue from 'vue'
    import SimpleBreakpoints from 'simple-breakpoints'

    Vue.use(SimpleBreakpoints)

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
    import SimpleBreakpoints from 'simple-breakpoints'

    Vue.use(SimpleBreakpoints, { mobile: 320, tablet: 640, small_desktop: 1000, large_desktop: 1200 })

    new Vue({
        el: '#app',

        mounted() {
            if(this.$breakpoints.isMobile()) {
                // some mobile stuff for a 320 width
            }
        }
    };
```
