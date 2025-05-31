// /app/salon-site-features/page.tsx

import Image from 'next/image';

export default function SalonSiteFeatures() {
  return (
    <main className="bg-gray-50 dark:bg-backgroundalt max-w-5xl mx-auto px-4 pt-12 pb-16 mb-6 rounded-xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">El Reno Nail Spa</h1>
      </header>

      {/* CRUD Explanation */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">What is CRUD?</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          CRUD stands for <strong>Create, Read, Update, Delete</strong>. It’s a core concept in web
          development that allows website owners to manage their content directly from an admin
          dashboard.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          For the El Reno Nail Spa website, this means the owner can easily:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li><strong>Create</strong> new services and add them to the menu</li>
          <li><strong>Read</strong> existing services and gallery images</li>
          <li><strong>Update</strong> service descriptions, prices, and images</li>
          <li><strong>Delete</strong> outdated content to keep things fresh</li>
        </ul>
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This empowers the salon owner to keep their website up to date and tailored to their
          business needs—<strong>no coding</strong> required.
        </p>
      </section>

      {/* Screenshots */}
      <section className="mb-6 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center">Gallery & Admin Features</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Image
            src="/erns/home.png"
            alt="Salon homepage screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
          />
          <Image
            src="/erns/gallery.png"
            alt="Salon gallery page screenshot"
            width={600}
            height={400}
            className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
          />

          <div className="col-span-1 sm:col-span-2 space-y-4 mt-4">
            <h3 className="text-xl font-semibold">Simple Booking Form</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Automatic</strong> confirmation emails sent to clients.
            </p>
            <Image
              src="/erns/simplebook.png"
              alt="Salon simple booking form"
              width={600}
              height={400}
              className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
            />
            <Image
              src="/erns/confirmation.png"
              alt="Confirmation email"
              width={600}
              height={400}
              className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
            />

            <h3 className="text-xl font-semibold mt-6">Admin Dashboard</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Admin</strong> dashboard for easy CRUD management.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <Image
                src="/erns/dashboard1.png"
                alt="Salon admin dashboard screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
              />
              <Image
                src="/erns/dashboard2.png"
                alt="Salon admin dashboard screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
              />
              <Image
                src="/erns/dashboard3.png"
                alt="Salon admin dashboard screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
              />
              <Image
                src="/erns/dashboard4.png"
                alt="Salon admin dashboard screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow border border-gray-200 dark:border-gray-700"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
