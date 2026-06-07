export default function Home() {
  return (
    <section className="hero">
      <h2>Build Your Perfect PC</h2>
      <p>
        This app helps beginners understand PC parts, compare components, and
        plan a build based on their budget.
      </p>

      <div className="cardGrid">
        <div className="card">
          <h3>Learn Parts</h3>
          <p>Understand what CPUs, GPUs, and RAM do in a computer.</p>
        </div>

        <div className="card">
          <h3>Plan Budget</h3>
          <p>Track your estimated costs before buying parts.</p>
        </div>

        <div className="card">
          <h3>Build Smarter</h3>
          <p>Make better choices before spending money on a PC.</p>
        </div>
      </div>
    </section>
  );
}