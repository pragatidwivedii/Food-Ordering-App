const ContactUs = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-orange-600 mb-2">Let's Connect</h1>
      <p className="text-gray-600 text-lg mb-10">
        Got a role, project, or feedback in mind? I'd love to hear from you.
      </p>

      <div className="bg-orange-50 rounded-lg p-8 space-y-4">
        <p className="text-gray-700">
          📧{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-orange-600 font-medium hover:underline"
          >
            pragatihripra@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          💼{" "}
          <a
            href="https://www.linkedin.com/in/pragati-dwivedi-00abb6360/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            https://www.linkedin.com/in/pragati-dwivedi-00abb6360/
          </a>
        </p>
        <p className="text-gray-700">
          💻{" "}
          <a
            href="https://github.com/pragatidwivedii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 font-medium hover:underline"
          >
            https://github.com/pragatidwivedii
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;