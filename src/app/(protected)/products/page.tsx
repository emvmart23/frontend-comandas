import React from 'react'
import { DataTable } from './_components/DataTable'
import { columns } from './_components/Columns'
import ProductActions from './_components/ProductActions';

export const metadata = {
  title: "Productos",
};

async function getData() {
  return [
    {
      id: 2000,
      name: "Product 1",
      price: 10.99,
      status: "success",
      categoryId: 1,
    },
    {
      id: 2001,
      name: "Product 2",
      price: 19.99,
      status: "success",
      categoryId: 2,
    },
    {
      id: 2002,
      name: "Product 3",
      price: 5.99,
      status: "success",
      categoryId: 1,
    },
    {
      id: 2003,
      name: "Product 4",
      price: 15.99,
      status: "success",
      categoryId: 3,
    },
    {
      id: 2004,
      name: "Product 5",
      price: 12.99,
      status: "success",
      categoryId: 2,
    },
    {
      id: 2005,
      name: "Product 6", 
      price: 8.99,
      status: "success",
      categoryId: 1,
    },
    {
      id: 2006,
      name: "Product 72",
      price: 14.99,
      status: "success",
      categoryId: 3,
    },
    {
      id: 2003,
      name: "Product 78",
      price: 14.99,
      status: "success",
      categoryId: 3,
    },
    {
      id: 2009,
      name: "Product 67",
      price: 14.99,
      status: "success",
      categoryId: 3,
    },
    {
      id: 2023,
      name: "Product 37",
      price: 14.99,
      status: "success",
      categoryId: 3,
    },
    {
      id: 2054,
      name: "Product 54",
      price: 14.99,
      status: "success",
      categoryId: 3,
    },
  ]
 }

export default async function Products() {
  const data = await getData()
  return (
    <section className="max-w-[80%] mx-auto flex flex-col gap-8">
      <h2 className="text-3xl font-bold">Productos</h2>
      <ProductActions/>
      <DataTable data={data} columns={columns} />
    </section>
  )
}
