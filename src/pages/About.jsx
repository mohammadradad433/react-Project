export default function About() {
  return (
    <div className="px-6 space-y-16">

      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          About Our Platform
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          This is an EdTech SaaS platform designed to help users manage
          and explore courses.
        </p>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Mohammad</h3>
            <p className="text-gray-500">Frontend Developer</p>
          </div>

          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Ahmad</h3>
            <p className="text-gray-500">Backend Developer</p>
          </div>

          <div className="bg-gray-100 p-6 rounded">
            <h3 className="font-bold">Sara</h3>
            <p className="text-gray-500">UI Designer</p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Our Mission
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          We aim to simplify learning and provide a clean dashboard
          for managing educational content efficiently.
        </p>
      </section>

    </div>
  );
}