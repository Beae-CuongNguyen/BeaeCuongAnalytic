<template>
    <thead class="bg-gray-50">
        <tr>
            <th class="px-6 py-2 text-xs text-gray-500" v-for="(item,index) in columns" :key="index">
                {{ item.name }}
            </th>
        </tr>
    </thead>
</template>
<script>
export default{
    props:{
        columns:{
            type:Array,
            default:[]
        }
    }
}
</script>