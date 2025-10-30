'use client';
import React, { useState, useEffect } from 'react';
import "@/lib/i18n/client";
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
  const { t } = useTranslation("cookie");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6">
            <div className="flex items-start space-x-4">
              {/* Cookie Icon */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Text & Actions */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t('cookie.title', 'Cookie Preferences')}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {t(
                    'cookie.message',
                    'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.'
                  )}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAccept}
                    className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-500 text-white px-4 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                  >
                    <Check className="w-4 h-4" />
                    <span>{t('cookie.accept', 'Accept All')}</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleDecline}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2.5 rounded-lg font-medium text-sm flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                    <span>{t('cookie.decline', 'Decline')}</span>
                  </motion.button>
                </div>

                <button className="text-xs text-teal-600 hover:text-teal-700 mt-3 font-medium">
                  {t('cookie.manage', 'Manage Preferences')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
