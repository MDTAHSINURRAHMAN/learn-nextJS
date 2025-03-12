import React from "react";

export default function ServiceDetailPage({ params }) {
  const id = params?.id;
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
    {
      _id: 4,
      service_name: "Digital Marketing",
      service_image:
        "https://images.pexels.com/photos/9837736/pexels-photo-9837736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      service_description:
        "Grow your online presence and reach more customers with our digital marketing solutions.",
    },
    {
      _id: 5,
      service_name: "Mobile App Development",
      service_image:
        "https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      service_description:
        "We develop high-quality mobile applications for Android and iOS platforms.",
    },
  ];

  const singleData = data.find((d) => d._id == id);

  // Handle case when service not found
  if (!singleData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Service Not Found
        </h2>
      </div>
    );
  } else {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <img
            src={singleData.service_image}
            alt={singleData.service_name}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {singleData.service_name}
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              {singleData.service_description}
            </p>
            <p className="text-sm text-gray-400">Service ID: {id}</p>
          </div>
        </div>
      </div>
    );
  }
}
