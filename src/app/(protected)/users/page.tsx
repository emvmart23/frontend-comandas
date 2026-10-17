import React from "react";
import UserActions from "./_components/UserActions";

export default function page() {
  return (
    <section className="max-w-[80%] mx-auto flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Usuarios</h2>
      <UserActions />
      {/* <UserDataTable data={data} columns={columns} /> */}
    </section>
  );
}
