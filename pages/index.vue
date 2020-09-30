<template>
  <div class="h-full w-full pb-10">
    <!-- 
      Navigation bar
     -->
    <Navigation>
      <template v-slot:widget-1>
        <Logo class="h-16 mt-1"/>
      </template>
      <template v-slot:widget-2>
        <SearchInput />
      </template>
      <template v-slot:widget-3>
        <UserMenu />
      </template>
    </Navigation>

    <!-- 
      Location Name & State 
     -->
    <LocationHeader>
      <template v-slot:name>
          Octagon#4 2BR/6pax, Stay in the heart of Ipoh !
      </template>
      <template v-slot:location>
          Ipoh, Negeri Perak, Malaysia
      </template>
    </LocationHeader>
    
    <!-- 
      Display image of unit
     -->
     
    <DisplayImg>
        <template v-slot:main>
          <img class="object-cover rounded-l-lg p-1 h-full" src="https://images.pexels.com/photos/1267438/pexels-photo-1267438.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </template>
        <template v-slot:sub>
          <img class="object-cover p-1 h-84 w-full" src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <img class="object-cover rounded-tr-lg p-1 h-84 w-full" src="https://images.pexels.com/photos/769585/pexels-photo-769585.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <img class="object-cover p-1 h-84 w-full" src="https://images.pexels.com/photos/3356416/pexels-photo-3356416.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          <img class="object-cover rounded-br-lg p-1 h-84 w-full" src="https://images.pexels.com/photos/2565222/pexels-photo-2565222.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
        </template>
    </DisplayImg>
    <Content>
      <template v-slot:content>
        <div class="grid grid-cols-1 md:grid-cols-5">
          <div class="flex flex-col col-span-3">
            <UnitName>
              <template v-slot:name>
                Entire apartment hosted by Wallace
              </template>
              <template v-slot:description>
                6 guests | 2 bedrooms | 3 beds | 2 baths
              </template>
            </UnitName>
            <UnitInfo>
            </UnitInfo>
            <UnitRegulation/>
          </div>
          <div class="col-span-2 py-6 px-10">
            <UnitBookingForm/>
          </div>
        </div>
      </template>
    </Content>
    <Footer/>
  </div>
</template>

<script>
export default {
}
</script>
