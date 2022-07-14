import { LitElement, html } from 'lit'

// Just a super simple component that renders a greeting.
// ps. remember to use MobxLitElement instead of LitElement if you are using reactive properties.
class MyElement extends LitElement {
    render() {
        return html` <div>Hello from MyElement!</div> `
    }
}

customElements.define('my-element', MyElement)
