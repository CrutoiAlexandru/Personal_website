import "./App.css"

function App() {
  document.body.style = 'background: white';

  return (
    <>
    <div class="title-bar">
      <h1 >Crutoi's website</h1>
    </div>
    <div class="cards-wrapper" >
      <div class="about-me-card">
        <h2>About me</h2>
      </div>
      <div class="my-code-card">
        <h2>My code</h2>
      </div>
      <div class="contact-me-card">
        <h2>Contact me</h2>
      </div>
    </div>
    </>
  )
}

export default App;
