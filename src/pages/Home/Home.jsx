import React from "react";
import { useState } from "react";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  mobile: "123-456-7890",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const borrowedBooks = [
  { id: 1, title: "Book One", author: "Author One", dateBorrowed: "2024-01-01" },
  { id: 2, title: "Book Two", author: "Author Two", dateBorrowed: "2024-02-01" },
  { id: 2, title: "Book Two", author: "Author Two", dateBorrowed: "2024-02-01" },
  { id: 4, title: "Book Two", author: "Author Two", dateBorrowed: "2024-02-01" },
  // Add more books here
];

const newBooks = [
  { id: 1, title: "New Book One", author: "New Author One" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 2, title: "New Book Two", author: "New Author Two" },
  { id: 3, title: "New Book Two", author: "New Author Two" },
  { id: 4, title: "New Book Two", author: "New Author Two" },
  // Add more new books here
];

const trendingBooks = [
  { id: 1, title: "Trending Book One", author: "Trending Author One" },
  { id: 2, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 3, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  { id: 4, title: "Trending Book Two", author: "Trending Author Two" },
  // Add more trending books here
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  React.useEffect(() => {
    document.title = "Dashboard";
  });

  return (
    <>
      <div className="flex h-full flex-col">
        <div className="flex min-h-0 flex-1 overflow-hidden">
          <main className="min-w-0 flex-1 border-t border-gray-200 lg:flex">
            <section aria-labelledby="primary-heading" className="flex h-full min-w-0 flex-1 flex-col overflow-y-auto lg:order-last p-4">
              <h1 id="primary-heading" className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <div className="mt-6 flex flex-row space-x-4">
                {/* Left Section */}
                <div className="w-1/2">
                  <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                    <img className="h-32 w-32 rounded-full" src={user.imageUrl} alt="" />
                    <h2 className="mt-4 text-xl font-semibold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.mobile}</p>
                  </div>
                </div>
                {/* Right Section */}
                <div className="w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-medium text-gray-900">Real-time Stats of Books Borrowed</h3>
                    <ul className="mt-4 space-y-2 overflow-auto max-h-96">
                      {borrowedBooks.map((book) => (
                        <li key={book.id} className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                          <div>
                            <p className="text-sm font-medium text-gray-900">{book.title}</p>
                            <p className="text-sm text-gray-600">{book.author}</p>
                          </div>
                          <p className="text-sm text-gray-600">{book.dateBorrowed}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              {/* New Arrivals and Trending Books Section */}
              <div className="mt-6 flex flex-row space-x-4">
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900">New Arrivals</h3>
                  <ul className="mt-4 space-y-2 overflow-auto max-h-96">
                    {newBooks.map((book) => (
                      <li key={book.id} className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{book.title}</p>
                          <p className="text-sm text-gray-600">{book.author}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-medium text-gray-900">Trending Books</h3>
                  <ul className="mt-4 space-y-2 overflow-auto max-h-96">
                    {trendingBooks.map((book) => (
                      <li key={book.id} className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-sm">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{book.title}</p>
                          <p className="text-sm text-gray-600">{book.author}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
