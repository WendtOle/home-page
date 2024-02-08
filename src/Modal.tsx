import React from "react";

export const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-50 opacity-45"
        onClick={onClose}
      />
      <div className="relative bg-white p-8 m-32 rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
};
