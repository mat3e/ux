const VM = require('vm');
const JestUtils = require('jest-util');
const {ModuleMocker} = require('jest-mock');
const {JestFakeTimers} = require('@jest/fake-timers');
const {AsyncWindow} = require('happy-dom');

/**
 * Jest environment to use happy-dom.
 *
 * Should be replaced with https://github.com/capricorn86/jest-environment-happy-dom
 * after https://github.com/capricorn86/happy-dom/pull/36 will be included in happy-dom used there.
 */
module.exports = class HappyDOMEnvironment {
    fakeTimers = null;
    global = this.createContext();
    moduleMocker = new ModuleMocker(this.global);

    constructor(config, options = {}) {
        const global = this.global;
        const timerConfig = {
            idToRef: (id) => id,
            refToId: (ref) => ref
        };

        // Node's error-message stack size is limited at 10, but it's pretty useful
        // to see more than that when a test fails.
        global.Error.stackTraceLimit = 100;

        // Removes fetch for security reasons and it should be mocked anyway
        delete this.global.fetch;
        delete this.global.window.fetch;

        JestUtils.installCommonGlobals(this.global, config.globals);

        if (options.console) {
            global.console = options.console;
            global.window.console = options.console;
        }

        this.fakeTimers = new JestFakeTimers({
            config,
            global,
            moduleMocker: this.moduleMocker,
            timerConfig
        });
    }

    async setup() {
    }

    async teardown() {
        this.fakeTimers.dispose();
        this.global.window.dispose();

        this.global = null;
        this.moduleMocker = null;
        this.fakeTimers = null;
    }

    runScript(script) {
        return script.runInContext(this.global);
    }

    createContext() {
        return VM.createContext(new AsyncWindow());
    }
}
