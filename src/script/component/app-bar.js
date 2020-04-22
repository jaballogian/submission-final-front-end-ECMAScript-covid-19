class AppBar extends HTMLElement{
    
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
            :host {
                display: flex;
                padding: 20px;
                width: 100%;
                background-color: dodgerblue;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                font-family: 'Quicksand', sans-serif;
                position: sticky;
                top: 0;
            }
            h2 {
                color: white;
                width: 80%;
                margin-left: 20px;
            }
            p {
                color: black;
                font-weight: bold;
                width: 20%;
                text-align: right;
                margin-top: auto;
                margin-bottom: auto;
                margin-right: 20px;
            }
        </style>
        <h2>Just Another Covid-19 World Data</h2>
        <p>made by Jabal Logian</p>`;
    }
}

customElements.define("app-bar", AppBar);