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
        .eight-ball {
          position: relative;
          width: 20rem;
          height: 20rem;
          border-radius: 50%;
          background-color: black;
          background: rgb(93,93,93);
          background: radial-gradient(circle, rgba(93,93,93,1) 0%, rgba(17,17,17,1) 100%);
        }
        
        .eight-ball:before {
          content: '';
          display: block;
          position: relative;
          width: 10rem;
          height: 10rem;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background-color: white;
        }
      </style>
      <form method="get">
        <label for="question">What do you want to ask the magic 8 ball?</label>
        <input type="text" id="question" name="question" />
        <button type="submit" id="ask">Ask</button>
      </form>
      <p>The Eight Ball Says <span id="answer"></span></p>
      <div class="eight-ball"></div>
    `;

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(magicBall);
  }
}

customElements.define("ask-the-eight-ball", AskTheEightBall);
