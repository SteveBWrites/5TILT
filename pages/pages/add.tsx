import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function AddFTILT() {
  const [things, setThings] = useState(["", "", "", "", ""]);
  const [message, setMessage] = useState("");

  const handleChange = (index: number, value: string) => {
    const newThings = [...things];
    newThings[index] = value;
    setThings(newThings);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("ftilt").insert([
      {
        one: things[0],
        two: things[1],
        three: things[2],
        four: things[3],
        five: things[4],
      },
    ]);

    if (error) {
      setMessage("❌ Error: " + error.message);
    } else {
      setMessage("✅ Saved your 5 things for today!");
      setThings(["", "", "", "", ""]);
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Add Today’s 5 Things</h1>
      <form onSubmit={handleSubmit}>
        {things.map((thing, index) => (
          <div key={index}>
            <label>Thing {index + 1}: </label>
            <input
              value={thing}
              onChange={(e) => handleChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <button type="submit">Save</button>
      </form>
      <p>{message}</p>
    </main>
  );
}

