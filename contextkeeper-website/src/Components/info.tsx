export function Info() {
  return (
    <>
      <section className="w-screen h-screen flex flex-col gap-8">
        <section className="w-screen h-[50vh] flex justify-center">
          <div className="w-[70%] flex justify-between">
            {/* Card 1 */}
            <div className="card w-96 bg-[#1e1e1e] card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Google Gemini</h2>
                <p>
                  Using Gemini API, the extension detects when you stop typing
                  and automatically scans your recent changes for bugs and
                  optimizations.
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card w-96 bg-[#1e1e1e] card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Eleven Labs</h2>
                <p>
                  Integrated with ElevenLabs. Instead of just red squiggly
                  lines, your editor talks to you, explaining complex issues out
                  loud.
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <section className="w-screen h-[50vh] flex justify-center">
          <div className="w-[70%] flex justify-between">
            {/* Card 1 */}
            <div className="card w-96 bg-[#1e1e1e] card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Cloudfare</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="card w-96 bg-[#1e1e1e] card-xl shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Tech Domain</h2>
                <p>best name</p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
