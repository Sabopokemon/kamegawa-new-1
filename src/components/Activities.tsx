import React from 'react';

const Activities: React.FC = () => {
  const activities = [
    {
      title: '餅つき大会への参加',
      titleEn: 'Participating in the Mochi-Pounding Festival',
      image: 'https://images.unsplash.com/photo-1528844571273-5dd736d68231?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
    {
      title: '亀の甲お祭りガーデンの開催',
      titleEn: 'Hosting the Kame no Ko Festival Garden',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
    {
      title: '漁船クルージングの企画',
      titleEn: 'Organizing a Fishing Boat Cruise',
      image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80',
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="block text-gray-800">ACTIVITIES</span>
          <span className="block text-sm text-gray-600 mt-2">地域と共に創る、亀川の多彩な挑戦</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div
                className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${activity.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{activity.title}</h3>
                <p className="text-sm text-gray-200">{activity.titleEn}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;