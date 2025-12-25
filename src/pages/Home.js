function Home({ go }) {
  return (
    <section className="home">
      <img src="/imgs/love.png" alt="Hearts" className="home-image" />
      <h2>Знайди свого кота</h2>
      <p>Твій ідеальний пухнастий компаньйон чекає на перший свайп.</p>
      <button className="cta" onClick={() => go("swipe")}>
        Почати свайп
      </button>
    </section>
  );
}

export default Home;