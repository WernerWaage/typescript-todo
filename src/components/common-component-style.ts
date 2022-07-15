import { css } from 'lit'
export const commonStylesheet = css`
    /* CSS */
    button {
        background-color: #ea4c89;
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        display: inline-block;
        font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
            sans-serif;
        font-size: 14px;
        font-weight: 500;
        height: 40px;
        line-height: 20px;
        list-style: none;
        margin: 0;
        outline: none;
        padding: 10px 16px;
        position: relative;
        text-align: center;
        text-decoration: none;
        transition: color 100ms;
        vertical-align: baseline;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
    }

    button:hover,
    button:focus {
        background-color: #f082ac;
    }

    .taskContainer {
        //box-shadow: outset, inset/h-offset v-offset blur spread color;
        // width: 350px;
        // height: 200px;
        // border: solid 1px #555;
        max-width: 960px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
        -o-box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    .input-task {
        border: none;
        border-bottom: 2px solid red;
    }
    .inputContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        transition: width 0.4s ease-in-out;
    }
    .inputContainer input:hover { border-bottom: 3px solid red; }

`