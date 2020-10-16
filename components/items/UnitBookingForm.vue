<template>
    <div class="px-2">
        <div id="trigger"></div>
        <div id="bookingForm" class="border border-gray-400 rounded-lg shadow-2xl px-6 py-4">
            <div class="flex flex-col">
                <div class="text-xl py-6">
                    RM180 <span class="text-sm font-light">/ night</span>
                </div>
                <div class="grid grid-rows-2 rounded-lg border border-gray-600 my-4">
                    <div class="grid grid-cols-2">
                        <div class="flex flex-col py-2 px-3 border-r border-gray-600">
                            <div class="text-xs font-semibold tracking-wide">CHECK-IN</div>
                            <input type="date" class="border-none focus:border-none active:border-none text-sm py-1 font-light" v-model="dateFrom"/>
                        </div>
                        <div class="flex flex-col py-2 px-3">
                            <div class="text-xs font-semibold tracking-wide">CHECK-OUT</div>
                            <input type="date" class="border-none focus:border-none active:border-none text-sm py-1 font-light" v-model="dateTo"/>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-gray-600">
                        <div class="flex flex-col py-2 px-3 w-full">
                            <div class="text-xs font-medium">GUESTS</div>
                            <select class="border-none focus:outline-none active:outline-none py-1"
                                v-model="guest"
                                @select="selectGuest(guest)"
                                >
                                <option disabled value="" selected>Please select one</option>
                                <option
                                    v-for="guest in dropDown" :key="guest" :value="guest">
                                        {{ guest }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div id="cancellationPolicies" class="flex flex-col my-4">
                    <div class="text-xs font-medium">CANCELLATION POLICIES</div>
                    <div class="grid grid-rows-2 rounded-lg border border-gray-600">
                        <div class="flex items-center justify-between border-b border-gray-600">
                            <div class="flex flex-col py-2 px-3">
                                <div class="py-1 font-light">
                                    Non-refundable · RM1,080 total {{policy1}}
                                </div>
                                <div class="text-xs text-gray-700">
                                    Cancel before 3:00 PM on Oct 16 and only get a refund of the cleaning fee.
                                </div>
                            </div>
                            <div class="px-4">
                                <input type="radio" class="form-radio h-6 w-6 text-gray-600" v-model="policy1" @click="policy2 = false; policy1=true"/>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col py-2 px-3">
                                <div class="py-1 font-light">
                                    Refundable · RM1,090 total {{policy2}}
                                </div>
                                <div class="text-xs text-gray-700">
                                    Free cancellation until Oct 11. After that, cancel before 3:00 PM on Oct 16 and get a 50% refund, minus the first night and service fee.
                                </div>
                            </div>
                            <div class="px-4">
                                <input type="radio" class="form-radio h-6 w-6 text-gray-600" v-model="policy2" @click="policy1 = false; policy2=true"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="transition-all duration-500 ease-in-out text-white bg-red-600 py-3 px-4 rounded-lg hover:bg-red-700" @click="reserve">Reserve</button>
                
                <div class="border-b border-gray-400 py-4 text-center font-light text-sm">
                    You won't be charged yet
                </div>
                <div class="flex items-center justify-between pt-6 pb-4">
                    <div class="text-lg font-medium">Total</div>
                    <div class="text-lg font-medium">RM1,080</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dateFrom: "",
            dateTo: "",
            guest: "",
            dropDown : [
                "2 Guest",
                "3 Guest",
                "4 Guest",
                "5 Guest",
                "6 Guest",
                "7 Guest",
                "8 Guest",
                "9 Guest",
                "10 Guest",
                "11 Guest",
                "12 Guest",
                "13 Guest",
            ],
            policy1: false,
            policy2: false,
            firestore: null
        }
    },
    methods: {
        selectGuest(guest) {
        },
        reserve(){
        }
    },
    mounted(){
    }
}
</script>