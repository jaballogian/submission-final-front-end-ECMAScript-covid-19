class TitleBar extends HTMLElement {

    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowDOM.innerHTML = `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }    
        
            .title-bar {
                display: flex;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                border-radius: 10px;
                padding: 20px;
                margin: 20px 20px 20px 20px;
                background-color: beige;
                text-align: center;
            }
            
            .title-bar-flags {
                width: 10%;
            }
            
            .title-bar-country {
                width: 30%;
            }
            
            .title-bar-confirmed, .title-bar-recovered, .title-bar-deaths {
                width: 20%;
            }
        </style>
        <div class="title-bar">
            <h2 class="title-bar-flags">Flags</h2>
            <h2 class="title-bar-country">Country</h2>
            <h2 class="title-bar-confirmed">Confirmed</h2>
            <h2 class="title-bar-recovered">Recovered</h2>
            <h2 class="title-bar-deaths">Deaths</h2>
        </div>`;
    }
}

customElements.define("title-bar", TitleBar);