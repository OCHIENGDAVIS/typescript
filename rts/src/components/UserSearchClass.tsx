import React from 'react';

interface UserSearchClassProps {
  users: { name: string; age: number }[];
}

class UserSearchClass extends React.Component<UserSearchClass> {}

export default UserSearchClass;
