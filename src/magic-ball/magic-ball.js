class AskTheEightBall extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._render();
    this.addEventListener("click", (e) => {
      e.preventDefault();
      const selector = this.shadowRoot.querySelector("#answer");

      selector.textContent = this.theAnswer();

      console.log(selector);
    });
  }

  theAnswer() {
    const answers = [
      "It is certain.",
      "It is decidedly so.",
      "Without a doubt.",
      "Yes definitely.",
      "You may rely on it.",
      "As I see it, yes.",
      "Most likely.",
      "Outlook good.",
      "Yes.",
      "Signs point to yes.",
      "Reply hazy, try again.",
      "Ask again later.",
      "Better not tell you now.",
      "Cannot predict now.",
      "Concentrate and ask again.",
      "Don't count on it.",
      "My reply is no.",
      "My sources say no.",
      "Outlook not so good.",
      "Very doubtful.",
    ];

    let random = Math.floor(Math.random() * answers.length);
    let index = random === 0 ? random : random - 1;

    return answers[index];
  }

  _render() {
    const magicBall = document.createElement("div");
    magicBall.innerHTML = `
      <style>
        .eight-ball--heading {
          text-align: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 3rem;
        }

        .eight-ball {
          appearance: none;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background-color: black;
          background: rgb(93,93,93);
          background: radial-gradient(circle, rgba(93,93,93,1) 0%, rgba(17,17,17,1) 100%);
          margin-top: 1.5rem;
        }

        .eight-ball--answer {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          color: white;

          width: 10rem;
          height: 10rem;
          border-radius: 50%;
          background-color: #050505;
        }

        .eight-ball--answer::before {
          content: '';
          display: block;
          position: absolute;
          width: calc(100% - 16px);
          height: calc(100% - 16px);
          border: 8px solid #0F0F0F;
          border-radius: 50%;
        }

        #answer {
          z-index: 0;
          font-size: .75rem;
          width: 4rem;
          text-align: center;
          margin-top: 3rem;
        }

        #answer::before {
          content: '';
          display: block;
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          width: 0;
          height: 0;
          margin-top: .5rem; 
          border-left: 3.25rem solid transparent;
          border-right: 3.25rem solid transparent;
          
          border-top: 6rem solid #1D23E9;
        }
      </style>
      <p class="eight-ball--heading">Ask the Magic&nbsp;Eight&nbsp;Ball</p>
      <button class="eight-ball">
        <div class="eight-ball--answer">
          <p id="answer">Click Me</p>
        </div>
      </button>
    `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(magicBall);
  }
}

customElements.define("ask-the-eight-ball", AskTheEightBall);
