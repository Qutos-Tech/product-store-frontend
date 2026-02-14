import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-dark mb-2">
            About Sethji
          </h1>
          <div className="h-1 w-12 rounded-full bg-primary" />
        </div>

        {/* Content */}
        <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            <span className="font-semibold text-dark">Sethji</span> is your
            friendly neighbourhood general store, now available online. We
            bring everyday essentials — from fresh fruits and groceries to
            dairy, snacks, and household items — right to your doorstep.
          </p>
          <p>
            Inspired by the trusted local <em>kirana</em> store that everyone
            grew up with, Sethji combines the warmth of a neighbourhood
            shop with the convenience of quick commerce.
          </p>
          <p>
            Our mission is simple: <span className="font-semibold text-dark">
            delivered fast, priced fair.</span> We source directly from local
            vendors and farms to ensure freshness and support local
            communities.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-200 my-6">
            {[
              { value: "10,000+", label: "Happy Customers" },
              { value: "500+",    label: "Products" },
              { value: "30 min",  label: "Avg. Delivery" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-xl sm:text-2xl font-extrabold text-primary">
                  {value}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>

          <p>
            We are a team of passionate builders from across India who believe
            technology can make daily life simpler for everyone — not just
            those in big cities.
          </p>
        </div>
      </main>

      {/* FS-05: Footer visible, no overlap */}
      <Footer />
    </div>
  );
};

export default AboutPage;