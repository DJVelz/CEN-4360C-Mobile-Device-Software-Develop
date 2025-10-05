import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: "", email: "", zip: "" });
  };

  return (
    <div style={{ margin: "40px auto", maxWidth: "400px", fontFamily: "Arial" }}>
      <h2>Simple Info Form</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Zip Code:</label><br />
          <input
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "6px" }}
          />
        </div>

        <button type="submit" style={{ padding: "6px 12px" }}>
          Submit
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Data:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Zip Code:</strong> {submittedData.zip}</p>
        </div>
      )}
    </div>
  );
}

export default App;
