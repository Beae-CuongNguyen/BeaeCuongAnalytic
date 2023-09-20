<template>
    <tbody class="bg-white">
        <tr class="whitespace-nowrap text-center" v-for="(item,index) in data" :key="index">
            <td class="px-6 py-4 text-sm text-gray-500" v-for="key in keys">
                {{ item[key] }}
            </td>
            <!-- <td class="px-6 py-4">
                <div class="text-sm text-gray-900">
                    {{ item.title }}
                </div>
            </td>
            <td class="px-6 py-4">
                <div class="text-sm text-gray-500">{{ item.price }}</div>
            </td>
            <td class="px-6 py-4 text-sm text-gray-500">
                {{  item.qr  }}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="px-4 py-1 text-sm text-white bg-blue-400 rounded">Edit</a>
                {{ item.phone }}
            </td>
            <td class="px-6 py-4">
                <a href="#" class="px-4 py-1 text-sm text-white bg-red-400 rounded">Delete</a>
                {{ item.created_at }}
            </td> -->
        </tr>
    </tbody>
</template>
<script>
export default{
    props:{
        data:{
            type:Array,
            default:[]
        },
        keys:{
            type:Array,
            default:[]
        }
    },
}
</script>