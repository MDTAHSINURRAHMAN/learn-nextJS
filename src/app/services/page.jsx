import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: 1,
      service_name: "Web Development",
      service_image:
        "https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      service_description:
        "We offer custom website development services tailored to your business needs.",
    },
    {
      _id: 2,
      service_name: "Graphic Design",
      service_image:
        "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      service_description:
        "Professional graphic design services including logos, banners, and branding materials.",
    },
    {
      _id: 3,
      service_name: "SEO Optimization",
      service_image:
        "https://images.pexels.com/photos/4440794/pexels-photo-4440794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      service_description:
        "Improve your website ranking on search engines with our expert SEO strategies.",
    },
    // {
    //   _id: 4,
    //   service_name: "Digital Marketing",
    //   service_image:
    //     "https://images.pexels.com/photos/9837736/pexels-photo-9837736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   service_description:
    //     "Grow your online presence and reach more customers with our digital marketing solutions.",
    // },
    // {
    //   _id: 5,
    //   service_name: "Mobile App Development",
    //   service_image:
    //     "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   service_description:
    //     "We develop high-quality mobile applications for Android and iOS platforms.",
    // },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((d) => (
          <div
            key={d._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <Link href={`/services/${d._id}`}>
              <div>
                <img
                  src={d.service_image}
                  alt={d.service_name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {d.service_name}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {d.service_description.substring(0, 80)}...
                  </p>
                  <p className="mt-4 text-black hover:underline text-sm">
                    View Details
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
