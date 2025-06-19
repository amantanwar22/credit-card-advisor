import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChatForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    income: "",
    habits: [],
    benefits: [],
    creditScore: ""
  });

  const questions = [
    {
      label: "What is your monthly income?",
      type: "text",
      field: "income"
    },
    {
      label: "How do you spend the most? (Select multiple)",
      type: "multi",
      field: "habits",
      options: ["fuel", "travel", "groceries", "dining"]
    },
    {
      label: "What kind of rewards do you prefer?",
      type: "multi",
      field: "benefits",
      options: ["cashback", "points", "lounge access"]
    },
    {
      label: "Do you know your credit score?",
      type: "text",
      field: "creditScore"
    }
  ];

  const handleInput = (value) => {
    const currentField = questions[step].field;
    setForm({ ...form, [currentField]: value });
    setStep(step + 1);
  };

  const handleMultiSelect = (option) => {
    const currentField = questions[step].field;
    const current = form[currentField];
    if (current.includes(option)) {
      setForm({ ...form, [currentField]: current.filter(o => o !== option) });
    } else {
      setForm({ ...form, [currentField]: [...current, option] });
    }
  };

  const handleSubmit = async () => {
  try {
    const API_URL = process.env.REACT_APP_API_URL;
    const res = await axios.post(`${API_URL}/api/advisor/recommend`, form);
    navigate("/summary", { state: { recommendations: res.data } });
  } catch (err) {
    alert("Error connecting to backend.");
  }
};

  const current = questions[step];

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Credit Card Advisor</h2>
      {step < questions.length ? (
        <div>
          <p>{current.label}</p>
          {current.type === "text" && (
            <input
              type="text"
              value={form[current.field]}
              onChange={(e) => setForm({ ...form, [current.field]: e.target.value })}
            />
          )}
          {current.type === "multi" && (
            <div>
              {current.options.map((opt) => (
                <label key={opt}>
                  <input
                    type="checkbox"
                    checked={form[current.field].includes(opt)}
                    onChange={() => handleMultiSelect(opt)}
                  />
                  {opt}
                </label>
              ))}
            </div>
          )}
          <br />
          <button onClick={() => handleInput(form[current.field])} disabled={
            current.type === "text" && !form[current.field]
          }>
            Next
          </button>
        </div>
      ) : (
        <div>
          <p>All done! Ready to get your recommendations?</p>
          <button onClick={handleSubmit}>Get Recommendations</button>
        </div>
      )}
    </div>
  );
};

export default ChatForm;
