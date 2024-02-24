import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";

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

interface UserProfileProps {
  selectedUser: User;
  handleClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ selectedUser, handleClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative rounded-xl bg-green-300 p-4 shadow-2xl">
          <button className="top-10px right-10px absolute cursor-pointer" onClick={handleClose}>
            <IoMdClose />
          </button>

          <div className="flex flex-col items-center">
            <Image
              src={selectedUser.picture.thumbnail}
              className="rounded-full"
              alt="thumb"
              width={100}
              height={100}
            />

            <h1 className="pt-2 text-xl font-bold">
              {selectedUser.name.first} {selectedUser.name.last}
            </h1>
            <p className="pt-2">{selectedUser.cell}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
