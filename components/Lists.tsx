"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";
import { UserProfile } from "./index";
// import { UserProfile } from "./index";

interface User {
  name: {
    first: string;
    last: string;
  };
  cell: string;
  picture: {
    thumbnail: string;
  };
}

interface SearchQueryProps {
  searchQuery: string;
}

const Lists: React.FC<SearchQueryProps> = ({ searchQuery }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=20&inc=name,picture,id,cell"
      );
      const data = await response.json();
      setUsers(data.results);
    };

    getAllUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      setLoading(false);
    }
  }, [users]);

  const refreshData = users.filter((item) => {
    const { first, last } = item.name;
    return first.includes(searchQuery) || last.includes(searchQuery);
  });

  const handleUserData = (data: User) => {
    setSelectedUser(data);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (loading) {
    const skeletonElements = [];
    for (let index = 0; index < refreshData.length; index++) {
      skeletonElements.push(
        <div className="mt-3 px-4" key={index}>
          <div className="flex items-center space-x-4 ">
            <Skeleton className="h-[50px] w-[51px] rounded-full bg-slate-300" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-[250px] bg-slate-300" />
              <Skeleton className="mt-2 h-4 w-[200px] bg-slate-300" />
            </div>
          </div>
        </div>
      );
    }
    return skeletonElements;
  }

  if (refreshData.length <= 0) {
    return (
      <div className="mt-3 px-4">
        <div className="flex items-center space-x-4 ">
          <Skeleton className="h-[50px] w-[51px] rounded-full bg-slate-300" />
          <div className="space-y-2">
            <h1 className="text-xl">No Data Found by: {searchQuery}</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {refreshData.map((user, ind) => {
        return (
          <div
            onClick={() => handleUserData(user)}
            className="mt-3 flex cursor-pointer items-center
      space-x-4 px-4"
            key={ind}
          >
            <Image
              src={user.picture.thumbnail}
              className="rounded-full"
              alt="thumb"
              width={50}
              height={50}
            />
            <div className="space-y-2">
              <p>
                {user.name.first} {user.name.last}
              </p>
              <p>{user.cell}</p>
            </div>
          </div>
        );
      })}
      {isOpen && selectedUser && (
        <UserProfile selectedUser={selectedUser} handleClose={handleClose} />
      )}
    </>
  );
};

export default Lists;
