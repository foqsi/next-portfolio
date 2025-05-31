// /app/get-in-touch/page.tsx

'use client';

import { useState } from 'react';

export default function GetInTouchPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    foregroundColor: '',
    backgroundColor: '',
    buttonColor: '',
    adminPanel: false,
    banner: false,
    gallery: false,
    services: false,
    serviceList: '',
    additionalNotes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;

    // Safely handle checkboxes
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch('/api/send-contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      alert('Thank you! I will review your request and get back to you soon.')
    } else {
      alert('Something went wrong. Please try again later.')
    }
  }


  return (
    <main className="bg-gray-50 dark:bg-backgroundalt max-w-3xl mx-auto px-4 py-12">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Request Your Website</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Please fill out this form with the features you want for your custom website.
        </p>
      </header>

      {/* Important Info */}
      <section className="mb-8 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Important Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Each website will take about <strong>one week</strong> from request to delivery, regardless of features selected.</li>
          <li>Each site comes with <strong>6 months of support</strong> at no extra charge from the date you receive it.</li>
          <li>Base price is a <strong>one-time purchase of $200 USD</strong>.</li>
          <li>You will also need to pay an <strong>annual fee for domain renewal</strong>. This can range from $10 to thousands of dollars per year.</li>
          <li>I can work with you to <strong>find a cheaper domain</strong> if needed.</li>
          <li>You can request a higher level of detail or fancier features for an <strong>extra cost</strong> depending on request.</li>
        </ul>

        {/* Example link */}
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Want to see an example?{' '}
          <a
            href="/projects/salon"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
          >
            View an example
          </a>
          .
        </p>
      </section>


      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6 space-y-6 mb-8">
        {/* Basic Info */}
        <div>
          <label className="block font-medium mb-1" htmlFor="name">
            Your Name
          </label>
          <input
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1" htmlFor="email">
            Your Email
          </label>
          <input
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Colors */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Foreground Color */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="foregroundColor">
                Foreground Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  className="flex-shrink-0 w-10 h-10 border rounded cursor-pointer"
                  type="color"
                  name="foregroundColor"
                  id="foregroundColor"
                  value={formData.foregroundColor || '#000000'}
                  onChange={handleChange}
                />
                <input
                  className="flex-1 w-1/2 border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  type="text"
                  name="foregroundColor"
                  placeholder="#000000"
                  value={formData.foregroundColor}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Background Color */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="backgroundColor">
                Background Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  className="flex-shrink-0 w-10 h-10 border rounded cursor-pointer"
                  type="color"
                  name="backgroundColor"
                  id="backgroundColor"
                  value={formData.backgroundColor || '#ffffff'}
                  onChange={handleChange}
                />
                <input
                  className="flex-1 w-1/2 border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  type="text"
                  name="backgroundColor"
                  placeholder="#ffffff"
                  value={formData.backgroundColor}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Button Color */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="buttonColor">
                Button Color
              </label>
              <div className="flex gap-2 items-center">
                <input
                  className="flex-shrink-0 w-10 h-10 border rounded cursor-pointer"
                  type="color"
                  name="buttonColor"
                  id="buttonColor"
                  value={formData.buttonColor || '#007bff'}
                  onChange={handleChange}
                />
                <input
                  className="flex-1 w-1/2 border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  type="text"
                  name="buttonColor"
                  placeholder="#007bff"
                  value={formData.buttonColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>


        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Features</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="adminPanel"
                checked={formData.adminPanel}
                onChange={handleChange}
              />
              Admin Panel
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="banner"
                checked={formData.banner}
                onChange={handleChange}
              />
              Banner
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="gallery"
                checked={formData.gallery}
                onChange={handleChange}
              />
              Gallery
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="services"
                checked={formData.services}
                onChange={handleChange}
              />
              Services Section
            </label>
          </div>
        </div>

        {/* Service Details */}
        {formData.services && (
          <div>
            <label className="block font-medium mb-1" htmlFor="serviceList">
              List of Services (include names, descriptions, and prices)
            </label>
            <textarea
              className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              name="serviceList"
              id="serviceList"
              rows={4}
              placeholder="e.g., Manicure - $20, Pedicure - $25, ..."
              value={formData.serviceList}
              onChange={handleChange}
            />
          </div>
        )}

        {/* Additional Notes */}
        <div>
          <label className="block font-medium mb-1" htmlFor="additionalNotes">
            Additional Notes or Features
          </label>
          <textarea
            className="w-full border rounded px-3 py-2 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            name="additionalNotes"
            id="additionalNotes"
            rows={4}
            placeholder="Any extra features or preferences you’d like me to know about..."
            value={formData.additionalNotes}
            onChange={handleChange}
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Submit Request
          </button>
        </div>
      </form>
    </main>
  );
}
