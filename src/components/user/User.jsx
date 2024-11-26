'use client';

import React, { createContext, useContext } from 'react';

// 생성
const UserContext = createContext();

const User = () => {
  const userData = {
    name: '손승완',
    email: 'email@naver.com',
    age: '31',
    location: '서울특별시 서초구',
  };

  return (
    // 공급
    <UserContext.Provider value={userData}>
      <div>
        <h2>사용자 정보</h2>
        <UserProfile />
        {/* <hr />
      <UserProfile userData={userData} /> */}
        <hr />
        <UserProfile />
      </div>
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  // 사용
  const { name, email, age, location } = useContext(UserContext);

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
      <UserInfo age={age} location={location} />
    </div>
  );
};

const UserInfo = () => {
  // 사용
  const { age, location } = useContext(UserContext);

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
