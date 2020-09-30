<template>
  <div class="h-full w-full pb-10">
    <!-- 
      Navigation bar
     -->
    <Navigation>
      <template v-slot:widget-1>
        
      </template>
      <template v-slot:widget-2>
        
      </template>
      <template v-slot:widget-3>
        
      </template>
    </Navigation>

    <!-- 
      Location Name & State 
     -->
    <LocationHeader>
      <template v-slot:name>
          
      </template>
      <template v-slot:location>
          
      </template>
    </LocationHeader>
    
    <!-- 
      Display image of unit
     -->
     
    <DisplayImg>
        <template v-slot:main>
        </template>
        <template v-slot:sub>
        </template>
    </DisplayImg>

    <!-- Unit information -->
    <Content>
      <template v-slot:content>
      </template>
    </Content>

    <!-- Footer -->
  </div>
</template>

<script>
export default {
  mounted(){
    let controller = new ScrollMagic.Controller();
    let scene = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook:0.1})
            .setPin("#bookingForm")
						.addTo(controller);
  }
}
</script>
