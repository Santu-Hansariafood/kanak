'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Location {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  isHeadquarters: boolean;
}

const Locations: React.FC = () => {
  const { t } = useTranslation('locations');

  const locations: Location[] = [
    {
      city: t('locations.list.newyork.city'),
      country: t('locations.list.newyork.country'),
      address: t('locations.list.newyork.address'),
      phone: '+1 (555) 123-4567',
      email: 'newyork@vitara.com',
      hours: t('locations.list.newyork.hours'),
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isHeadquarters: true,
    },
    {
      city: t('locations.list.london.city'),
      country: t('locations.list.london.country'),
      address: t('locations.list.london.address'),
      phone: '+44 20 7123 4567',
      email: 'london@vitara.com',
      hours: t('locations.list.london.hours'),
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isHeadquarters: false,
    },
    {
      city: t('locations.list.tokyo.city'),
      country: t('locations.list.tokyo.country'),
      address: t('locations.list.tokyo.address'),
      phone: '+81 3-1234-5678',
      email: 'tokyo@vitara.com',
      hours: t('locations.list.tokyo.hours'),
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isHeadquarters: false,
    },
    {
      city: t('locations.list.sydney.city'),
      country: t('locations.list.sydney.country'),
      address: t('locations.list.sydney.address'),
      phone: '+61 2 9123 4567',
      email: 'sydney@vitara.com',
      hours: t('locations.list.sydney.hours'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      isHeadquarters: false,
    },
  ];

  return (
    <div className="pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{t('locations.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('locations.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={location.image}
                    alt={`${location.city} office`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {location.isHeadquarters && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {t('locations.headquarters')}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {location.city}, {location.country}
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-teal-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-600">{location.address}</p>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <a href={`mailto:${location.email}`} className="text-gray-600 hover:text-teal-600 transition-colors">
                        {location.email}
                      </a>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 bg-gradient-to-r from-teal-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {t('locations.getDirections')}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
