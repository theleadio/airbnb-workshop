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
                            <div class="py-1 font-light">10/16/2020</div>
                        </div>
                        <div class="flex flex-col py-2 px-3">
                            <div class="text-xs font-semibold tracking-wide">CHECK-OUT</div>
                            <div class="py-1 font-light">17/16/2020</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-between border-t border-gray-600">
                        <div class="flex flex-col py-2 px-3">
                            <div class="text-xs font-medium">GUESTS</div>
                            <div class="font-light">2 guests</div>
                        </div>
                        <div class="py-2 px-3">
                            <i class="fas fa-caret-down text-2xl"></i>
                        </div>
                    </div>
                </div>
                <div id="cancellationPolicies" class="flex flex-col my-4">
                    <div class="text-xs font-medium">CANCELLATION POLICIES</div>
                    <div class="grid grid-rows-2 rounded-lg border border-gray-600">
                        <div class="flex items-center justify-between border-b border-gray-600">
                            <div class="flex flex-col py-2 px-3">
                                <div class="py-1 font-light">
                                    Non-refundable · RM1,080 total
                                </div>
                                <div class="text-xs text-gray-700">
                                    Cancel before 3:00 PM on Oct 16 and only get a refund of the cleaning fee.
                                </div>
                            </div>
                            <div class="px-4">
                                <input type="radio" class="form-radio h-6 w-6 text-gray-600"/>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col py-2 px-3">
                                <div class="py-1 font-light">
                                    Refundable · RM1,090 total
                                </div>
                                <div class="text-xs text-gray-700">
                                    Free cancellation until Oct 11. After that, cancel before 3:00 PM on Oct 16 and get a 50% refund, minus the first night and service fee.
                                </div>
                            </div>
                            <div class="px-4">
                                <input type="radio" class="form-radio h-6 w-6 text-gray-600"/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="transition-all duration-500 ease-in-out text-white bg-red-600 py-3 px-4 rounded-lg hover:bg-red-700">Reserve</button>
                
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