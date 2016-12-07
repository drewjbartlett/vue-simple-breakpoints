import Breakpoints from 'simple-breakpoints';

var VueBreakpoint = {};

VueBreakpoint.install = function (Vue, breakpoints) {
    Vue.breakpoints = new Breakpoints(breakpoints);

    Object.defineProperties(Vue.prototype, {

        $breakpoints: {
            get() {
                return Vue.breakpoints;
            }
        }

    });
};

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueBreakpoint);
}

export default VueBreakpoint;
