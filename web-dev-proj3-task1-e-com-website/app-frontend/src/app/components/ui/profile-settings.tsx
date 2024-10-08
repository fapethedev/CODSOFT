'use client'

import { useState } from 'react';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { name: 'General', id: 'general' },
    { name: 'Security', id: 'security' },
    { name: 'Notifications', id: 'notifications' },
    { name: 'Plan', id: 'plan' },
    { name: 'Billing', id: 'billing' },
    { name: 'Team members', id: 'team' },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex">
        <div className="w-1/4 border-r pr-4">
          <ul className="space-y-4">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`cursor-pointer p-2 rounded-md ${
                  activeTab === tab.id
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-gray-600'
                }`}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-3/4 pl-8">
          {activeTab === 'general' && <GeneralSettings />}
          {/* Vous pouvez ajouter les composants pour les autres sections ici */}
        </div>
      </div>
    </div>
  );
};

const GeneralSettings = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Profile</h2>
        <p className="text-gray-600">
          This information will be displayed publicly so be careful what you
          share.
        </p>
        <div className="space-y-4">
          <ProfileField label="Full name" value="Tom Cook" />
          <ProfileField label="Email address" value="tom.cook@example.com" />
          <ProfileField label="Title" value="Human Resources Manager" />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Bank accounts</h2>
        <p className="text-gray-600">Connect bank accounts to your account.</p>
        <div className="space-y-2">
          <ProfileField label="TD Canada Trust" value="" />
          <ProfileField label="Royal Bank of Canada" value="" />
          <button className="text-blue-600">+ Add another bank</button>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Integrations</h2>
        <p className="text-gray-600">Connect applications to your account.</p>
        <div className="space-y-2">
          <ProfileField label="QuickBooks" value="" />
          <button className="text-blue-600">+ Add another application</button>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }: {label: string, value: string}) => (
  <div className="flex justify-between items-center border-b pb-2">
    <div>
      <p className="text-gray-800 font-medium">{label}</p>
      {value && <p className="text-gray-500">{value}</p>}
    </div>
    <button className="text-blue-600 font-semibold">Update</button>
  </div>
);

export default ProfileSettings;
