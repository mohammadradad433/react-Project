export default function About() {
  return (
    <div className="px-6 py-10 space-y-16 text-gray-800 dark:text-gray-100">

      {/* Intro */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          About Our Platform
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          This is an EdTech SaaS platform designed to help users manage
          and explore courses.
        </p>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900 dark:text-white">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Mohammad
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Frontend Developer
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Ahmad
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Backend Developer
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="font-bold text-gray-900 dark:text-white">
              Sara
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              UI Designer
            </p>
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
          Our Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          We aim to simplify learning and provide a clean dashboard
          for managing educational content efficiently.
        </p>
      </section>

    </div>
  );
}