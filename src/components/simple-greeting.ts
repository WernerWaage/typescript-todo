import { html, css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

// This example shows a simple component with an input parameter(name) and css styling that does not bubble up to the parent.
@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
    static styles = css`
        p {
            color: blue;
        }
    `
    @property()
    name = 'Somebody'

    render() {
        return html`<p>Hello, ${this.name}!</p>`
    }
}
