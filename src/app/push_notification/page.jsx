'use client';

import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState({
    push: true,
    email: false,
    sms: false,
    trainerUpdates: true,
  });

  const toggle = (key) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="px-3">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">Notifications</h1>

      {/* Notification Cards */}
      <div className="space-y-4">
        <NotificationItem
          title="Push Notifications"
          description="Receive push notifications"
          enabled={notifications.push}
          onClick={() => toggle('push')}
        />

        <NotificationItem
          title="Email Notifications"
          description="Get updates via email"
          enabled={notifications.email}
          onClick={() => toggle('email')}
        />

        <NotificationItem
          title="SMS Notifications"
          description="Receive SMS alerts"
          enabled={notifications.sms}
          onClick={() => toggle('sms')}
        />

        <NotificationItem
          title="Trainer Updates"
          description="Updates from your trainer"
          enabled={notifications.trainerUpdates}
          onClick={() => toggle('trainerUpdates')}
        />
      </div>
    </div>
  );
};

export default Notification;

/* -------------------------
   Reusable Notification Item
-------------------------- */
const NotificationItem = ({ title, description, enabled, onClick }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-500">{description}</p>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={onClick}
        className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
          enabled ? 'bg-teal-600' : 'bg-gray-300'
        }`}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            enabled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};
