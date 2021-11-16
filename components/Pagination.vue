<template>
   <nav role="navigation" aria-label="Pagination" class="pager">
     
      <ul>
        <li
          :style="`opacity: ${current !== 0 ? 1 : 0}`"
          aria-label="Previous page"
          class="pager__shortcut"
          @click="$emit('set-current', current - 1)"
        >
          <a href="#" class="material-icons mt-text-color">arrow_back</a>
        </li>
         <li
          v-if="total > max && current !== 0"
          :key="`nav-li-${1}`"
          :aria-label="`Page ${1}`"
          :aria-current="1 === displayCurrent ? 'page' : ''"
        >
          <strong v-if="1 === displayCurrent" class="active mt-text-font">{{ 1 }}</strong>
          <a v-else href="#" @click="$emit('set-current', 1 - 1)" class="mt-text-color mt-text-font mt-text-font-bold">{{ 1 }}</a>
        </li>
        <li
          v-for="nbr of pageTotal"
          :key="`nav-li-${nbr}`"
          :aria-label="`Page ${nbr}`"
          :aria-current="nbr === displayCurrent ? 'page' : ''"
        >
          <strong v-if="nbr === displayCurrent" class="active mt-text-font">{{ nbr }}</strong>
          <a v-else href="#" @click="$emit('set-current', nbr - 1)" class="mt-text-color mt-text-font mt-text-font-bold">{{ nbr }}</a>
        </li>
         <li
          v-if="total > max && current !== total"
          :key="`nav-li-${total}`"
          :aria-label="`Page ${total}`"
          :aria-current="total === displayCurrent ? 'page' : ''"
        >
          <strong v-if="total === displayCurrent" class="active mt-text-font">{{ total }}</strong>
          <a v-else href="#" @click="$emit('set-current', total - 1)" class="mt-text-color mt-text-font mt-text-font-bold">{{ total }}</a>
        </li>
        <li
          :style="`opacity: ${displayCurrent !== total ? 1 : 0}`"
          aria-label="Next page"
          class="pager__shortcut"
          @click="$emit('set-current', current + 1)"
        >
          <a href="#" class="material-icons mt-text-color">
             arrow_forward
          </a>
        </li>
      </ul>
    </nav>
    
</template>
<script setup>

const props = defineProps({
  total: { type: Number, default: 1 },
  current: { type: Number, default: 1 }
})

const max = 8

const displayCurrent = computed(() => props.current + 1)
const pageTotal = computed(() => {
  let pages = props.total
  debugger
  if(props.current !== props.total - 1 && props.current < max)  pages = Array.from(Array(max).keys()).map(k => k + props.current + 1)
  else if(props.current !== props.total - 1 && props.current >= max - 1){
    const prev =  Array.from(Array(max/2).keys()).map(k => props.current - k - 1)
    const next =  Array.from(Array(max/2).keys()).map(k => k + props.current + 1)
    let full = prev.concat(next)
    full.push(props.current)
    pages = full.sort((a, b) => a - b)
  }
  else if(props.total >= max &&  props.current === props.total -1) pages =  Array.from(Array(max).keys()).map(k => k + props.current - max - 1)
  return pages.filter(p => p <= props.total -1)
})


</script>
<style lang="scss">
@import '@/assets/sass/variables';
.pager {
  width: 100%;
  ul {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      margin: 8px;
      
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: x-large;
      strong, a {
        width:48px;
        height:48px;
        text-align: center;
        padding: 4px;
         display: flex;
      align-items: center;
      justify-content: center;
      }
      .active {
        border-radius: 50%;
        background-color: $mainColor;
        color: white;
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
