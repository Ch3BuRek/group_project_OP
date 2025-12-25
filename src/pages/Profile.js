import { useState } from "react";

function Profile({ profile, setProfile }) {
  const [form, setForm] = useState(
    profile || {
      name: "",
      age: "",
      city: "",
      breed: "",
      description: "",
      image: ""
    }
  );

  const save = () => {
    setProfile(form);
    alert("профіль збережено");
  };

  return (
    <section>
      <h2>Мій профіль</h2>

      <input placeholder="Імʼя" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Вік" onChange={e => setForm({...form, age: e.target.value})} />
      <input placeholder="Місто" onChange={e => setForm({...form, city: e.target.value})} />
      <input placeholder="Порода" onChange={e => setForm({...form, breed: e.target.value})} />
      <textarea placeholder="Про мене" onChange={e => setForm({...form, description: e.target.value})} />

      <button onClick={save}>Зберегти</button>
    </section>
  );
}

export default Profile;

