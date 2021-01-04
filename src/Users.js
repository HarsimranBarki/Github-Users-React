import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  };
  if (loading === false) {
    return (
      <div className="flex justify-between m-10 flex-wrap">
        {users.map((user) => {
          const { id, login, html_url, type, avatar_url, repos_url } = user;
          return (
            <div
              className="shadow md p-4 rounded w-56 mb-10 bg-white "
              key={id}
            >
              <div className="flex items-center">
                {" "}
                <img src={avatar_url} alt="" className="rounded-full w-16" />
                <div className="ml-4">
                  <h1 className="font-semibold">{login}</h1>
                  <p className="font-sm text-gray-700">{type}</p>
                </div>
              </div>

              <a
                href={html_url}
                className="text-blue-100 cursor-pointer bg-blue-800 px-2 py-1 rounded mt-4 block text-sm text-center transition hover:bg-blue-700 "
              >
                My GitHub
              </a>
              <a
                href={repos_url}
                className="text-green-100 cursor-pointer bg-green-800 px-2 py-1 rounded mt-2 block text-sm text-center transition hover:bg-green-700 "
              >
                My Repos
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div className="text-4xl text-center mt-4">Loading</div>;
  }
}

export default Users;
