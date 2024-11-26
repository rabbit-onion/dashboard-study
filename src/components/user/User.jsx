'use client';

import React from 'react';
import { UserProvider, useUser } from '@/contexts/UserContext';

const User = () => {
  return (
    <UserProvider>
      <div>
        <h2>사용자 정보</h2>
        <UserProfile />
        {/* <hr />
      <UserProfile userData={userData} /> */}
        <hr />
        <UserProfile />
      </div>
    </UserProvider>
  );
};

const UserProfile = () => {
  // 사용
  const { name, email } = useUser();

  return (
    <div>
      <dl>
        <dt>이름</dt>
        <dd>{name}</dd>
      </dl>
      <dl>
        <dt>이메일</dt>
        <dd>{email}</dd>
      </dl>
      <UserInfo />
    </div>
  );
};

const UserInfo = () => {
  // 사용
  const { age, location } = useUser();

  return (
    <>
      <dl>
        <dt>나이</dt>
        <dd>{age}</dd>
      </dl>
      <dl>
        <dt>주소</dt>
        <dd>{location}</dd>
      </dl>
    </>
  );
};

export default User;
