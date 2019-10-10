<template>
  <div class="home">
    <div class="row">
      <DPanel class="item" text="折线图">
        <ve-line :theme="$store.state.echartsTheme" :data="chartData"></ve-line>
      </DPanel>
      <DPanel class="item" text="柱状图">
        <ve-histogram :theme="$store.state.echartsTheme" :data="chartData"></ve-histogram>
      </DPanel>    
      <DPanel class="item" text="环图">
        <ve-ring :theme="$store.state.echartsTheme" :data="chartData"></ve-ring>
      </DPanel>    
    </div>
    <div class="row">
      <DPanel class="item" text="条形图">
        <ve-bar :theme="$store.state.echartsTheme" :data="chartData"></ve-bar>
      </DPanel>
      <DPanel class="item" text="饼图">
        <ve-pie :theme="$store.state.echartsTheme" :data="chartData"></ve-pie>
      </DPanel>    
      <DPanel class="item" text="雷达图">
        <ve-radar :theme="$store.state.echartsTheme" :data="chartData"></ve-radar>
      </DPanel>    
    </div>
  </div>
</template>

<script>

export default {
  name: 'page1',
  data () {
    return {
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
    }
  }
}
</script>


<style lang="less">
  .row {
    display: flex;
    .item {
      width: 33.33333%;
    }
  }
</style>