"use client";
import React from "react";

export default function CardTestimonial({ author, username, avatar, quote, hashtag }) {
 
  return (
    <>
      <div className="overflow-hidden bg-white rounded-md">
        <div className="px-5 py-6">
          <div className="flex items-center justify-between">
            {avatar ? (
              <img
                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                src={avatar}
                alt={`Avatar of ${author}`}
              />
            ) : (
              <img
                className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
                src="/assets/img/user/userDefaul.png"
                alt="Default Avatar"
              />
            )}
            <div className="min-w-0 ml-3 mr-auto">
              <p className="text-base font-semibold text-black truncate">
                {author}
              </p>
              <p className="text-sm text-gray-600 truncate">{username}</p>
            </div>
          </div>
          <blockquote className="mt-5">
            <p className="text-base text-gray-800">
              {quote}
              <span className="block text-sky-500">{hashtag}</span>
            </p>
          </blockquote>
        </div>
      </div>
    </>
  );
}
