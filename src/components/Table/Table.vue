<template>
    <div class="border-b border-gray-200 shadow">
        <table class="w-full">
            <Header :columns="displayColumnes"></Header>
            <Content :data="data" 
            :keys="dataKeys"
            ></Content>
        </table>
    </div>
</template>
<script>
import Header from './TableHeader.vue'
import Content from './TableContent.vue'
export default {
    components: {
        Header,
        Content
    },
    data() {
        return {
            displayColumnes: [
                {
                    name: 'ID',
                    key: 'id',
                },
                {
                    name: 'Title',
                    key: 'title',
                },
                {
                    name:'Price',
                    key:'price'
                },
                {
                    name: 'QR',
                    key: 'qr'
                },
                {
                    name: 'Created at',
                    key: 'created_at'
                },
                {
                    name: 'Phone',
                    key: 'phone'
                }
            ],
            data: [
                {
                    id: "1",
                    title: "Prod 1",
                    price: '100',
                    qr:'423423432',
                    phone:'234234234',
                    created_at:'20/10/2023'
                },
                {
                    id: "1",
                    title: "Prod 1",
                    price: '100',
                    qr:'423423432',
                    phone:'234234234',
                    created_at:'20/10/2023'
                },
                {
                    id: "1",
                    title: "Prod 1",
                    price: '100',
                    qr:'423423432',
                    phone:'234234234',
                    created_at:'20/10/2023'
                }
            ]
        }
    },
    computed:{
        dataKeys(){
            let keys = [];
                this.displayColumnes.forEach(item=>{
                    keys.push(item.key);
                })
            return keys;
        }
    },
    mounted(){
        //fetch api
    }
}
</script>