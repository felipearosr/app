<script setup>
import PreviousMap from 'postcss/lib/previous-map';


definePageMeta({
  middleware: 'auth'
})

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const prisma = new PrismaClient()

const products = await prisma.product.findMany({
})
</script>

<template>
  <div>
    <div class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5">
      <SidebarLeft :user="user" class="hidden md:block xs-col-span-1 xl:col-span-2 border-white bg-blue-500" />
      <div class="col-span-12 md:col-span-8 xl:col-span-10 bg-red-500 border-white">
        <h1>Text</h1>
        <table class="min-w-full divide-y divide-gray-100 shadow-sm border-gray-200 border rounded-md">
          <thead class="rounded-md">
            <tr>
              <th scope="col" class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">Id</th>
              <th scope="col" class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">Product Id</th>
              <th scope="col" class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">Warehouse Id</th>
              <th scope="col" class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">Quantity</th>
              <th scope="col" class="px-3 py-2 font-semibold text-left bg-gray-100 border-b">Created by</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-100">
        <tr>
            <td class="px-3 py-2 whitespace-no-wrap">{{ products.id }} </td>
            <td class="px-3 py-2 whitespace-no-wrap">ID producto</td>
            <td class="px-3 py-2 whitespace-no-wrap">ID bodega</td>
            <td class="px-3 py-2 whitespace-no-wrap">Cantidad</td>
            <td class="px-3 py-2 whitespace-no-wrap">Fecha registro</td>
        </tr>
        <tr>
            <td class="px-3 py-2 whitespace-no-wrap">ID </td>
            <td class="px-3 py-2 whitespace-no-wrap">ID producto</td>
            <td class="px-3 py-2 whitespace-no-wrap">ID bodega</td>
            <td class="px-3 py-2 whitespace-no-wrap">Cantidad</td>
            <td class="px-3 py-2 whitespace-no-wrap">Fecha registro</td>
        </tr>
        <tr>
            <td class="px-3 py-2 whitespace-no-wrap">ID </td>
            <td class="px-3 py-2 whitespace-no-wrap">ID producto</td>
            <td class="px-3 py-2 whitespace-no-wrap">ID bodega</td>
            <td class="px-3 py-2 whitespace-no-wrap">Cantidad</td>
            <td class="px-3 py-2 whitespace-no-wrap">Fecha registro</td>
        </tr>
        <tr>
            <td class="px-3 py-2 whitespace-no-wrap">ID </td>
            <td class="px-3 py-2 whitespace-no-wrap">ID producto</td>
            <td class="px-3 py-2 whitespace-no-wrap">ID bodega</td>
            <td class="px-3 py-2 whitespace-no-wrap">Cantidad</td>
            <td class="px-3 py-2 whitespace-no-wrap">Fecha registro</td>
        </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
