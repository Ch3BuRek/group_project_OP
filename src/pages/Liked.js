function Liked({ cats }) {
  return (
    <section>
      <h2>Сподобані</h2>
      <div className="grid">
        {cats.map(cat => (
          <div key={cat.id} className="card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
            <p>{cat.city}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Liked;
