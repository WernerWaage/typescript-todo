export {}

import { MobxLitElement } from '@adobe/lit-mobx'
import { css, html } from 'lit'
import { Options } from './options-class'

import { ObservableTimer } from './observable-timer-base'
import { commonStylesheet } from './common-component-style'

// Just a super simple component that renders a greeting.
// ps. remember to use MobxLitElement instead of LitElement if you are using reactive properties.
class OptionsComponent extends MobxLitElement {
    static styles = css`
        ${commonStylesheet}
        .container {
        max-width: 960px;
        margin: 0 auto;
        }
    `

    
            // @change=${this.setHideCompleted}
            // ?checked=${this.hideCompleted}
    
    render() {
        const optionsHtml = html`
            <div class="container taskContainer">
            <div>
            <h2>Options</h2>

            <button class="button-1" role="button">Import tasks</button>
            <button class="button-1" role="button">Export tasks</button>
            <button class="button-1" role="button">Clear tasks</button>

            <br>


                <label>
                    <input
                        type="checkbox"
                    /> Toggle completed tasks
                    <br>

                </label>


            <hr>
            <observable-timer></observable-timer>

        </div>
       </div>
       
       
     
       
       `
        return html`<div class="container">
             <!-- Show Options: ${myOptions.showOptions}<br> -->

            <button class="center" @click=${() => myOptions.toggle()}>Options</button>
            <br> <br>

            ${myOptions.showOptions  ? optionsHtml : html`<br>`} 
        
        </div>`
    }


}

customElements.define('options-component', OptionsComponent)
const myOptions = new Options()
