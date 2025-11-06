import React, { useState } from 'react';

function ProfileForm() {
  const [profile, setProfile] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  return (
    <div>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="age" onChange={handleChange} placeholder="Age" />
      <p>
        {profile.name
          ? `${profile.name} is ${profile.age || '...'} years old.`
          : 'Enter your details'}
      </p>
    </div>
  );
}

export default ProfileForm;
