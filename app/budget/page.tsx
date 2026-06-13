"use client";

import { useEffect, useState } from "react";

export default function BudgetPage() {
  const [cpu, setCpu] = useState(0);
  const [gpu, setGpu] = useState(0);
  const [ram, setRam] = useState(0);
  const [storage, setStorage] = useState(0);
  const [casePrice, setCasePrice] = useState(0);

  useEffect(() => {
    const savedBudget = localStorage.getItem("pcBudget");

    if (savedBudget) {
      const budget = JSON.parse(savedBudget);

      setCpu(budget.cpu || 0);
      setGpu(budget.gpu || 0);
      setRam(budget.ram || 0);
      setStorage(budget.storage || 0);
      setCasePrice(budget.casePrice || 0);
    }
  }, []);

  useEffect(() => {
    const budget = { cpu, gpu, ram, storage, casePrice };
    localStorage.setItem("pcBudget", JSON.stringify(budget));
  }, [cpu, gpu, ram, storage, casePrice]);

  const total = cpu + gpu + ram + storage + casePrice;

  return (
    <section>
      <h2>Budget Calculator</h2>
      <p>Enter estimated prices for each PC part.</p>

      <div className="formBox">
        <label>
          CPU Price
          <input
            type="number"
            value={cpu}
            onChange={(e) => setCpu(Number(e.target.value))}
          />
        </label>

        <label>
          GPU Price
          <input
            type="number"
            value={gpu}
            onChange={(e) => setGpu(Number(e.target.value))}
          />
        </label>

        <label>
          RAM Price
          <input
            type="number"
            value={ram}
            onChange={(e) => setRam(Number(e.target.value))}
          />
        </label>

        <label>
          Storage Price
          <input
            type="number"
            value={storage}
            onChange={(e) => setStorage(Number(e.target.value))}
          />
        </label>

        <label>
          Case Price
          <input
            type="number"
            value={casePrice}
            onChange={(e) => setCasePrice(Number(e.target.value))}
          />
        </label>
      </div>

      <h3 className="total">Estimated Total: ${total}</h3>
    </section>
  );
}