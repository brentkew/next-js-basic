import Link from "next/link";
import React, { Suspense } from "react";
import { sort } from 'fast-sort';


interface IUser {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder: string;
  sortType: string;
}

const UserTable = async ({ sortOrder, sortType }: Props) => {
  const userList = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: IUser[] = await userList.json();


  let sortUser = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  if (sortType === "desc") {
    sortUser = sort(users).desc(
      sortOrder === "email" ? (user) => user.email : (user) => user.name
    );
  }


  console.log("Sort Order", sortOrder, "Sort Type", sortType);
  return (
    <div className="overflow-x-auto">
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Link href="/users/new" className="btn btn-primary">
          New User
        </Link>
      </Suspense> */}

      <Link href="/users/new" className="btn btn-primary">
        New User
      </Link>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>
              <Link
                href={{
                  pathname: "/users",
                  query: {
                    sortOrder: "name",
                    sortType:
                      sortOrder === "name" && sortType === "asc"
                        ? "desc"
                        : "asc",
                  },
                }}
              >
                Name
              </Link>
            </th>
            <th>
              <Link
                href={{
                  pathname: "/users",
                  query: {
                    sortOrder: "email",
                    sortType:
                      sortOrder === "email" && sortType === "asc"
                        ? "desc"
                        : "asc",
                  },
                }}
              >
                Email
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortUser.map((user) => (
            <tr className="bg-base-200" key={user.id}>
              <th>
                <Link href={`/users/${user.id}`}>{user.id}</Link>
              </th>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
