// /app/newhire-automation/page.tsx

export default function NewHireAutomation() {
  return (
    <main className="bg-gray-50 dark:bg-backgroundalt max-w-5xl mx-auto px-4 pb-16 mb-6 pt-12 rounded-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">New Hire Automation</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          A streamlined workflow to automate repetitive onboarding tasks and save countless hours of admin work.
        </p>
      </header>

      {/* Core Problem */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">The Challenge</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Onboarding a new employee involved logging into eight different admin panels and repeating the same set of tasks for each new hire:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Create an account in Admin1 and assign permission</li>
          <li>Assign permissions in Admin2 through Admin8</li>
          <li>Repeat for the next new hire</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This process was <strong>time consuming</strong> and left room for human error.
        </p>
      </section>

      {/* My Approach */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">My Approach</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Observing the repetitive nature of this task, I took the initiative to develop an automation solution. Using <strong>browser automation</strong> and careful task sequencing, I designed a workflow that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Logged into each admin panel in the correct order</li>
          <li>Created the necessary accounts and assigned permissions</li>
          <li>Moved to the next new hire seamlessly</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This reduced the repetitive workload for admins and allowed them to focus on more strategic tasks.
        </p>
      </section>

      {/* Integration */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Integration with Freshservice</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Once completed, the automated workflow was integrated into the Freshservice onboarding system. This allowed the script to run automatically whenever a new hire ticket was created, eliminating manual logins and ensuring a smooth onboarding experience.
        </p>
      </section>

      {/* Key Outcomes */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Key Outcomes</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Saved significant time in onboarding workflows</li>
          <li>Improved accuracy by reducing human error</li>
          <li>Streamlined the new hire process for better team efficiency</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          As a result, the team experienced a smoother onboarding process and had more time to support new hires effectively.
        </p>
      </section>

      {/* Final Note */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Note on the Work</h2>
        <p className="text-gray-700 dark:text-gray-300">
          While I can’t share the specifics of the script due to company ownership and confidentiality, I’m proud of taking the initiative to create an impactful solution that made a real difference for the team and improved the onboarding process through Freshservice integration.
        </p>
      </section>
    </main>
  );
}
