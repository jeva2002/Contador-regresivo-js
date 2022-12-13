const timerComponent = () => {
  const main = document.createElement('main');
  main.innerHTML = `
  <h1>WE'RE LAUCHING SOON</h1>
  <section>
    <div>
      <time>0</time>
      <h2>DAYS</h2>
    </div>
    <div>
      <div class="top">
        <time>0</time>
      </div>
      <div class="bottom"></div>
      <h2>HOURS</h2>
    </div>
    <div>
      <div class="top">
        <time>0</time>
      </div>
      <div class="bottom"></div>
      <h2>MINUTES</h2>
    </div>
    <div>
      <div class="top">
        <time>0</time>
      </div>
      <div class="bottom"></div>
      <h2>SECONDS</h2>
    </div>
  </section>
  `;
  return main;
};
